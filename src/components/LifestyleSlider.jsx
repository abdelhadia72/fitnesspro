import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    state: 'featlured',
    title: '7 Impossibly Hard Yoga Moves to Master',
    name: 'Track your workouts, get better results, and be the best version of you. Less thinking',
    image: 'lifestyle1.png',
  },
  {
    state: 'new',
    title: 'Stories From Our Community: Kohaku & Moyo Shiro',
    discription: 'Track your workouts, get better results, and be the best version of you. Less thinking',
    image: 'lifestyle2.png',
  },
  {
    state: 'yoga',
    title: 'Stories From Our Community: Kohaku & Moyo Shiro',
    discription: 'Track your workouts, get better results, and be the best version of you. Less thinking',
    image: 'lifestyle3.png',
  },
  {
    state: 'new',
    title: 'Stories From Our Community: Kohaku & Moyo Shiro',
    discription: 'Track your workouts, get better results, and be the best version of you. Less thinking',
    image: 'lifestyle4.png',
  },
];

const LifestyleSlider = () => {
  return (
    <div className=" py-32 ">
      <h1 className="text-8xl text-center font-bold">Lifestyle</h1>
      <p className="max-w-[80%] flex-col md:w-[40%] lg:w-[40%] xl:w-[40%] mt-4 text-center mx-auto mb-20">
        Track your workouts, get better results, and be the best version of you. Less thinking, more lifting.
      </p>
      <div className="mx1200 bg-[#23262F] rounded-md border-[#353945]">
        <Splide aria-label="My Favorite Images ">
          {data &&
            data.map((slide, id) => {
              return (
                <SplideSlide className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-fit  gap-6 place-items-center">
                  <img className="flex-1 w-[600px] rounded-md " src={slide.image} alt={`image-${id}`} />
                  <div className="info flex-1 p-4 pl-4">
                    <p className={`${slide.state === 'new' ? 'bg-red-400' : 'bg-green-500'} w-fit p-1 rounded-md px-2 font-bold`}>{slide.state}</p>
                    <h1 className="text-5xl py-5 font-bold">{slide.title}</h1>
                    <h4 className="text-gray-400">{slide.discription}</h4>
                    <button className=" hover:bg-hovermain mt-4 duration-300 bg-main px-4 p-2 font-bold rounded-full">Read full story</button>
                  </div>
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
    </div>
  );
};

export default LifestyleSlider;
