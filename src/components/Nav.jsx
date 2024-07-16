import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav py-10 mx1200 flex place-items-center justify-between">
      <Link to={'/'} className="logo cursor-pointer">
        <img src="/logo-light.svg" />
      </Link>
      <HiOutlineMenuAlt4 onClick={() => setIsOpen(!isOpen)} className="text-3xl cursor-pointer  block md:hidden lg:hidden xl:hidden" />
      <div
        className={`${
          isOpen
            ? 'absolute flex-col flex bg-[#141416] top-24 left-0 w-full h-full z-50  p-10 text-4xl  gap-4'
            : 'hidden md:flex lg:flex xl:flex place-items-center justify-center  gap-10'
        }`}>
        <Link className=" font-bold text-gray-400 hover:text-white duration-300 cursor-pointer" to="/features">
          Features
        </Link>
        <Link className=" font-bold text-gray-400 hover:text-white duration-300 cursor-pointer" to="/pricing">
          Pricing
        </Link>
        <Link className=" font-bold text-gray-400 hover:text-white duration-300 cursor-pointer" to="/download">
          Download
        </Link>
        <Link className=" font-bold text-gray-400 hover:text-white duration-300 cursor-pointer" to="/lifestyle">
          Lifestyle
        </Link>
      </div>
      <div className="social gap-3 hidden  lg:flex xl:flex ">
        <Link to={'https://www.facebook.com'} className="">
          <CiFacebook className="text-xl text-gray-400 hover:text-white duration-300 cursor-pointer" />
        </Link>
        <Link to={'https://twitter.com'} className="">
          <CiTwitter className="text-xl text-gray-400 hover:text-white duration-300 cursor-pointer" />
        </Link>
        <Link to={'https://instagram.com'} className="">
          <AiOutlineInstagram className="text-xl text-gray-400 hover:text-white duration-300 cursor-pointer" />
        </Link>
      </div>
      <button className="trial hidden lg:block xl:block border font-bold text-base border-gray-400 hover:border-white duration-200 cursor-pointer p-1 px-3 rounded-full">
        Get free trail
      </button>
    </div>
  );
};

export default Nav;
