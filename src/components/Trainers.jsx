import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiFillFlag } from 'react-icons/ai';
import { FiDownloadCloud } from 'react-icons/fi';
import Slider from './Slider';

const data = [
  {
    img: 'images/trainers/gym1.png',
    name: 'MYNAME',
    discription: 'Business Analytic',
    cat: 'gym',
    id: 1,
  },
  {
    img: 'images/trainers/gymnastics1.png',
    name: 'MYNAME',
    discription: 'Yoga Master',
    cat: 'gymnastics',
    id: 2,
  },
  {
    img: 'images/trainers/running1.png',
    name: 'MYNAME',
    discription: 'Personal Trainer',
    cat: 'running',
    id: 3,
  },
  {
    img: 'images/trainers/yoga1.png',
    name: 'MYNAME',
    discription: 'Boxer',
    cat: 'yoga',
    id: 4,
  },
  {
    img: 'images/trainers/gym2.png',
    name: 'Name',
    discription: 'Business Analytic',
    cat: 'gym',
    id: 5,
  },
  {
    img: 'images/trainers/gymnastics2.png',
    name: 'MYNAME',
    discription: 'Yoga Master',
    cat: 'gymnastics',
    id: 6,
  },
  {
    img: 'images/trainers/running2.png',
    name: 'MYNAME',
    discription: 'Personal Trainer',
    cat: 'running',
    id: 7,
  },
  {
    img: 'images/trainers/yoga2.png',
    name: 'MYNAME',
    discription: 'Boxer',
    cat: 'yoga',
    id: 8,
  },
  {
    img: 'images/trainers/gym3.png',
    name: 'Name',
    discription: 'Business Analytic',
    cat: 'gym',
    id: 9,
  },
  {
    img: 'images/trainers/gymnastics3.png',
    name: 'MYNAME',
    discription: 'Yoga Master',
    cat: 'gymnastics',
    id: 10,
  },
  {
    img: 'images/trainers/running3.png',
    name: 'MYNAME',
    discription: 'Personal Trainer',
    cat: 'running',
    id: 11,
  },
  {
    img: 'images/trainers/yoga3.png',
    name: 'MYNAME',
    discription: 'Boxer',
    cat: 'yoga',
    id: 12,
  },
  {
    img: 'images/trainers/gym4.png',
    name: 'Name',
    discription: 'Business Analytic',
    cat: 'gym',
    id: 13,
  },
  {
    img: 'images/trainers/gymnastics4.png',
    name: 'MYNAME',
    discription: 'Yoga Master',
    cat: 'gymnastics',
    id: 14,
  },
  {
    img: 'images/trainers/running4.png',
    name: 'MYNAME',
    discription: 'Personal Trainer',
    cat: 'running',
    id: 15,
  },
  {
    img: 'images/trainers/yoga4.png',
    name: 'MYNAME',
    discription: 'Boxer',
    cat: 'yoga',
    id: 16,
  },
];

const Trainers = () => {
  const [isActive, setIsActive] = useState('yoga');

  return (
    <div className="py-20 mx1200">
      <h1 className="text-4xl font-bold text-center">Meet our pro trainers</h1>
      <p className="w-[60%] mx-auto text-center my-8">
        From all over the world, we select and provide you a team of seasoned trainers. What's more, the 1-on-1 live practice mode helps you quickly get great results.
      </p>
      <ul className="flex justify-center gap-2 cursor-pointer palce-items-center">
        <div
          onClick={() => setIsActive('all')}
          className={`all flex palce-items-center   p-1 cursor-pointer text-gray-400 hover:text-white duration-300 rounded-full font-bold ${
            isActive === 'all' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          All
        </div>
        <div
          onClick={() => setIsActive('yoga')}
          className={`yoga flex palce-items-center  p-1 cursor-pointer text-gray-400 hover:text-white duration-300 rounded-full font-bold ${
            isActive === 'yoga' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Yoga
        </div>
        <div
          onClick={() => setIsActive('gym')}
          className={`gym flex palce-items-center  p-1 cursor-pointer text-gray-400 hover:text-white duration-300 rounded-full font-bold ${
            isActive === 'gym' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Gym
        </div>
        <div
          onClick={() => setIsActive('gymnastics')}
          className={`gymnastics flex palce-items-center text-gray-400  p-1 cursor-pointer hover:text-white duration-300 rounded-full font-bold ${
            isActive === 'gymnastics' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Gymnastics
        </div>
        <div
          onClick={() => setIsActive('running')}
          className={`running flex palce-items-center text-gray-400  p-1 cursor-pointer hover:text-white duration-300 px-4 rounded-full font-bold ${
            isActive === 'running' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Running
        </div>
      </ul>
      {/*  */}
      <div className="wrapper  gap-5 mt-10 grid grid-cols-auto  duration-300 h-full">
        {data &&
          data
            .filter((elements) => (isActive === 'all' ? elements : elements.cat === isActive))
            .map((trainer) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 * (trainer.id / 2) }}
                  key={trainer.id}
                  className="trainer ">
                  <img className=" rounded-lg mx-auto" src={trainer.img} alt={trainer.name} />
                  <h1 className="font-bold text-center mt-2">{trainer.name}</h1>
                  <p className=" text-center text-gray-400">{trainer.discription}</p>
                </motion.div>
              );
            })}
      </div>
      <Slider />

      <div className="pt-20 flex gap-6 flex-wrap xl:flex-nowrap lg:xl:flex-nowrap md:xl:flex-nowrap">
        <div className="col">
          <div className="icon">
            <FaUserAlt className="text-4xl text-green-400" />
          </div>
          <p className=" py-5 text-6xl border-b border-gray-600 font-4xl font-bold">1m</p>
          <h4 className="py-4 font-bold">Happy Users</h4>
          <p className="text-gray-400">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
        </div>
        <div className="col">
          <div className="icon">
            <FiDownloadCloud className="text-4xl text-purple-400" />
          </div>
          <p className=" py-5 text-6xl border-b border-gray-600 font-4xl font-bold">1.2m</p>
          <h4 className="py-4 font-bold">Downloads</h4>
          <p className="text-gray-400">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
        </div>
        <div className="col">
          <div className="icon">
            <AiFillFlag className="text-4xl text-red-400" />
          </div>

          <p className=" py-5 text-6xl border-b border-gray-600 font-4xl font-bold">50+</p>
          <h4 className="py-4 font-bold">Countries</h4>
          <p className="text-gray-400">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
        </div>
        <div className="col">
          <div className="icon">
            <BsFacebook className="text-4xl text-blue-400" />
          </div>
          <p className=" py-5 text-6xl border-b border-gray-600 font-4xl font-bold">900k+</p>
          <h4 className="py-4 font-bold">Likes on Facebook</h4>
          <p className="text-gray-400">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
