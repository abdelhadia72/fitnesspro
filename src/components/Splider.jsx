import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useMediaQuery } from 'react-responsive';

const Splider = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="py-20">
      <div>
        <h1 className="text-4xl text-center font-bold mb-4">Find what moves you</h1>
        <p className="w-[50%] mx-auto text-gray-300 text-center">
          Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind, and spirit.
        </p>
      </div>
      <div className="sipwer mx1200 py-8 mx-auto ">
        <Splide
          className="mx-auto"
          options={{
            rewind: true,
            width: 800,
            gap: '1rem',
            type: 'loop',
            perPage: isMobile ? 1 : 3,
            perMove: 1,
          }}
          aria-label="My Favorite Images rounded-lg">
          <SplideSlide className="relative">
            <img
              src="yoga-mat.png"
              className="bg-gray-400 cursor-pointer duration-200 mx-auto hover:bg-main rounded-md w-[270px] p-12 max-w-[250px] h-full max-h-[250px]"
              alt="Image 1"
            />
            <h1 className="text-xl font-bold text-center pt-3 pb-1">Fitness</h1>
            <p className="text-gray-400 text-center">Items</p>
          </SplideSlide>
          <SplideSlide>
            <img src="plates.png" className="bg-gray-400 rounded-md w-[270px] duration-200 mx-auto hover:bg-main  p-12 max-w-[250px] h-full max-h-[250px]" alt="Image 2" />
            <h1 className="text-xl font-bold text-center pt-3 pb-1">Fitness</h1>
            <p className="text-gray-400 text-center">Items</p>
          </SplideSlide>
          <SplideSlide>
            <img
              src="bottle-2.png"
              className="bg-gray-400 cursor-pointer duration-200 mx-auto hover:bg-main rounded-md w-[270px] p-12 max-w-[250px] h-full max-h-[250px]"
              alt="Image 3"
            />
            <h1 className="text-xl font-bold text-center pt-3 pb-1">Fitness</h1>
            <p className="text-gray-400 text-center">Items</p>
          </SplideSlide>
          <SplideSlide>
            <img
              src="racket.png"
              className="bg-gray-400 cursor-pointer duration-200 mx-auto hover:bg-main rounded-md w-[270px] p-12 max-w-[250px] h-full max-h-[250px]"
              alt="Image 4"
            />
            <h1 className="text-xl font-bold text-center pt-3 pb-1">Fitness</h1>
            <p className="text-gray-400 text-center">Items</p>
          </SplideSlide>
          <SplideSlide>
            <img
              src="plates.png"
              className="bg-gray-400 cursor-pointer duration-200 mx-auto hover:bg-main rounded-md w-[270px] p-12 max-w-[250px] h-full max-h-[250px]"
              alt="Image 5"
            />
            <h1 className="text-xl font-bold text-center pt-3 pb-1">Fitness</h1>
            <p className="text-gray-400 text-center">Items</p>
          </SplideSlide>
          <SplideSlide>
            <img
              src="bottle-2.png"
              className="bg-gray-400 cursor-pointer duration-200 mx-auto hover:bg-main rounded-md w-[270px] p-12 max-w-[250px] h-full max-h-[250px]"
              alt="Image 6"
            />
            <h1 className="text-xl font-bold text-center pt-3 pb-1">Fitness</h1>
            <p className="text-gray-400 text-center">Items</p>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Splider;
