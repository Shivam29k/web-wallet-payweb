import { Center } from "@repo/ui/center";
import { Page } from "@repo/ui/page";
import SendMoneyCard from "../../components/SendMoneyCard";
import BalanceCard from "../../components/BalanceCard";
import { getbalance } from "../../lib/actions/getBalance";
import { Card } from "@repo/ui/card";

export default async function P2P(){
    const balance = await getbalance()
    return (
        <>
            <Page title="P2P Transfer">
                {/* <Center> */}
                    <div className="flex flex-col gap-4 md:flex-row">
                    <SendMoneyCard />
                    <Card title="Balance" > <BalanceCard lockedAmount={balance.lockedAmount} amount={balance.amount} /> </Card>
                    </div>
                {/* </Center>  */}
            </Page>
        </>
    )
}