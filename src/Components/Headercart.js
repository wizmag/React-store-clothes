import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Headercart = () => {
  return (
    <div className=''>
      <div className=' flex justify-between'>
        <ShoppingCartRoundedIcon
          fontSize='large'
          color='success'
          className='cursor-pointer'
        />
        <span className='ml-4 bg-black text-gray-300 flex justify-center items-center w-8 h-8 rounded-full'>
          0
        </span>
      </div>
    </div>
  );
};

export default Headercart;
