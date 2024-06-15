"use client"
import { ClockIcon, HomeIcon, MoneyIcon, TransferIcon } from "@repo/ui/icons";
import { BottomBarItem } from "./BarItems";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export function BottomBar() {
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

    return <div className="fixed bottom-0 h-24 w-full md:hidden flex items-center justify-center">
      <div className="shadow-3xl h-16 w-[90%] rounded-full flex justify-between overflow-clip transition-all duration-500 backdrop-blur bg-white/20">
        <div className={`bg-[#8969ce] h-full w-1/4 absolute left-[${25*index}%] transition-all duration-500 ease-in-out`}>

        </div>
        <BottomBarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
        <BottomBarItem href={"/addbalance"} icon={<MoneyIcon />} title="Add Balance" />
        <BottomBarItem href={"/p2p"} icon={<TransferIcon />} title="Transfer" />
        <BottomBarItem href={"/transactions"} icon={<ClockIcon />} title="History" />
      </div>
    </div>
  }