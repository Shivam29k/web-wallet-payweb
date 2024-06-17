"use server"

import { getBankTransactions } from "./getBankTransactions";
import { getP2PTransactions } from "./getP2PTransactions";

export async function getAllTxns(){
    const bankTxn = (await getBankTransactions() ?? []).filter((txn) => txn.status === "COMPLETED").map(({ status, from, ...rest }) => rest);
    const p2pTxn = (await getP2PTransactions() ?? []).map(({ from, ...rest }) => rest);

    const txns =  [...bankTxn, ...p2pTxn].sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

    let currentbalance = 0;
    const reverseTxns = [...txns].reverse().map((txn)=>{
        currentbalance += txn.amount;
        return {...txn, balance: currentbalance}
    })
    const finalTxns = txns.map((txn, index)=>{
        const reverseTxn = reverseTxns[reverseTxns.length - 1 - index];
        return {
            ...txn,
            balance: reverseTxn ? reverseTxn.balance : 0,
        }
    })
    return finalTxns;
}
