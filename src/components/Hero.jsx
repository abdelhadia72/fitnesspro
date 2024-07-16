import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className="flex gap-10 pt-10 mx1200 place-items-center h-[80vh]">
      <div className="text relative flex-1">
        <h3 className="font-bold text-gray-400">TRAIN SMARTER. GET STRONGER</h3>
        <h1 className="font-bold text-6xl py-2">Simple fitness experience for everyone.</h1>
        <p className="text-gray-400 mt-4 w-[80%]">Track your workouts, get better results, and be the bestversion of you. Less thinking, more lifting.</p>
        <div className="buttons flex gap-4 mt-6">
          <button className=" hover:bg-hovermain duration-300 bg-main px-4 p-2 font-bold rounded-full">Download App</button>
          <button className="trial border font-bold text-base border-gray-400 hover:border-white duration-200 cursor-pointer p-2 px-4 rounded-full">Book a Class</button>
        </div>
        <div className="arrow absolute bottom-[-200px] w-12 h-12 text-gray-400 border-gray-400 cursor-pointer hover:text-white rounded-full border flex justify-center flex-col gap-10 duration-300 place-items-center hover:border-white">
          <motion.span
            initial={{ y: -5 }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            animate={{ y: [-5, 5, 0, -5, 5] }}
            className="block ">
            <AiOutlineArrowDown />
          </motion.span>
        </div>
      </div>
      <div className="image hidden md:flex lg:flex xl:flex max-w-[600px] relative flex-1 h-full  place-items-center w-full">
        <motion.img
          initial={{ opacity: 0, y: 300 }}
          transition={{
            duration: 1,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute w-fit z-30"
          src="images/hero/watch-dark.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 300 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-[70px] left-[60px] z-40"
          src="images/hero/ball-black.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 300 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute right-[10px] top-[0] w-[200px]"
          src="images/hero/bottle.png"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 300 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute right-[-18px] z-50 bottom-[130px]"
          src="images/hero/ball.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
