"use client"
import { ClockIcon, HomeIcon, MoneyIcon, TransferIcon } from "@repo/ui/icons";
import { BottomBarItem } from "./BarItems";
import { useState } from "react";

export function BottomBar() {
    const [index, setIndex] = useState<number>(0);
    
    return <div className="fixed bottom-0 h-24 w-full md:hidden flex items-center justify-center">
      <div className="shadow-2xl h-16 w-[90%] rounded-full flex justify-between overflow-clip transition-all duration-500 backdrop-blur bg-white/20">
        <div className={`bg-[#8969ce] h-full w-1/4 absolute  transition-all duration-500 ease-in-out`}
            style={{
                transform: `translateX(${index*100}%)`
            }}
        >

        </div>
        <BottomBarItem href={"/dashboard"} icon={<HomeIcon />} title="Dashboard" setIndex={setIndex} index={0} />
        <BottomBarItem href={"/addbalance"} icon={<MoneyIcon />} title="Add Balance" setIndex={setIndex} index={1} />
        <BottomBarItem href={"/p2p"} icon={<TransferIcon />} title="Transfer" setIndex={setIndex} index={2} />
        <BottomBarItem href={"/transactions"} icon={<ClockIcon />} title="History" setIndex={setIndex} index={3} />
      </div>
    </div>
  }