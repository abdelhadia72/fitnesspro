import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <div className="py-32 mx1200 flex xl:flex-row lg:flex-row md:flex-row flex-col gap-10 place-items-center justify-between">
      <div className="text flex-1">
        <h1 className="text-7xl font-bold">Train smarter, get stronger.</h1>
        <p className="text-2xl my-4 text-gray-400">Fitness Pro helps track your workouts, get better results, and be the best version of you. Less thinking, more lifting 🔥🏀</p>
        <button className="hover:bg-hovermain duration-300 bg-main px-4 p-2 font-bold rounded-full">Download App</button>
      </div>
      <div className="images relative flex-1 pt-4 mt-12 p-6">
        <motion.img
          initial={{
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className=" relative bottom-[-100px] z-50"
          src="images/intro/bag.png"
          alt=""
        />
        <motion.img
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className=" absolute left-[200px] top-[-20px]"
          src="images/intro/bottle-1.png"
          alt=""
        />
        <motion.img
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            //! this one
          }}
          classNa
          className=" absolute top-[-30px]"
          src="images/intro/gloves.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
