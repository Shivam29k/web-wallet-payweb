import { Card } from "@repo/ui/card";
import AddMoneyCard from "../../components/AddMoneyCard";
import BalanceCard from "../../components/BalanceCard";
import RecentTxnCard from "../../components/RecentTxnCard";
import { Page } from "@repo/ui/page";
import { getbalance } from "../../lib/actions/getBalance";
import { getBankTransactions } from "../../lib/actions/getBankTransactions";




export default async function Transfer(){
    const balance = await getbalance();
    const transactions = await getBankTransactions();
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
