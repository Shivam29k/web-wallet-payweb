interface RecentTxnCardProps {
    amount: number,
    startTime: Date,
    from: string,
    status?: string,
}

function RecentTxnCard({transactions, className}:{transactions: RecentTxnCardProps[], className?: string }) {

return (
    <div className={`mt-4 overflow-y-auto ${className}`}>
            {transactions.length === 0 ? <NoTransactions /> : transactions.map((txn, index) => (
                    <div key={index} className="flex justify-between border-b border-slate-300 my-2 items-center">
                            <div>
                                    <div>{txn.from}</div>
                                    <div className="text-gray-400 text-xs font-medium">{(dateToString(txn.startTime))}</div>
                            </div>
                            <div>
                                    <div className="ml-auto" >{txn.amount>0 ? "+ " : "- "}₹{(Math.abs(txn.amount))/100}</div>
                                    <div className={`${txn.status == "COMPLETED"&& "text-green-500"} ${txn.status == "PROCESSING"&& "text-yellow-500"} ${txn.status == "FAILED"&& "text-red-500"} text-xs font-medium w-20`}>{txn.status}</div>
                            </div>
                    </div>
            ))
            }
    </div>
)
}

function dateToString(date: Date){
    return date.toDateString();
}

function NoTransactions(){
    return <center className="h-24 flex items-center justify-center">
        <div>No transactions</div>
    </center>
}

export default RecentTxnCard