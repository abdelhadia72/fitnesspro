import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import faqData from './faq.json';
import { motion } from 'framer-motion';

const Faq = () => {
  const [isActive, setIsActive] = useState('General');
  const [open, setOpen] = useState(null);

  return (
    <div className="mx1200">
      <h3 className="text-center font-bold text-gray-500 text-sm">LEARN HOW TO GET STARTED</h3>
      <h1 className="text-3xl font-bold text-center py-3">Frequently Asked Questions</h1>
      <p className="text-center w-[40%] mx-auto pb-4 mb-20">
        Join Fitness Pro community now to get free updates and also alot of freebies are waiting for you or{' '}
        <Link to="/" className="text-main font-bold">
          {' '}
          Contact Support
        </Link>
      </p>
      <ul className="flex justify-center gap-2 cursor-pointer palce-items-center">
        <div
          onClick={() => setIsActive('General')}
          className={`General flex palce-items-center   p-1 cursor-pointer text-gray-400 hover:text-white duration-300 px-4 rounded-full font-bold ${
            isActive === 'General' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          General
        </div>
        <div
          onClick={() => setIsActive('Trainers')}
          className={`Trainers flex palce-items-center   p-1 cursor-pointer text-gray-400 hover:text-white duration-300 px-4 rounded-full font-bold ${
            isActive === 'Trainers' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Trainers
        </div>
        <div
          onClick={() => setIsActive('Subscription')}
          className={`Subscription flex palce-items-center   p-1 cursor-pointer text-gray-400 hover:text-white duration-300 px-4 rounded-full font-bold ${
            isActive === 'Subscription' ? 'text-[#000] bg-white hover:text-[#000]' : null
          }`}>
          Subscription
        </div>
      </ul>

      <div className="faqs pt-8 pb-20">
        {faqData &&
          faqData.faqs
            .filter((faq) => faq.category === isActive)
            .map((faq, i) => {
              return (
                <div key={faq.id}>
                  <motion.div onClick={() => setOpen(i)} className="q py-4 border-t cursor-pointer flex justify-between place-items-center border-gray-500">
                    {faq.question}
                    <MdOutlineKeyboardArrowDown className="ml-12" />
                  </motion.div>
                  {open === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className={`ans text-xl mb-4 font-bold `}>
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Faq;
