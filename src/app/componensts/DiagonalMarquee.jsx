"use client";
import { Playfair_Display } from "next/font/google";
import { motion, useAnimate } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const DiagonalMarquee = ({deg}) => {
   const animation = useRef(null);
    const [box, setBox] = useState({
        isHover: false,
      });
      const {isHover} = box;
    const [scope, animate] = useAnimate();
    const offers = [
        "Luxury Velvet Matte Lipstick",
        "Glow Perfection Liquid Foundation",
        "24K Gold Infused Highlighter",
        "Silk Touch Hydrating Concealer",
        "Diamond Shine Lip Gloss",
          "Silk Touch Hydrating Concealer",
          "Rose Petal Blush Palette",
          "Lash Boost Waterproof Mascara",
          "Magic Fix Setting Spray",
          "Radiance Illuminating Primer",
          "Ultra Define Brow Sculptor"
      ];

      useEffect(() => {
        if (animation.current) {
          if (isHover) {
            animation.current.speed = 0.4;
          } else {
            animation.current.speed = 1;
          }
        }
      }, [isHover]);
      useEffect(() => {
        animation.current = animate(
          scope.current,
          { x: "50%" },
          { duration: 50, ease: "linear", repeat: Infinity }
        );
      }, []);
  return (
    <div className="relative w-full h-[50vh] overflow-hidden flex items-center justify-center bg-gray-100">
      <motion.div
       ref={scope}
       onMouseEnter={() => setBox({ ...box, isHover: true })}
       onMouseLeave={() => setBox({ ...box, isHover: false })}
        className={`absolute flex space-x-16 h-[20vh] items-center whitespace-nowrap ${deg == 0 ? "rotate-[-5deg]" :"rotate-[6deg]"} rounded-full bg-black`} // Rotate text diagonally

  >
    {
      Array.from({length:2}).map((_,idx)=>(
        <Fragment key={idx}>
        {offers.map((item, index) => (
          <span key={index} className="text-4xl text-white font-bold px-8 hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent ">
            {item}
          </span>
        ))}
        
        </Fragment>

      ))
    }
      </motion.div>
    </div>
  );
};
export default DiagonalMarquee