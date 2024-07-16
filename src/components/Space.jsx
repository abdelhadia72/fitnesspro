import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Space = () => {
  return (
    <div className="space ">
      <div className="space-items bg-[#23262F] ">
        <div className="py-32 mx1200 ">
          <h1 className="text-4xl text-center font-bold">For any space, at any pace</h1>
          <p className="text-gray-400 xl:w-[60%] lg:w-[60%] md:w-[60%] mx-auto mt-4 text-center">
            From the comfort of your living room to a hotel room across the globe, we put the best classes at your fingertips. No WiFi? Download videos offline for a practice that
            moves with you.
          </p>
          <div className="items flex justify-between mt-16 gap-4">
            <div className="col">
              <img src="hand-grip-circle.png" alt="hand-grip-circle.png" />
              <h2 className="text-base w-[100%] xl:text-4xl lg:text-4xl md:text-4xl xl:w-[80%] lg:w-[80%] md:w-[80%] font-bold mt-4  text-center">Intuitive and clean design</h2>
            </div>
            <div className="col">
              <img src="gloves-circle.png" alt="gloves-circle.png" />
              <h2 className="text-base w-[100%] xl:text-4xl lg:text-4xl md:text-4xl xl:w-[80%] lg:w-[80%] md:w-[80%] font-bold mt-4  text-center">Track your progress easily</h2>
            </div>
            <div className="col">
              <img src="bottle-circle.png" alt="bottle-circle.png" />
              <h2 className="text-base w-[100%] xl:text-4xl lg:text-4xl md:text-4xl xl:w-[80%] lg:w-[80%] md:w-[80%] font-bold mt-4  text-center">Syncs with Apple Health</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pocket mx1200 flex gap-8 justify-between mt-32 place-items-center flex-col-reverse md:flex-row lg:flex-row xl:flex-row">
        <div className="text mb-6">
          <h1 className="text-4xl font-bold ">All your workout, in your pocket</h1>
          <h3 className="text-[18px] py-4 text-gray-200 w-[60%] ">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</h3>
          <ul>
            <li className="flex gap-3 place-items-center mb-2">
              <BsCheckLg className="text-green-400 text-xl" />
              <p className="font-bold text-gray-400 ">Fitness Pro Cloud</p>
            </li>
            <li className="flex gap-3 place-items-center mb-2">
              <BsCheckLg className="text-green-400  text-xl" />
              <p className="font-bold text-gray-400">Syncs with Google Fit</p>
            </li>
            <li className="flex gap-3 place-items-center mb-2">
              <BsCheckLg className="text-green-400 text-xl" />
              <p className="font-bold text-gray-400">Syncs with Apple Health</p>
            </li>
            <li className="flex gap-3 place-items-center mb-2">
              <BsCheckLg className="text-green-400 text-xl" />
              <p className="font-bold text-gray-400">Track your progress easily</p>
            </li>
            <li className="flex gap-3 place-items-center mb-2">
              <BsCheckLg className="text-green-400 text-xl" />
              <p className="font-bold text-gray-400">Intuitive and clean design</p>
            </li>
          </ul>
          <div className="buttons flex gap-4 mt-6">
            <button className=" hover:bg-hovermain duration-300 bg-main px-4 p-2 font-bold rounded-full">Download App</button>
            <button className="trial border font-bold text-base border-gray-400 hover:border-white duration-200 cursor-pointer p-2 px-4 rounded-full">Book a Class</button>
          </div>
        </div>
        <div className="image relative p-4">
          <img src="phones-dark.png" alt="phones-dark.png" />
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[10%] left-[40%]"
            src="ball-green-1.png"
            alt="ball-green-1.png"
          />
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-[30%] right-[5%]"
            src="apple.png"
            alt="apple.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Space;
