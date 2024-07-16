import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import Slider from './Slider';

const data = [
  {
    state: 'teatured',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-1.png',
    id: 1,
    cat: 'lifesyle',
  },
  {
    state: 'fitness',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-1.png',
    id: 2,
    cat: 'fitness',
  },
  {
    state: 'yoga',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-2.png',
    id: 3,
    cat: 'fitness',
  },
  {
    state: 'new',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-3.png',
    id: 4,
    cat: 'mindfulness',
  },
  {
    state: 'new',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-4.png',
    id: 5,
    cat: 'mindfulness',
  },
  {
    state: 'new',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-5.png',
    id: 6,
    cat: 'lifesyle',
  },
  {
    state: 'new',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-4.png',
    id: 7,
    cat: 'fitness',
  },
  {
    state: 'new',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-5.png',
    id: 8,
    cat: 'mindfulness',
  },
  {
    state: 'yoga',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'MYNANE',
    date: 'Feb 03,2021',
    image: 'lifestyle-photo-2.png',
    id: 9,
    cat: 'lifesyle',
  },
];

const PostList = () => {
  const [isActive, setIsActive] = useState('lifesyle');
  console.log(data.filter((ele) => ele.cat === isActive));

  console.log(isActive);

  return (
    <div className="py-20 mx1200">
      <ul className="flex justify-center gap-2 cursor-pointer palce-items-center">
        <div
          onClick={() => setIsActive('lifesyle')}
          className={`lifesyle flex palce-items-center   p-1 cursor-pointer text-gray-400 hover:text-white duration-300 px-4 rounded-full font-bold ${
            isActive === 'lifesyle' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Lifesyle
        </div>
        <div
          onClick={() => setIsActive('fitness')}
          className={`fitness flex palce-items-center  p-1 cursor-pointer text-gray-400 hover:text-white duration-300 px-4 rounded-full font-bold ${
            isActive === 'fitness' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Fitness
        </div>
        <div
          onClick={() => setIsActive('mindfulness')}
          className={`mindfulness flex palce-items-center  p-1 cursor-pointer text-gray-400 hover:text-white duration-300 px-4 rounded-full font-bold ${
            isActive === 'mindfulness' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Mindfulness
        </div>
      </ul>
      {/*  */}
      <div className="wrapper flex flex-wrap gap-5 mt-10  duration-300 h-full">
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
                  className="posts mx-auto">
                  <img className="rounded-lg" src={trainer.image} alt={trainer.name} />
                  <p className="bg-white p-1 px-2 text-black font-bold capitalize w-fit mt-4 rounded-sm">{trainer.state}</p>
                  <h1 className="font-bold py-2 mt-2 w-[60%] text-xl">{trainer.title}</h1>
                  <div className="info flex justify-between place-content-center">
                    <div className="flex place-items-center gap-4">
                      <FaUser className="h-7 w-7 rounded-full bg-gray-800 border-white" />
                      <p className="text-center text-gray-400">{trainer.name}</p>
                    </div>
                    <p>{trainer.date}</p>
                  </div>
                </motion.div>
              );
            })}
      </div>
      <div className="button flex justify-center">
        <button className="trial  mt-24 border font-bold text-base border-gray-400 hover:border-white duration-200 cursor-pointer p-2 px-4 rounded-full">Load More</button>
      </div>
    </div>
  );
};

export default PostList;
