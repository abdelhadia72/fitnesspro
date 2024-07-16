import { motion } from 'framer-motion';
import { FaWeightHanging } from 'react-icons/fa';
import { TbBallTennis } from 'react-icons/tb';
import { RiTimerLine } from 'react-icons/ri';

const Experience = () => {
  return (
    <div className="pt-32 mx1200 pb-10">
      <h3 className="font-bold text-gray-400 text-center text-sm">NEW WORKOUTS ADDED EVERY WEEK</h3>
      <h1 className="text-4xl w-[80%] md:w-[50%] lg:w-[50%] xl:w-[50%] mx-auto text-center font-bold">A new fitness experience for everyone</h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="features flex xl:flex-row lg:flex-row md:flex-row flex-col   justify-center mt-12">
        <div className="col p-4 px-8 ">
          <div className="icon">
            <FaWeightHanging className="text-4xl" />
          </div>
          <h2 className="font-bold text py-4">Keep track of calories and macros</h2>
          <p className="text-gray-400">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</p>
        </div>
        <div className={`col p-4 px-8 xl:border-x lg:border-x md:border-x border-y border-white `}>
          <div className="icon">
            <TbBallTennis className="text-5xl" />
          </div>
          <h2 className="font-bold text py-4">Keep track of calories and macros</h2>
          <p className="text-gray-400">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</p>
        </div>
        <div className="col p-4 px-8">
          <div className="icon">
            <RiTimerLine className="text-5xl" />
          </div>
          <h2 className="font-bold text py-4">Keep track of calories and macros</h2>
          <p className="text-gray-400">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
