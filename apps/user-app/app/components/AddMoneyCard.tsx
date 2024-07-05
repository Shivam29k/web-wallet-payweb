"use client"

import { Button } from "@repo/ui/button"
import Input from "@repo/ui/input"
import { useState, useEffect } from "react"
import { initiateOnRampTxns } from "../lib/actions/initiateOnRampTxns"

declare global {
    interface Window {
        myData: {
            amount: number;
            token: string;
            user_identifier: number;
            bankName: string;
        };
    }
}

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: `https://paytw.shivamk.tech/fakebankpage`
},{
    name: "ICICI Bank",
    redirectUrl: `https://paytw.shivamk.tech/fakebankpage`
}]


function AddMoneyCard() {
    const [bank, setBank] = useState(SUPPORTED_BANKS[0] || { name: '', redirectUrl: '' });
    const [amount, setAmount] = useState(0);

    useEffect(()=>{
        console.log(bank.name)
    }, [bank])

    async function onClick(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (amount <= 0) {
            alert("Amount should be greater than 0")
            return
        }
        const response = await initiateOnRampTxns(bank?.name, amount);
        if (response?.message) {
            alert(response.message)
        }
        if (response?.token) {
            const newWindow = window.open(bank?.redirectUrl, "_blank", "height=600,width=800")
            if (newWindow) {
                newWindow.myData = { amount, bankName: bank.name, token: response.token, user_identifier: response.user_identifier }
            }
        }

    }
  return (
    <form className="flex gap-4 flex-col pt-4" onSubmit={onClick} >
        <div>
            <Input onChange={(e)=>setAmount(Number(e.target.value))} label="Amount" type="number"  />
        </div>
        <div>
            <h3>Bank</h3>
            <select 
            className="border border-gray-300 rounded-md w-full py-1 px-2 outline-blue-500" 
            required 
            onChange={(e) => {
                const selectedBank = SUPPORTED_BANKS.find(bank => bank.name === e.target.value);
                if (selectedBank) {
                setBank(selectedBank);
                }
            }}
            >
                {SUPPORTED_BANKS.map((bank) => <option key={bank.name} value={bank.name}>{bank.name}</option>)}
            </select>
        </div>
        <Button type="submit" > Add Money </Button>
        {/* <button className="bg-[#8969ce] text-white rounded-md py-1 mt-2 hover:bg-[#6840be]">Add Money</button> */}
    </form>
  )
}

export default AddMoneyCard