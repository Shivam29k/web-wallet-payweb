"use client"

import { TurboRepoIcon } from "@repo/ui/icons";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";


export function TechUsed() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 pb-8">
      <h2 className=" text-xl md:text-4xl font-bold text-[#8969ce] w-[80vw] text-center">
        Technologies used in this project.
      </h2>
      {/* make a tree like structure */}
      <div className="flex items-center justify-center flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[80vw] md:w-[700px] items-center place-content-center  justify-center">
          <HoverCard>
            <TurboRepoIcon />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/typescript-logo-freelogovectors.net_-400x400.png"
              alt="ts logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/postgresql_logo.png"
              alt="postgres logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              src="https://seeklogo.com/images/R/recoil-logo-6D0128B9E2-seeklogo.com.png"
              alt="Recoil logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/node-js-logo-freelogovectors.net_-640x400.png"
              alt="nodejs logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_-400x225.png"
              alt="react logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_-640x400.png"
              alt="nextjs logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://cdn.freelogovectors.net/wp-content/uploads/2022/01/prismalogo-freelogovectors.net_-400x121.png"
              alt="prisma logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
              alt="Framer motion Logo"
            />
          </HoverCard>
          <HoverCard>
            <img
              className="h-[100%] object-contain"
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
              alt="tailwindcss logo"
            />
          </HoverCard>
        </div>
      </div>
    </div>
  );
}

function HoverCard({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
    <motion.div
        ref={ref}
      className="border hover:scale-110 rounded-xl  hover:shadow-xl group transition-all duration-500"
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
      }}

    >
      <div className="h-24 flex items-center justify-center  w-full p-6 transition-all duration-300 hover:scale-125 ease-in-out">
        {children}
      </div>
    </motion.div>
  );
}
