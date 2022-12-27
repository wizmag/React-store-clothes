import React from 'react';

const types = ['Overcoat', 'Blouse', 'Jeans', 'Shorts', 'Other'];

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-12 h-12 w-full px-32'>
      {types.map((item) => (
        <p className='font-bold hover:underline cursor-pointer' key={item}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Navbar;
