import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Collection from '../Assets/Collection.jpg';
import Sales from '../Assets/Sales.jpg';
import Bags from '../Assets/Bags.jpg';

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
    <div className='w-full flex relative overflow-hidden'>
      <div
        className='hover:scale-110 cursor-pointer flex left-40 m-auto
           items-center absolute top-0 bottom-0 z-10'
      >
        <ArrowBackIosIcon sx={{ fontSize: 50 }} />
      </div>
      <div className={`h-full flex transformvw`}>
        {descript.map((item) => (
          <section className='flex items-center w-screen' key={item.key}>
            <div className='h-full flex-1 pl-32'>
              <img src={item.image} alt='img' className='max-h-[600px]'></img>
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
      </div>
      <div
        className='hover:scale-110 cursor-pointer flex right-40 m-auto 
           items-center absolute top-0 bottom-0 z-10'
      >
        <ArrowForwardIosIcon
          sx={{ fontSize: 50 }}
          className='hover:scale-110 cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Home;
