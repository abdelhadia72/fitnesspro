import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className="mx1200 pb-20 pt-10">
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto"
        src="dumbbell-dark.png"
        alt="dumbbell-dark.png"
      />
      <h3 className="font-bold text-center text-gray-600 mt-20">SAVE YOUR TIME WITH STACKS</h3>
      <h1 className="font-bold text-white text-center py-4 text-4xl">Join Fitness Pro Community</h1>
      <p className="text-gray-400 w-[40%] text-center mx-auto">Join Stacks community now to get free updates and also alot of freebies are waiting for you.</p>

      <div className="button flex justify-center mt-12">
        <form>
          <label className="border flex border-gray-300 mt-4 max-w-[400px] rounded-full p-1">
            <input required type="email" className="flex-1 outline-none bg-transparent p-1 px-4 " placeholder="Enter you email" />
            <button className="bg-main h-8  rounded-full w-8 flex justify-center place-items-center">
              <BsArrowRightShort className="text-2xl" />
            </button>
          </label>
        </form>
      </div>

      <p className=" text-center mt-4">
        By click sign in you, you agree with Stacks{' '}
        <Link className="text-main font-bold" to={'/download'}>
          terms
        </Link>{' '}
        and{' '}
        <Link className="text-main font-bold" to={'/download'}>
          policy
        </Link>
      </p>
    </div>
  );
};

export default Community;
