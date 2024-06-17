"use server"

import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "../auth";
import db from "@repo/db/client";

export async function getProfileDetails() {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    const user = await db.user.findFirst({
        where: {
            id: Number(session?.user?.id)
        }
    });
    return {
        username: user?.name || "",
        email: user?.email || "",
        phone: user?.number || "",
    };
}