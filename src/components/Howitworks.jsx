import { BsDownload } from 'react-icons/bs';
import { RiTimerLine } from 'react-icons/ri';
import { SlBadge } from 'react-icons/sl';
import { FiKey } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Howitworks = () => {
  return (
    <div className="pt-32 mx1200">
      <h1 className="text-4xl font-bold text-center">How it works</h1>
      <p className="text-[18px] mx-auto mt-4 text-center max-w-[400px]">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
        }}
        className="steps overflow-auto overflow-x-auto flex justify-between my-20">
        <div className="setp min-w-[280px]  flex justify-center place-items-center flex-col">
          <div className="icon my-10 bg-[#3772FF]  flex justify-center place-items-center h-16 w-16 rounded-xl">
            <BsDownload className="text-xl" />
            <div className="between"></div>
          </div>
          <h4 className="text-center font-md text-gray-400 mt-4 font-bold">Step1</h4>
          <h3 className="text-center   font-bold my-4">Download</h3>
          <p className="text-center px-4 text-gray-300">Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>
        </div>

        <div className="setp min-w-[280px] flex justify-center place-items-center flex-col">
          <div className="icon my-10 bg-[#9757D7]  flex justify-center place-items-center h-16 w-16 rounded-xl">
            <FiKey className="text-xl" />
            <div className="between"></div>
          </div>
          <h4 className="text-center font-md text-gray-400 mt-4 font-bold">Step1</h4>
          <h3 className="text-center   font-bold my-4">Choose your trainner</h3>
          <p className="text-center px-4 text-gray-300">Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>
        </div>

        <div className="setp min-w-[280px] flex justify-center place-items-center flex-col">
          <div className="icon my-10 bg-[#EF466F]  flex justify-center place-items-center h-16 w-16 rounded-xl">
            <SlBadge className="text-xl" />
            <div className="between"></div>
          </div>
          <h4 className="text-center font-md text-gray-400 mt-4 font-bold">Step1</h4>
          <h3 className="text-center   font-bold my-4">Set the goals</h3>
          <p className="text-center px-4 text-gray-300">Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>
        </div>

        <div className="setp min-w-[280px] flex justify-center place-items-center flex-col">
          <div className="icon my-10 bg-[#45B26B]  flex justify-center place-items-center h-16 w-16 rounded-xl">
            <RiTimerLine className="text-xl" />
          </div>
          <h4 className="text-center font-md text-gray-400 mt-4 font-bold">Step1</h4>
          <h3 className="text-center   font-bold my-4">Workout time</h3>
          <p className="text-center px-4 text-gray-300">Fitness Pro tracks your workouts, get better results, and be the best version of you.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Howitworks;
