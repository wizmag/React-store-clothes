import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';
import { ToastContainer, toast } from 'react-toastify';

const Titles = () => {
  const navigate = useNavigate();
  const { currentUser, signout } = useAuth();

  const handleLogout = async () => {
    try {
      await signout();
    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <>
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
          {currentUser ? (
            <p className='font-bold text-lime-700 text-2xl'>
              {currentUser.email}
            </p>
          ) : (
            <p
              className='font-bold hover:underline cursor-pointer'
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </p>
          )}
          {currentUser ? (
            <div>
              <p
                className='font-bold text-xl cursor-pointer hover:underline'
                onClick={handleLogout}
              >
                Log Out
              </p>
            </div>
          ) : (
            <p
              className='font-bold hover:underline cursor-pointer'
              onClick={() => navigate('/login')}
            >
              Log In
            </p>
          )}
          <ShoppingCartRoundedIcon
            fontSize='large'
            color='success'
            className='cursor-pointer'
          />
        </div>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  );
};

export default Titles;
