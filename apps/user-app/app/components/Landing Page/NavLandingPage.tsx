"use client"

import { motion, useScroll, useTransform, backInOut } from "framer-motion";
import Link from "next/link";
import { WalletIcon } from "@repo/ui/icons";
export function NavLandingPage() {
    const { scrollYProgress } = useScroll();  
    // const session  = await getServerSession();
    const background = useTransform(
      scrollYProgress,
      [0, 0.1],
      ["rgba(137, 105, 206, 0)", "rgba(137, 105, 206, 1)"]
    );
    const color = useTransform(
      scrollYProgress,
      [0, 0.1],
      ["#8969CE", "rgba(255, 255, 255, 1)"],
    );
    return (
      <nav className="top-0 w-full fixed z-20">
        <motion.div
          className="h-14 w-full flex items-center justify-between px-[5vw]"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: backInOut }}
          style={{
            background : background,
            color,
          }}
        >
          <Link href="/">
            <div className="flex gap-2 hover:cursor-pointer">
              <WalletIcon />
              <p className="font-bold text-xl">PayTW</p>
            </div>
          </Link>
          <Link href="/api/auth/signin">
            <div className="flex  gap-2 items-center  hover:cursor-pointer hover:underline decoration-[#8969CE] decoration-4 underline-offset-8">
              <p className="font-bold text-xl">Login</p>
            </div>
          </Link>
        </motion.div>
  
        <motion.div
          className="w-full h-1  bg-[#8969CE]"
          style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
          }}
        />
  
      </nav>
    );
  }