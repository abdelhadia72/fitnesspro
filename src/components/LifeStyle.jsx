import { BsArrowRightShort } from 'react-icons/bs';
import LifestyleRow from './LifestyleRow';

const data = [
  {
    num: '01',
    title: 'The Fitness Pro Philosophy',
    disc: 'Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.',
    img: 'lifestyle-pic-1.png',
    id: 1,
  },
  {
    num: '02',
    title: 'Quickly find the class you want',
    disc: 'Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.',
    img: 'lifestyle-pic-2.png',
    id: 2,
  },
  {
    num: '03',
    title: 'Keep track of calories & macros',
    disc: 'Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind.',
    img: 'lifestyle-pic-3.png',
    id: 3,
  },
];

const LifeStyle = () => {
  return (
    <div className="mx1200 py-32">
      <h3 className="text-gray-400 font-bold">EXPLORE THE APP</h3>
      <h1 className="text-3xl font-bold py-2">Fit for your life style</h1>
      <p className=" text-gray-400 mb-2 text-xl w-[40%] ">Get started with two free weeks of unlimited yoga, fitness, and meditation classes.</p>
      <button className="trial flex gap-4 place-items-center border font-bold text-base border-gray-400 hover:border-white duration-200 cursor-pointer p-2 px-4 rounded-full">
        Join class today <BsArrowRightShort />{' '}
      </button>
      <div className="rows pt-32">
        {data &&
          data.map((row) => {
            return <LifestyleRow num={row.num} title={row.title} disc={row.disc} img={row.img} id={row.id} />;
          })}
      </div>
    </div>
  );
};
// {num,title,disc,img}

export default LifeStyle;
