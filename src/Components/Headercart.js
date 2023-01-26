import React, { useContext } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Cartcontext } from '../Context/Cartcontext';

const Headercart = () => {
  const cartCtx = useContext(Cart);

  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <div>
      <div className=' flex justify-between'>
        <ShoppingCartRoundedIcon
          fontSize='large'
          color='success'
          className='cursor-pointer'
        />
        <span className='ml-4 bg-black text-gray-300 flex justify-center items-center w-8 h-8 rounded-full'>
          {numberOfCartItems}
        </span>
      </div>
    </div>
  );
};

export default Headercart;
