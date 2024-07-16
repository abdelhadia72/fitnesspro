import React from 'react';
import pricingDAta from './pricing';
import { BiCheck } from 'react-icons/bi';
import { BsDash } from 'react-icons/bs';

const Plans = () => {
  console.log(pricingDAta.plans);

  return (
    <div className="mx1200 py-32">
      <h3 className="font-bold text-center text-gray-500">GET STRONGER WITH FITNESS PRO</h3>
      <h1 className="font-bold text-5xl text-center mt-6">Choose a plan</h1>
      <h1 className="font-bold text-5xl text-center">that’s right for you</h1>
      <div className="holder">
        <div className={`flex justify-center mt-20 `}>
          <div className="names">
            <p className="text-center max-h-[60px] mt-[114px] py-6 "></p>
          </div>
          <div className="plans flex flex-col md:flex-row lg:flex-row xl:flex-row">
            {pricingDAta &&
              pricingDAta.plans.map((plan) => {
                return (
                  <div className={`row py-4 rounded-xl ${plan.pup && 'bg-gray-800'}`}>
                    <div className="head px-10 text-xl text-center font-bold" style={{ color: plan.color }}>
                      {plan.name}
                    </div>
                    <div className="head px-10 text-md text-gray-400 mt-2">{plan.discription}</div>
                    <div className="head px-10 text-center font-bold text-4xl py-4 ">{plan.price}</div>
                    <div className="head px-10 text-xl text-center text-gray-400 mb-20">per month</div>
                    {Object.entries(plan.features).map(([feature, value]) => (
                      <p className="text-center p-4 px-8  flex place-items-center max-h-[60px] py-6 border-b border-gray-700" key={feature}>
                        {value ? (
                          <BiCheck className="text-green-900 h-5 w-5 mr-4 rounded-full bg-green-400" />
                        ) : (
                          <BsDash className="h-5 w-5 mr-4 rounded-full border-white border" />
                        )}
                        {feature}
                      </p>
                    ))}
                    <div className=" justify-center flex">
                      <button className=" hover:bg-hovermain mt-8 mx-auto duration-300 bg-main px-4 p-2 font-bold rounded-full">{plan.button}</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
