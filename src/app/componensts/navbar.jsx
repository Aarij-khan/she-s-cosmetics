"use client";
import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { FaBarsStaggered } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Navbar() {
    const [box, setBox] = useState({
        isOpen: false,
      });
    
      const { reverse, isHover, isOpen } = box;
  return (
    <div>
         <div className="border  border-white/15  bg-neutral-950 backdrop-blur sticky top-4  z-20">
        <div className="w-full p-4 flex justify-center ">
          <div className="w-full flex justify-end md:justify-between items-center h-[4vh] md:h-[6vh] rounded-3xl">
            <div className="md:flex gap-4 text-gray-300 hidden ">
              <p>Home</p>
              <p>Products</p>
              <p>Contact</p>
              <p>Faqs</p>
            </div>
            <div className="md:flex gap-2 hidden ">
              <Button className="p-4 py-2 px-5 rounded-3xl border-2 border-gray-200 text-gray-300 font-semibold">
                Log in
              </Button>
              <Button className="py-2 px-4 rounded-3xl text-black bg-pink-300 font-semibold">
                Sign up
              </Button>
            </div>
            <div className="md:hidden ">
              {isOpen ? (
                <ImCross
                  size={26}
                  color="white"
                  onClick={() => setBox({ ...box, isOpen: !isOpen })}
                />
              ) : (
                <FaBarsStaggered
                  size={26}
                  color="white"
                  onClick={() => setBox({ ...box, isOpen: !isOpen })}
                />
              )}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="  overflow-hidden lg:hidden"
            >
              <div className="flex flex-col items-center justify-center  gap-4 py-4">
                <div className="flex flex-col text-center gap-4 text-gray-300 lg:hidden">
                  <p>Home</p>
                  <p>Features</p>
                  <p>Integration</p>
                  <p>Faqs</p>
                </div>
                <div className="gap-2 flex flex-col">
                  <button className="p-4 py-2 px-5 rounded-3xl border-2 border-gray-200 text-gray-300 font-semibold">
                    Log in
                  </button>
                  <button className="py-2 px-4 rounded-3xl text-black bg-lime-400 font-semibold">
                    Sign up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar