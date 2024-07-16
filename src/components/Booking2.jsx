import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { SlBadge } from 'react-icons/sl';
import { IoIosFlash } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <div className="booking bg-[#23262F] py-32">
      <div className="flex mx1200 xl:flex-row lg:flex-row md:flex-row flex-col place-items-center bg-[#141416] rounded-2xl  p-10">
        <div className="classes flex-1  rounded-xl">
          <div className="card p-8">
            <h1 className="uppercase text-gray-400 font-bold mb-8">EXPLORE FITNESS PRO PROGRAM</h1>

            <div className="class flex justify-between place-items-center gap-6 duration-200 bg-slate-800 hover:bg-gray-700 mb-4 p-4 cursor-pointer rounded-md">
              <div className="contant flex gap-6 place-items-center">
                <div className="icon h-10 w-10 rounded-md flex justify-center bg-[#45B26B] place-items-center">
                  <IoIosFlash className="text-xl" />
                </div>
                <div className="text ">
                  <h2 className="font-bold text-xl">For the beginners</h2>
                </div>
              </div>
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </div>
            <div className="class flex justify-between place-items-center gap-6 duration-200 bg-slate-800 hover:bg-gray-700 mb-4 p-4 cursor-pointer rounded-md">
              <div className="contant flex gap-6 place-items-center">
                <div className="icon h-10 w-10 rounded-md flex justify-center bg-[#9757D7] place-items-center">
                  <IoIosFlash className="text-xl" />
                </div>
                <div className="text ">
                  <h2 className="font-bold text-xl">For the beginners</h2>
                </div>
              </div>
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </div>
            <div className="class flex justify-between place-items-center gap-6 duration-200 bg-slate-800 hover:bg-gray-700 mb-4 p-4 cursor-pointer rounded-md">
              <div className="contant flex gap-6 place-items-center">
                <div className="icon h-10 w-10 rounded-md flex justify-center bg-[#3772FF] place-items-center">
                  <IoIosFlash className="text-xl" />
                </div>
                <div className="text ">
                  <h2 className="font-bold text-xl">For the beginners</h2>
                </div>
              </div>
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="image px-20 flex flex-col place-items-center flex-1 relative">
          <img className=" relative z-30 max-w-[300px]" src="bottle-2.png" alt="bottle.png" />
          <p className="text-gray-400 w-[70%] py-4 text-center"> Stacks is a production-ready library of stackable content blocks built in React Native</p>
          <button className="mt-3 flex gap-2 place-items-center bg-main px-4 p-2 font-bold rounded-full">
            Book a Class <BsArrowRightShort className="text-xl" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
