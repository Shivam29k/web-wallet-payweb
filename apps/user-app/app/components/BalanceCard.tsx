
export async function BalanceCard({amount, lockedAmount}: {amount: number, lockedAmount: number}) {
  return (
    <div className="py-2 mt-2">
      <KeyValue label="Balance" value={amount/100} currency="₹"/>
      <KeyValue label="Locked Balance" value={lockedAmount/100} currency="₹"/>
      <KeyValue label="Total Balance" value={(amount+lockedAmount)/100} currency="₹"/>
    </div>
  );
}

export async function P2PBalanceCard({amount}:{amount: number}) {
    return <div className="py-2 mt-2">
      <KeyValue label="Balance" value={amount/100} currency="₹"/>
    </div>
  
}

export function KeyValue({ label, value, currency }: { label: string; value: number, currency?: string}) {
  return (
    <div className="pt-2">
      <div className="flex justify-between">
        <div>{label}</div>
        <div>{currency} {value} </div>
      </div>
      <hr className="mt-1 border-slate-300" />
    </div>
  );
}

export default BalanceCard;
