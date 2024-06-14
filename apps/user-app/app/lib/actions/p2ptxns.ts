"use server"

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth"
import { NEXT_AUTH_OPTIONS } from "../auth";
import { SweetAlertIcon } from "sweetalert2";

export async function p2pTransfer(email: string, amount: number){

    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    const from = session?.user?.id;
    if(!from){
        return {
            icon: "error" as SweetAlertIcon,
            message: "You are not logged in"
        }
    }

    const toUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    });


    if(!toUser){
        return {
            icon: "error" as SweetAlertIcon,
            message: "User not found"
        }
    }

    const txn = await prisma.$transaction(async (tx) => {

        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;
        const fromBalance = await tx.balance.findFirst({
            where:{
                userId: Number(from)
            }         
        });

        if(fromBalance && fromBalance.amount < amount*100){
            return {
                icon: "error" as SweetAlertIcon,
                message: "Insufficient Balance"
            };
        }

        await tx.balance.update({
            where: { userId: Number(from) },
            data: { amount: { decrement: amount*100 } }
        });

        await tx.balance.update({
            where: { userId: toUser.id},
            data: { amount: { increment: amount*100}}
        });

        await tx.p2PTransfer.create({
            data: {
                amount: amount*100,
                fromUserId: Number(from),
                toUserId: toUser.id,
                timestamp: new Date()
            }
        })

        return {
            icon: "success" as SweetAlertIcon,
            message: "Transfer Successful"
        }
    })
    return txn;
}