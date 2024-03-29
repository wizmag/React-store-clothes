import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';
import { ToastContainer, toast } from 'react-toastify';
import Sticky from 'react-stickynode';
import Headercart from './Headercart';

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
    <Sticky enabled={true}>
      <div className='flex justify-between px-32 h-20 w-full border-b z-50 bg-white opacity-100'>
        <div className='flex items-center '>
          <p
            className='text-4xl pl-10 font-bold cursor-pointer tracking-widest'
            onClick={() => navigate('/')}
          >
            WIZZ
          </p>
          <div></div>
        </div>
        <div className='flex justify-between items-center gap-20 text-xl'>
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
          <Headercart />
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
    </Sticky>
  );
};

export default Titles;
