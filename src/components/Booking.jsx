import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { SlBadge } from 'react-icons/sl';
import { IoIosFlash } from 'react-icons/io';
import { BsArrowRightShort } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Booking = () => {
  return (
    <div className="booking bg-[#23262F]">
      <div className="flex mx1200 flex-col lg:flex-row xl:flex-row md:flex-row p-10">
        <div className="image flex-1 relative">
          <img className=" relative z-30" src="booking/book-pic-dark.png" alt="book-pic-dark.png" />
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute top-[50%] left-[70px]"
            src="booking/ball-green.png"
            alt="ball-green.png"
          />
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute bottom-[160px] w-[150px] right-[40px] "
            src="booking/dumbbells.png"
            alt="dumbbells.png"
          />
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute top-[150px] right-[40px] w-[160px] z-50"
            src="booking/ball.png"
            alt="ball.png"
          />
        </div>
        <div className="classes flex-1 bg-[#141416] rounded-xl">
          <div className="card p-8">
            <h1 className="text-4xl font-bold">Book a class</h1>
            <p className="text-gray-400 mt-4">Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</p>
            <div className="class my-4 flex gap-6 flex-col md:flex-row lg:flex-row xl:flex-row p-4 border-2 cursor-pointer duration-200 hover:border-green-200 border-transparent rounded-md">
              <div className="icon h-10 w-10 rounded-full flex justify-center bg-[#45B26B] place-items-center">
                <FaUserAlt />
              </div>
              <div className="text">
                <h2 className="font-bold text-xl">For the beginners</h2>
                <p className="text-gray-400 w-[80%]">You never workout before, it’s now a good start</p>
              </div>
            </div>
            <div className="class mb-4 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 p-4 border-2 cursor-pointer hover:border-purple-200 duration-200 border-transparent rounded-md">
              <div className="icon h-10 w-10 rounded-full flex justify-center bg-[#9757D7] place-items-center">
                <SlBadge className="text-xl" />
              </div>
              <div className="text">
                <h2 className="font-bold text-xl">For the beginners</h2>
                <p className="text-gray-400 w-[80%]">You never workout before, it’s now a good start</p>
              </div>
            </div>
            <div className="class flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 p-4 py-4 border-2 cursor-pointer duration-200 hover:border-blue-200 border-transparent rounded-md">
              <div className="icon h-10 w-10 rounded-full flex justify-center bg-[#3772FF] place-items-center">
                <IoIosFlash className="text-xl" />
              </div>
              <div className="text">
                <h2 className="font-bold text-xl">For the beginners</h2>
                <p className="text-gray-400 w-[80%]">You never workout before, it’s now a good start</p>
              </div>
            </div>
            <p className="text-gray-400 mt-4">
              <span className="text-green-400 font-bold">10% Discount</span> if you’re already using the <span className="text-white  font-bold">Fitness Pro</span> on App Store
            </p>
            <div className="flex justify-end">
              <button className="mt-3 flex gap-2 place-items-center hover:bg-hovermain duration-300 bg-main px-4 p-2 font-bold rounded-full">
                Book a Class <BsArrowRightShort className="text-xl" />{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
