"use server"

import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "../auth";
import db from "@repo/db/client";

export async function getbalance() {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    const balance = await db.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        lockedAmount: balance?.locked || 0
    };
}