import { motion } from 'framer-motion';

const Trusted = () => {
  return (
    <div className="pt-32 mx1200">
      <h1 className="font-bold text-center font-xl">Trusted by more than 2M users worldwide</h1>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.7 }} className="companys flex gap-3 flex-wrap justify-between pt-8 ">
        <img src="images/trusted/goldlines.svg" alt="" />
        <img src="images/trusted/rotashow (1).svg" alt="" />
        <img src="images/trusted/waves.svg" alt="" />
        <img src="images/trusted/rotashow.svg" alt="" />
        <img src="images/trusted/travelers.svg" alt="" />
      </motion.div>
    </div>
  );
};

export default Trusted;
