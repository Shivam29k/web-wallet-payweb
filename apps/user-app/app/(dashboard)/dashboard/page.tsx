import { Page } from "@repo/ui/page";
import { BalanceGraph } from "../../components/BalanceGraph";
import BalanceCard from "../../components/BalanceCard";
import { getbalance } from "../../lib/actions/getBalance";
import { getProfileDetails } from "../../lib/actions/getProfileDetails";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import { ProfileCard } from "../../components/ProfileCard";

export default async function Dasboard(){
    const balance = await getbalance();
    const user = await getProfileDetails();

    return (
        <Page title="Dashboard" >
            <div className="grid md:gap-4 grid-cols-1 md:grid-cols-2">
                <Card title="Profile" className="mb-4">
                    <ProfileCard username={user.username} email={user.email} phone={user.phone} />
                </Card>
                <Card title="Balance" className="mb-4">
                    <BalanceCard amount={balance.amount} lockedAmount={balance.lockedAmount} />
                </Card>
            </div>
            <BalanceGraph />
        </Page>
    )
}
