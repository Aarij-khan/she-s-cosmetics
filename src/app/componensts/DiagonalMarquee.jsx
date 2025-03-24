"use client";
import { Playfair_Display } from "next/font/google";
import { Fragment, useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const DiagonalMarquee = ({ deg }) => {
  const [isHover, setIsHover] = useState(false);

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
    "Ultra Define Brow Sculptor",
  ];

  return (
    <div className="relative w-full h-[25vh] lg:h-[50vh] overflow-hidden flex items-center justify-center bg-gray-100">
      <div
        className={`absolute flex space-x-16 h-[10vh] lg:h-[20vh] items-center whitespace-nowrap ${deg == 0 ? "rotate-[-5deg]" : "rotate-[6deg]"} rounded-full bg-black overflow-hidden`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`flex space-x-16 animate-marquee ${isHover ? "paused" : ""}`}
        >
          {Array.from({ length: 2 }).map((_, idx) => (
            <Fragment key={idx}>
              {offers.map((item, index) => (
                <span
                  key={index}
                  className="text-2xl lg:text-4xl text-white font-bold px-8 bg-clip-text"
                >
                  {item}
                </span>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagonalMarquee;