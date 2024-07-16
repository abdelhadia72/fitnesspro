import React from 'react';

const Trial = () => {
  return (
    <div className="py-32 border-t border-gray-600">
      <h3 className="font-bold text-gray-400 text-center">TRY IT FREE FOR 14 DAYS 🎾</h3>
      <h1 className="text-6xl font-bold text-center mt-4">Anywhere you want.</h1>
      <h1 className="text-6xl font-bold text-center">Anytime you want.</h1>
      <p className=" py-6 w-[50%] mx-auto text-center text-gray-500">Get started with two free weeks of unlimited yoga, fitness, and meditation classes. Cancel anytime.</p>
      <div className="btn flex justify-center">
        <button className="hover:bg-hovermain duration-300 bg-main px-4 p-2 font-bold rounded-full">Start free trial</button>
      </div>
    </div>
  );
};

export default Trial;
