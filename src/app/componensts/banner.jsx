import { Button } from '@/components/ui/button'
import React from 'react'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
function Banner() {
  return (
    <div className={`w-full h-[80vh] md:bg-[url('/baner.png')] bg-[url('/mobile-banner.png')]  bg-cover bg-center ${playfair.className}`}>
      <div className='flex items-center flex-col gap-3 justify-center h-[80%] md:h-full text-center w-full  md:w-1/2 p-2 '>
          <h1 className='text-5xl md:text-7xl'>She's Cosmetics</h1>
          <h1 className='text-xl md:text-3xl'>Flawless Beauty, Effortless You!</h1>
          <Button variant={"default"}>Shop Now</Button>
      </div>
    </div>
  )
}

export default Banner