import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Slider from './Slider';

const FitnessPro = () => {
  return (
    <div className="flex gap-4 flex-col  mx1200  py-20 ">
      <div className="wrapper1 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
        <div className="fit flex-1 font-bold uppercase text-start text-gray-400">fitness pro</div>
        <div className="simple flex-1 w-[80%]">
          <h1 className="text-4xl font-bold">Simple, powerful, easy-to-use</h1>
          <p className="text-gray-400 mt-5">Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</p>
        </div>
      </div>

      <div className="wrapper2 flex pt-20">
        <div className="wraper flex-1 ">
          <div className="cols flex flex-col justify-around w-[100%] xl:w-[60%] lg:w-[60%] md:w-[60%] h-full">
            <div className="col">
              <span className="bg-[#9757D7] px-3 rounded-full">01</span>
              <p className="font-bold py-3">Intuitive and clean design</p>
              <p className="text-gray-400">Track your workouts, get better results, and be the best version of you.</p>
            </div>
            <div className="col mt-4">
              <span className="bg-[#EF466F] px-3 rounded-full">02</span>
              <p className="font-bold py-3">An exercise in simplicity</p>
              <p className="text-gray-400">Track your workouts, get better results, and be the best version of you.</p>
            </div>
            <div className="col mt-4">
              <span className="bg-[#45B26B] px-3 rounded-full">03</span>
              <p className="font-bold py-3">The most popular workouts</p>
              <p className="text-gray-400">Track your workouts, get better results, and be the best version of you.</p>
            </div>
          </div>
        </div>
        <div className="image hidden xl:block lg:block md:block flex-1 relative">
          <img className="bg-[#353945] rounded-xl" src="about-pic-1.png" alt="about-pic.png" />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="racket-dark.png"
            className="absolute top-[100px] left-[-200px] "
            alt="racket-dark.png"
          />

          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src="ball-red.png"
            className="absolute top-[100px] left-[50px] "
            alt="ball-red.png"
          />
          <span className="bg-white absolute top-[50%] left-[50%] text-gray-700 translate-x-[-50%] translate-y-[-50%]  h-16 w-16 hover:text-hovermain  rounded-full flex justify-center place-items-center cursor-pointer hover:scale-110 duration-200">
            <FaPlay className="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FitnessPro;
