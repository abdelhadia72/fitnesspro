import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Downloadhero = () => {
  return (
    <div className="mt-10 flex gap-10 px-3 md:pr-[200px] xl:pr-[200px] lg:pr-[200px]">
      <div className="image hidden md:block lg:block xl:block flex-1">
        <img src="download-pic-dark.png" className="w-full" alt="download-pic-dark.png" />
      </div>
      <div className="text flex flex-1 flex-col justify-center">
        <h3 className=" text-gray-600 uppercase">TIME TO GET FITNESS PRO</h3>
        <h1 className="text-6xl border-b w-[100%] border-gray-400 pt-7 pb-8 font-bold">Fitness Pro for any device.</h1>
        <p className="text mt-6 w-[50%] mb-8">Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.</p>
        <form>
          <label className="border flex border-gray-300 mt-4 max-w-[300px] rounded-full p-1">
            <input required type="email" className="flex-1 outline-none bg-transparent p-1 px-4 " placeholder="Enter you email" />
            <button className="bg-main h-8  rounded-full w-8 flex justify-center place-items-center">
              <BsArrowRightShort className="text-2xl" />
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Downloadhero;
