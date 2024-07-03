"use client";

import IPhone from "@repo/ui/IPhone";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Cardsdata } from "./data";

export default function CardsLandingPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  return (
    <div className="bg-[#8969CE]" ref={ref}>
      {Cardsdata.map((card, index) => (
        <HeroCard key={index} {...card} i={index} progress={scrollYProgress} />
      ))}
    </div>
  );
}

interface props {
  title: string;
  description: string;
  image: string;
  i: number;
  progress: MotionValue<number>;
}

function HeroCard({ title, description, image, i, progress }: props) {
  // for thr card opacity and rotation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // "positionOfElement positionOfWindow"    [whereToStartTracking whereToEndTracking]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0.5, 1], [0, 12]);
  const springRotate = useSpring(rotate, {
    stiffness: 400,
    damping: 90,
    mass: 1,
  });

  // for the card scale
  const scale = useTransform(progress, [i * 0.25, 1], [1, 1 - (3 - i) * 0.05]);

  const scalePhone = useTransform(
    progress,
    [i * 0.25, 1],
    [1, 1 - (3 - i) * 0.15]
  );

  const springScale = useSpring(scale, {
    stiffness: 400,
    damping: 90,
    mass: 0.3,
  });
  return (
    <motion.div
      className={`h-[100vh] w-full flex items-center justify-center sticky top-0`}
    >
      <motion.div
        ref={ref}
        className=" h-96 md:h-[500px] w-80 md:w-[800px] bg-neutral-100 rounded-2xl relative border-2 border-neutral-200"
        style={{
          opacity,
          top: `calc(-5% + ${i * 30}px)`,
          boxShadow: `20px 20px 5px 0px rgba(0,0,0,0.3)`,
          scale: springScale,
        }}
      >
        <div className="m-12 w-1/2">
          <h1 className="text-3xl  md:text-5xl text-gray-700 mb-12 font-medium">
            {title}
          </h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
        <motion.div
          className="absolute -top-10 -right-12 h-fit w-fit"
          style={{
            rotate: springRotate,
            scale: scalePhone,
          }}
        >
          <IPhone
            image={image}
            navBarColor="bg-slate-100"
            className="hidden md:block"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
