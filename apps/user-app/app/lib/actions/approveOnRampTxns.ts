"use server"

import db  from '@repo/db/client';

export async function approveOnRampTxn(amount: number, token: string, userId: number) {

    console.log("Approving transaction: ", amount, token, userId);
    try {
        await db.$transaction([
          // increment balance
          db.balance.update({
            where: {
              userId: Number(userId),
            },
            data: {
              amount: {
                increment: Number(amount)*100,
              },
            },
          }),
          // update txn status
          db.onRampTransaction.update({
            where: {
              token: token,
              status: "PROCESSING",
            },
            data: {
              status: "COMPLETED",
            },
          }),
        ]);
    } catch (e) {
        console.error(e);
        return {
            message: "Payment failed",
        }
    }
    return {
        message: "Transaction approved successfully"
    }
}




