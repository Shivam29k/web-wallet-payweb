import { Card } from "@repo/ui/card";
import AddMoneyCard from "../../components/AddMoneyCard";
import BalanceCard from "../../components/BalanceCard";
import RecentTxnCard from "../../components/RecentTxnCard";
import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "../../lib/auth";
import { Page } from "@repo/ui/page";

async function getbalance() {
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

async function getTransactions() {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    const transactions = await db.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return transactions.map((txn) => {
        return {
            amount: txn.amount,
            startTime: txn.startTime,
            from: txn.provider,
            status: txn.status
        }
    })
}


export default async function Transfer(){
    const balance = await getbalance();
    const transactions = await getTransactions();
    return (
        <Page title="Add Balance">
            <div className="grid lg:grid-cols-2 w-full gap-4">
                <Card title="Add Money"> <AddMoneyCard /> </Card>
                <div className="flex flex-col gap-4">
                    <Card title="Balance" > <BalanceCard lockedAmount={balance.lockedAmount} amount={balance.amount} /> </Card>
                    <Card title="Recent Transactions"> <RecentTxnCard transactions={transactions} className="max-h-96" /> </Card>
                </div>
            </div>
        </Page>
    )
}
