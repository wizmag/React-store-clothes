import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useNavigate } from 'react-router-dom';

const Titles = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-between px-32 h-20 w-full border-b  sticky top-0 z-50 overflow-hidden bg-white'>
      <div className='flex items-center '>
        <p
          className='text-4xl pl-10 font-bold cursor-pointer tracking-widest'
          onClick={() => navigate('/')}
        >
          WIZZ
        </p>
        <div></div>
      </div>
      <div className='flex justify-between items-center gap-10 text-xl'>
        <p
          className='font-bold hover:underline cursor-pointer'
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </p>
        <p className='font-bold hover:underline cursor-pointer'>Log In</p>
        <ShoppingCartRoundedIcon
          fontSize='large'
          color='success'
          className='cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Titles;

//  .page-title:after {
//     content: ""; /* This is necessary for the pseudo element to work. */
//     display: block; /* This will put the pseudo element on its own line. */
//     margin: 0 auto; /* This will center the border. */
//     width: 50%; /* Change this to whatever width you want. */
//     padding-top: 20px; /* This creates some space between the element and the border. */
//     border-bottom: 1px solid black; /* This creates the border. Replace black with whatever color you want. */
// }
