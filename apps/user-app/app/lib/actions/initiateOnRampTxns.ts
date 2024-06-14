"use server"

import db, {OnRampTransaction } from '@repo/db/client';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '../auth';

const transactionQueue: string[] = [];

export async function initiateOnRampTxns(provider: OnRampTransaction["provider"], amount: OnRampTransaction["amount"]) {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    if(!session?.user || !session?.user?.id){
        return {
            message: "Unauthorized request."
        }
    }

    const generateRandomString = (length: number): string => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const randomString = Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
        return randomString;
    };

    const token = generateRandomString(20);
    transactionQueue.push(token);
    setTimeout(() => {
        // cancel the transaction
        transactionQueue.splice(transactionQueue.indexOf(token), 1);

    }, 300000);

    const transation  = await db.onRampTransaction.create({
        data: {
            provider,
            amount: amount*100,
            status: "PROCESSING",
            startTime: new Date(),
            token: token,
            userId: Number(session?.user?.id),
        }
    })

    return transation? {
        message: "transaction initiated",
        token: token,
        user_identifier: session?.user?.id
    } : {
        message: "transaction failed"
    }
}