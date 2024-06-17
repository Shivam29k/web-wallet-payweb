import { Page } from "@repo/ui/page";
import SendMoneyCard from "../../components/SendMoneyCard";
import { P2PBalanceCard } from "../../components/BalanceCard";
import { getbalance } from "../../lib/actions/getBalance";
import { Card } from "@repo/ui/card";

export default async function P2P(){
    const balance = await getbalance()
    return (
        <>
            <Page title="P2P Transfer">
                    <div className="flex flex-col gap-4 md:flex-row">
                    <SendMoneyCard />
                    <Card title="Balance" > <P2PBalanceCard amount={balance.amount} /> </Card>
                    </div>
            </Page>
        </>
    )
}