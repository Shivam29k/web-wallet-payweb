"use client"

import { ClockIcon, HomeIcon, MoneyIcon, TransferIcon } from "@repo/ui/icons";
import { SidebarItem } from "./BarItems";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export function SideBar() {
    const [index, setIndex] = useState<number>(0);
    const pathname = usePathname();
    const getSideBarIndex = (path: string) => {
        switch(path) {
            case '/dashboard':
                return 0;
            case '/addbalance':
                return 1;
            case '/p2p':
                return 2;
            case '/transactions':
                return 3;
            default:
                return 0;
        }
    };

    useEffect(()=>{
        setIndex(getSideBarIndex(pathname));
    }, [pathname]);

    return <div className="w-96 border-r h-full hidden md:block">
      <div className="h-fit border-r relative">
        <div
            className={`absolute left-0 right-0 bg-slate-200 h-1/4 transition-all duration-500 rounded-right top-[${25*index}%] border-l-8 border-[#8969ce]`}
        />
        <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
        <SidebarItem href={"/addbalance"} icon={<MoneyIcon />} title="Add Balance" />
        <SidebarItem href={"/p2p"} icon={<TransferIcon />} title="P2P Transfer" />
        <SidebarItem href={"/transactions"} icon={<ClockIcon />} title="Transactions" />
      </div>
    </div>
}  