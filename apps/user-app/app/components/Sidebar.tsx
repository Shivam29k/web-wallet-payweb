"use client"

import { ClockIcon, HomeIcon, MoneyIcon, TransferIcon } from "@repo/ui/icons";
import { SidebarItem } from "./BarItems";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export function SideBar() {
    const [index, setIndex] = useState<number>(0);

    return <div className="w-96 border-r h-full hidden md:block">
      <div className="h-fit border-r relative">
        <div
            className={`absolute left-0 right-0 bg-slate-200 h-1/4 transition-all duration-500 rounded-right border-l-8 border-[#8969ce]`}
            style={{ transform: `translateY(${index*100}%)` }}
        />
        <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Dashboard" setIndex={setIndex} index={0}/>
        <SidebarItem href={"/addbalance"} icon={<MoneyIcon />} title="Add Balance" setIndex={setIndex} index={1} />
        <SidebarItem href={"/p2p"} icon={<TransferIcon />} title="P2P Transfer" setIndex={setIndex} index={2}/>
        <SidebarItem href={"/transactions"} icon={<ClockIcon />} title="Transactions" setIndex={setIndex} index={3}/>
      </div>
    </div>
}   