"use client";
import { Playfair_Display } from "next/font/google";
import { Fragment, useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const DiagonalMarquee = ({ deg, marquees, classNames, borderprops }) => {
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

      <div
        className={`flex space-x-16 h-[15vh] md:h-[20vh] items-center whitespace-nowrap ${deg} rounded-full ${classNames} overflow-hidden`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`flex  ${marquees}  transition-all ease-in-out duration-1500`}
        >
          {Array.from({ length: 2 }).map((_, idx) => (
            <Fragment key={idx}>
              {offers.map((item, index) => (
                <span
                  key={index}
                  className={`text-2xl lg:text-4xl ${borderprops ? `${borderprops} font-semibold` : "text-white font-bold"}   hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent`}
                >
                  {item}
                </span>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

  );
};

export default DiagonalMarquee;
