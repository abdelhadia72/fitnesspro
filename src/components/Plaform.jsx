import { FaAppleAlt, FaLinux } from 'react-icons/fa';
import { BsWindows, BsFillPhoneFill, BsArrowDownShort } from 'react-icons/bs';
import { AiFillAndroid } from 'react-icons/ai';

const data = [
  {
    icon: <FaAppleAlt />,
    title: 'Fitness Pro for Mac OS',
    description: 'We realize ideas from simple.',
    states: 'update',
    update: false,
    color: '#45B26B',
  },
  {
    icon: <BsWindows />,
    title: 'Fitness Pro for Windows',
    description: 'We realize ideas from simple.',
    states: 'update',
    update: true,
    color: '#3772FF',
  },
  {
    icon: <AiFillAndroid />,
    title: 'Fitness Pro for Android',
    description: 'We realize ideas from simple.',
    states: 'update',
    update: true,
    color: '#ff592c',
  },
  {
    icon: <BsFillPhoneFill />,
    title: 'Fitness Pro for Iphone',
    description: 'We realize ideas from simple.',
    states: 'update',
    update: true,
    color: '#e152d6',
  },
  {
    icon: <FaLinux />,
    title: 'Fitness Pro for Linux',
    description: 'We realize ideas from simple.',
    states: 'update',
    update: false,
    color: '#9757D7',
  },
];

const Plaform = () => {
  return (
    <div className="mx1200 py-32">
      <h1 className="font-bold border-b border-gray-400 pb-6 text-4xl ">Choose the plaform</h1>
      <div className="mt-20  grid grid-cols-2 gap-8 cursor-pointer">
        {data &&
          data.map((di) => {
            return (
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row group  gap-8">
                <div
                  style={{
                    background: di.color,
                  }}
                  className="icon h-32 w-32  rounded-md flex justify-center place-items-center text-6xl">
                  {di.icon}
                </div>
                <div className="info relative duration-300 top-0 group-hover:top-[-20px]">
                  {di.update ? (
                    <p className="border-white p-1 border rounded-[10%] font-bold w-fit px-2">update</p>
                  ) : (
                    <p className="p-1 px-2 bg-green-500 text-white font-bold w-fit rounded-[5%] uppercase">coming soon</p>
                  )}
                  <h1 className="text-xl py-2 font-bold">{di.title}</h1>
                  <p>{di.description}</p>

                  <button className="bg-main h-8  rounded-full relative -bottom-[15px]  px-4 mt-4 duration-300 flex opacity-0 group-hover:bottom-0 group-hover:opacity-100 justify-center place-items-center">
                    Download <BsArrowDownShort className="text-2xl" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="button flex justify-center mt-8 pt-12 border-t border-gray-500">
        <button className="trial border font-bold text-base border-gray-400 hover:border-white duration-200 cursor-pointer p-2 px-4 rounded-full  text-center">
          See more palns
        </button>
      </div>
    </div>
  );
};

export default Plaform;
