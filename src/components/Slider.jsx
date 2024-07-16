import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

const says = [
  {
    logo: 'images/trusted/goldlines.svg',
    text: "The greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
    author: 'Dorthy Runolfsdottir',
    review: 'Lead Visual Designer',
    name: 'images/trusted/travelers.svg',
    logo: 'images/trusted/waves.svg',
  },
  {
    logo: 'images/trusted/waves.svg',
    text: 'The best of all the workout apps I have tried on iOS. I have used Fitness Pro for more than a year now. It is intuitive and clean, awesome app.',
    author: 'Dorthy Runolfsdottir',
    review: 'Lead Visual Designer',
  },
  {
    logo: 'images/trusted/travelers.svg',
    text: "The greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect. ",
    author: 'Dorthy Runolfsdottir',
    review: 'Lead Visual Designer',
    name: 'images/trusted/travelers.svg',
  },
];

const Slider = () => {
  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      navigation
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      className="reviews mx1200">
      {says &&
        says.map((say) => {
          return (
            <SwiperSlide className="mt-32 relative">
              <div className="logo">
                <div className="image flex justify-center">
                  <img src={say.logo} alt="" />
                </div>
                <h1 className="title text-center text-xl xl:text-4xl lg:text-4xl md:text-4xl font-bold w-[80%] py-4 mx-auto">{say.text}</h1>
                <h4 className="border-t font-bold py-4 text-center border-gray-400">{say.author}</h4>
                <p className="text-gray-400 text-center">{say.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
