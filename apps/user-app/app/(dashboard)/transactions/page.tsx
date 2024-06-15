"use client"
import { Card } from "@repo/ui/card"
import { Page } from "@repo/ui/page"
import RecentTxnCard from "../../components/RecentTxnCard";
import { getP2PTransactions } from "../../lib/actions/getP2PTransactions";
import { useState, useEffect } from "react";
import { getBankTransactions } from "../../lib/actions/getBankTransactions";


interface txnsSchema {
    amount: number;
    startTime: Date;
    from: string;
}
enum TransferType {
    bank = "bank",
    p2p = "p2p"
}

export default function Transactions(){
    const [transactions, setTransactions] = useState<txnsSchema[]>();
    const [transferType, setTransferType] = useState<TransferType>(TransferType.p2p);

    useEffect(() => {
        if(transferType == TransferType.p2p){
            getP2PTransactions().then((res)=>{
                setTransactions(res);
            })
        } else {
            getBankTransactions().then((res)=>{
                setTransactions(res);
            })
        }
    }, [transferType]);
    
    return (
        <Page title="Transactions">
            <Card title="Transaction History">
                
            {/* toggle component */}
            <div className="relative flex bg-gray-300 w-fit py-1 px-1 rounded-full mt-3 transition-all duration-300">
                <div
                    className={`absolute top-0 bottom-0 left-0 right-0 bg-[#8969ce] rounded-full transition-transform duration-300 w-[53%]`}
                    style={{
                        transform: transferType === TransferType.bank ? 'translateX(0)' : 'translateX(94%)',
                    }}
                />
                <button
                    className={`${transferType === TransferType.bank ? 'text-white' : 'text-black'} relative  p-2 py-1 rounded-full transition-all duration-300`}
                    onClick={() => setTransferType(TransferType.bank)}
                >
                    Bank Transfer
                </button>
                <button
                    className={`${transferType === TransferType.p2p ? 'text-white' : 'text-black'} relative p-2 py-1 rounded-full transition-all duration-300`}
                    onClick={() => setTransferType(TransferType.p2p)}
                >
                    P2P Transfer
                </button>
            </div>

            {transactions && <RecentTxnCard transactions={transactions} className="max-h-[70vh]" />}
            </Card>
        </Page>
    )
}