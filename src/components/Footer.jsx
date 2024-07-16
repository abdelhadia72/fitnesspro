import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitterSquare, FaTelegramPlane } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer ">
      <div className="info border-t border-b  border-gray-400">
        <div className="mx1200 flex-col md:flex-row xl:flex-row lg:flex-row flex place-content-center justify-between ">
          <div className="col md:flex-row lg:flex-row xl:flex-row flex-col flex gap-10 flex-[2] p-16">
            <div className="incol">
              <div className="logo">
                <img src="logo-light (1).svg" alt="" />
              </div>
              <div className="mood"></div>
            </div>
            <div className="incol">
              <Link to={'/lifestyle'} className=" block text-gray-400 font-bold mb-2">
                Lifestyle
              </Link>
              <Link to={'/pricing'} className=" block text-gray-400 font-bold mb-2">
                Pricing
              </Link>
              <Link to={'/features'} className=" block text-gray-400 font-bold mb-2">
                Features
              </Link>
              <Link to={'/download'} className=" block text-gray-400 font-bold mb-2">
                Download
              </Link>
            </div>
          </div>
          <div className="col hidden xl:block lg:block md:block flex-[1.5] p-16 border-s border-e border-gray-500">
            <h1 className=" uppercase mb-4 font-bold">contact</h1>
            <p className="mb-2">43252 Borer Mountains</p>
            <p className="mb-2">Zackerychester</p>
            <p className="mb-2">Bahamas</p>
            <p className="mb-2">732-528-4945</p>
          </div>

          <div className="col flex-[2] p-16">
            <h1 className=" uppercase mb-6 font-bold">Newsletter</h1>
            <p className=" mb-10">Subscribe our newsletter to get more free design course and resource.</p>
            <form>
              <label className="border flex border-gray-300 mt-4 rounded-full p-1">
                <input required type="email" className="flex-1 outline-none bg-transparent p-1 px-4 " placeholder="Enter you email" />
                <button className="bg-main h-8  rounded-full w-8 flex justify-center place-items-center">
                  <BsArrowRightShort className="text-2xl" />
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright mx1200 flex-wrap justify-center flex xl:justify-between lg:justify-between md:justify-between gap-2 py-4">
        <div className="copy">Copyright © 2021 A72 LCC. All rights reserved</div>
        <ul className="flex gap-6 text-gray-500 text-xl ">
          <Link to={'/'}>
            <FaFacebook className="hover:text-white duration-200" />
          </Link>
          <Link to={'/'}>
            <FaGithub className="hover:text-white duration-200" />
          </Link>
          <Link to={'/'}>
            <FaLinkedin className="hover:text-white duration-200" />
          </Link>
          <Link to={'/'}>
            <FaTwitterSquare className="hover:text-white duration-200" />
          </Link>
          <Link to={'/'}>
            <FaTelegramPlane className="hover:text-white duration-200" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
