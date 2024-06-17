"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import Input from "@repo/ui/input";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/p2ptxns"; 
import { customAlert } from "@repo/ui/customAlert";


export default function SendMoneyCard() {
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState(0);

    const handleOnClick = () =>{
        if(email.length > 0 && amount > 0){
            p2pTransfer(email, amount).then((res) => {
                customAlert(res?.icon , res?.message);
            })
        }else {
            customAlert("error", "Please enter valid email and amount");
        }

    }
    return <>
        <Card title="Transfer money to another user" className="flex flex-col gap-3 max-w-[500px] ">        
            <Input type="email" label="Email" placeholder="naruto@gmail.com" onChange={(e)=>setEmail(e.target.value)}>
            </Input>
            <Input type="number" label="Amount" placeholder="100" onChange={(e)=>setAmount(Number(e.target.value))}>
            </Input>
            <Button onClick={handleOnClick}> Send Money </Button>
        </Card>
    </>
}