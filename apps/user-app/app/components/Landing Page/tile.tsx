"use client"

import { motion } from "framer-motion";

function Tile() {

  return (
    <motion.div
      className="aspect-square bg-neutral-100 border border-neutral-200"
      whileHover={{
        zIndex: 1,
        backgroundColor: "#8969CE",
      }}
      transition={{
        duration: 2,
        ease: "easeOut"
      }}
    />
  );
}

function TilesBg() {
  return <section className="w-full h-screen grid grid-cols-20 overflow-clip circular-mask">
  {/* Grid background */}
  {Array.from(Array(20 * 100)).map((_, i) => (
    <Tile key={i} />
  ))}
</section>
}

export  { TilesBg, Tile };
