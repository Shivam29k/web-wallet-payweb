import { Card } from "@repo/ui/card"
import { Page } from "@repo/ui/page"
import RecentTxnCard from "../../components/RecentTxnCard";
import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "../../lib/auth";

async function getTransactions() {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    const transactions = await db.p2PTransfer.findMany({
        where: {
            OR: [
                { fromUserId: Number(session?.user?.id) },
                { toUserId: Number(session?.user?.id) }
            ]
        }
    });
    const transactionsDetails = await Promise.all(transactions.map(async (txn) =>{
        const from = await db.user.findUnique({
            where: {
                id: txn.fromUserId
            }
        });
        const sent = from?.email == session.user.email? true : false
        let to;
        if(sent){
            to = await db.user.findUnique({
                where: {
                    id: txn.toUserId
                }
            });
        }
        return {
            amount: sent? -txn.amount : txn.amount ,
            startTime: txn.timestamp,
            from: sent? "to: " + to?.email : "from: " + from?.email,
        }
    }));
    return transactionsDetails;
}

export default async function Transactions(){
    const transactions = await getTransactions();
    return (
        <Page title="Transactions">
            <Card title="Transaction History">
            <RecentTxnCard transactions={transactions} className="max-h-[75vh]" />
            </Card>
        </Page>
    )
}