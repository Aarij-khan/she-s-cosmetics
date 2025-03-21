"use client"
import React from 'react'
import Marquee from './componensts/marquee'
import Banner from './componensts/banner'
import DiagonalMarquee from './componensts/DiagonalMarquee'
import Line from './componensts/line'
import Products from './componensts/product'
import Accord from './componensts/accordion'
import { useEffect } from "react";
import { toast } from "sonner";
import Component from '@/components/comp-299'
function Page() {
  const arr = [
    {
      name : "Luxury Velvet Matte Lipstick",
      price : 200,
      img : "https://images.unsplash.com/photo-1593642707525-6b1d7b1a8b5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      id : 1
    }
  ]

    
  return (
    <div className='bg-white'>
      <Marquee/>
      <Banner/>
      <Line/>
      <div className='bg-white flex items-center justify-center h-screen'>
      <Products data={arr}/>
       <Accord title={"Is it accessible?"} content={"Yes. It adheres to the WAI-ARIA design pattern."}/>
    </div>
      {/* <DiagonalMarquee/> */}
      {/* <DiagonalMarquee deg={0}/>  */}
    </div>
  )
}

export default Page