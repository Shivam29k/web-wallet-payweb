"use client"

import { Appbar } from "@repo/ui/appbar"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"



export function AppbarClient(){
    const session = useSession()
    const router = useRouter()

    return <div className="fixed w-full top-0 left-0 overflow-hidden z-10">
        <Appbar 
            onSignin={signIn} 
            onSignout={async ()=>{
                await signOut();
                router.push("/");
            }}
            user={session.data?.user}
        />
    </div>
}