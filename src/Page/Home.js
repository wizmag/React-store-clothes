import React from 'react';
import Collection from '../Assets/Collection.jpg';
import Sales from '../Assets/Sales.jpg';
import Bags from '../Assets/Bags.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const descript = [
  {
    title: 'New Collection',
    descr: 'New collection for 2023 year',
    image: Collection,
    key: 1,
  },
  {
    title: 'Sales',
    descr: 'Only this week. Hurry up!',
    image: Sales,
    key: 2,
  },
  {
    title: 'Bags',
    descr: 'Buy limited series of bags',
    image: Bags,
    key: 3,
  },
];

const Home = () => {
  return (
    <div className='w-full px-20'>
      <Carousel
        showArrows={true}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        thumbWidth={200}
        showThumbs={true}
        useKeyboardArrows={true}
      >
        {descript.map((item) => (
          <section className='flex items-center w-screen' key={item.key}>
            <div className='h-full flex-1 pl-32'>
              <img
                src={item.image}
                alt='img'
                className='max-h-[600px] max-w-[550px]'
              ></img>
            </div>
            <div className='flex-1'>
              <div className='flex flex-col items-start h-full pl-20 gap-20'>
                <p className='text-5xl font-bold'>{item.title}</p>
                <p className='text-2xl my-12'>{item.descr}</p>
                <button className='border-2 border-shine1 bg-black text-white px-10 py-5 font-bold rounded-lg active:animate-[pulses_0.5s_ease]'>
                  BUY NOW
                </button>
              </div>
            </div>
          </section>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
