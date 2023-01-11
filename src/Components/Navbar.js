import React from 'react';
import { useNavigate } from 'react-router-dom';

const types = [
  { name: 'Overcoat', navigation: '/overcoat' },
  { name: 'Blouse', navigation: '/blouse' },
  {
    name: 'Jeans',
    navigation: '/jeans',
  },
  {
    name: 'Shorts',
    navigation: '/shorts',
  },
  {
    name: 'Other',
    navigation: '/other',
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center gap-12 h-12 w-full px-32'>
      {types.map((item) => (
        <p
          className='font-bold hover:underline cursor-pointer'
          key={item.name}
          onClick={() => navigate(item.navigation)}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default Navbar;
