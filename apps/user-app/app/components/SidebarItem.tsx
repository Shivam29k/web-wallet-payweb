"use client"

import { usePathname, useRouter } from "next/navigation"

export const SidebarItem = ({ href, title, icon}: { href: string, title: string, icon: React.ReactNode }) =>{

    const selected  = usePathname() === href;
    const router = useRouter();


    return <div className={`flex p-6 gap-2 ${selected ? "bg-slate-200 text-[#6546ad]" : "hover:bg-slate-100"}  font-medium cursor-pointer`}
        onClick={() => router.push(href)}
    >
       <div className="">{icon}</div>
       <div>{title}</div> 
    </div>
}