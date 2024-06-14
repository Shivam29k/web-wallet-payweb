"use client"

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import Input from "@repo/ui/input";
import { Page } from "@repo/ui/page";
import { useState } from "react";
import { p2pTransfer } from "../../lib/actions/p2ptxns";
import { customAlert } from "@repo/ui/customAlert";
import { error } from "console";

export default function P2P(){
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
    return (
        <>
            <Page title="P2P Transfer">
                <Center>
                    <Card title="Transfer money to another user" className="flex flex-col gap-3 max-w-96 my-24">        
                        <Input type="email" label="Email" placeholder="naruto@gmail.com" onChange={(e)=>setEmail(e.target.value)}>
                        </Input>
                        <Input type="number" label="Amount" placeholder="100" onChange={(e)=>setAmount(Number(e.target.value))}>
                        </Input>
                        <Button onClick={handleOnClick}> Send Money </Button>
                    </Card>
                </Center> 
            </Page>
        </>
    )
}