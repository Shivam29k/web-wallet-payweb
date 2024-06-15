"use server"

import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "../../lib/auth";


export async function getBankTransactions() {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    const transactions = await db.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    const txns = transactions.map((txn) => {
        return {
            amount: txn.amount,
            startTime: txn.startTime,
            from: txn.provider,
            status: txn.status
        }
    })

    return [...txns].reverse();
}