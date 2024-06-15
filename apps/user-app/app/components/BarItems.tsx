"use client"

import { usePathname, useRouter } from "next/navigation"

export const SidebarItem = ({ href, title, icon}: { href: string, title: string, icon: React.ReactNode }) =>{
    const selected  = usePathname() === href;
    const router = useRouter();
    return <div className={`relative flex p-6 gap-2 ${selected ? "text-[#6546ad]" : "hover:bg-slate-100"}  font-medium cursor-pointer`}
        onClick={() => router.push(href)}
    >
       <div className={`${selected && "pl-5 scale-110 transition-all duration-500"}`}>{icon}</div>
       <div className={`${selected && "pl-2 scale-110 transition-all duration-500"}`}>{title}</div> 
    </div>
}


export const BottomBarItem = ({ href, title, icon}: { href: string, title: string, icon: React.ReactNode }) =>{
    const selected  = usePathname() === href;
    const router = useRouter();
    return <div className={`flex flex-col h-full w-full items-center transition-all duration-100 backdrop-blur-md justify-center ${selected ? "text-white shadow" : "hover:bg-slate-100/20"}  font-medium cursor-pointer`}
        onClick={() => router.push(href)}
    >
       <div className={` transition-all duration-500  ${selected && "scale-125"}`}>{icon}</div>
       <div className={`text-xs pt-1 transition-all duration-500 ${selected && "scale-110 font-medium"}`}>{title}</div> 
    </div>
}