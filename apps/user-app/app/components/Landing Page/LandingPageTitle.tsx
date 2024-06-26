"use client"

import { motion, backInOut } from "framer-motion";

function LandingPageTitle() {
  return (
    <section className="absolute inset-0 flex flex-col gap-10 justify-center items-center z-10 pointer-events-none">
    <motion.h1
      className="text-6xl md:text-9xl text-[#8969CE] tracking-tight"
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
    >
     PayTW
    </motion.h1>
    <motion.p className="w-5/6 md:w-1/2 text-xl text-center tracking-wide text-[#8969CE]/70"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
      }}
    >
      Join the future of payments with PayTW with a simple and easy to
      use interface web wallet.
    </motion.p>
    <motion.button className="text-neutral-100 rounded-full   text-xl md:text-3xl bg-[#8969CE] py-2 px-8 md:px-10 border  border-indigo-900 pointer-events-auto"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        ease: backInOut,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      Join now
    </motion.button>
  </section> 
  )
}

export default LandingPageTitle