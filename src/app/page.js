"use client"
import React from 'react'
import Marquee from './componensts/marquee'
import Banner from './componensts/banner'
import DiagonalMarquee from './componensts/DiagonalMarquee'
import Line from './componensts/line'
import Products from './componensts/product'
import Accord from './componensts/accordion'
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
function Page() {
  const arr = [
    {
      name: "Luxury Velvet Matte Lipstick",
      price: 200,
      img: "https://images.unsplash.com/photo-1593642707525-6b1d7b1a8b5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      id: 1
    }
  ]


  return (
    <div className='bg-white'>
      <Marquee />
      <Banner />
      {/* <div className='bg-white flex items-center justify-center h-[40vh]'>
        <Products data={arr} />

      </div> */}
      <Line />
      <DiagonalMarquee/> 
      <DiagonalMarquee deg={0}/>
      <div className=' flex items-center justify-center h-[60vh] flex-col'>
      <h1 className={`${playfair.className} text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3`}>Have a question? </h1>
      <Accord title={"Is it responsive?"} content={"Yes. It is responsive."} />
      <Accord title={"Is it accessible?"} content={"Yes. It adheres to the WAI-ARIA design pattern."} />
      <Accord title={"Is it responsive?"} content={"Yes. It is responsive."} />
      <Accord title={"Is it accessible?"} content={"Yes. It adheres to the WAI-ARIA design pattern."} />

      </div>
    </div>
  )
}

export default Page