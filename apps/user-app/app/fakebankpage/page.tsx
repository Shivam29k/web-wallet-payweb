"use client"
import 
{ Button } from "@repo/ui/button";
import { approveOnRampTxn } from "../lib/actions/approveOnRampTxns";

// expoand window object to get the data passed from the parent window
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

export default function hdfcBankPage() {
    const data = window.myData;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(data){
            approveOnRampTxn(data.amount, data.token, data.user_identifier)
            .then((res)=>{
                alert(res.message);
                window.close();
            })
        } else {
            alert("Data not found");
            window.close();
        }
    }
    return <div className="bg-gradient-to-b from-sky-300 to-sky-50 h-[93vh] mt-[7vh]">
        <div className=" flex items-center justify-center flex-col">
            <h1 className="text-3xl p-4 pt-12 font-bold">
                    {data.bankName}
                </h1>
                <p className="pb-2 ">Do not refresh this page</p>
                <p className="text-red-500 italic max-w-96 text-center" >Note: this is a fake bank page just for devlopment and testing purpose.</p>
            </div>
        <div className="flex items-center justify-center p-4">
        <div className="border rounded w-96 bg-slate-300">
            <h1 className="border-b p-2 pb-0 font-medium">Internet Banking</h1>
            <div>
                {data.toString()}
            </div>
            <form className="p-2" onSubmit={handleSubmit}>
                <p className="text-red-500 italic pb-2 text-sm" >*Use any random username and password</p>
                <h2>Username</h2>
                <input type="username" className="rounded mb-2 w-full p-1" placeholder="username" required />
                <h2>Password</h2>
                <input type="password" className="rounded mb-2 w-full p-1" placeholder="password" required/>
                <div>
                    <div className="flex justify-between pb-2">
                        <h2>Amount:</h2>
                        <p>Rs {data.amount}</p>
                    </div>
                    <div className="flex justify-between pb-2">
                        <h2>To: </h2>
                        <p>Online Wallet Inc.</p>
                    </div>
                </div>
                <Button type="submit"  className="p-2 w-full bg-blue-400 rounded hover:bg-blue-500 font-bold">Pay</Button>
                
            </form>
        </div>
        </div>
    </div>
}

