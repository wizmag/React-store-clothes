import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';
import { ToastContainer, toast } from 'react-toastify';

const Forgotpassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      toast.success('Check your inbox!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
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
    setLoading(false);
  };

  return (
    <>
      <form
        className='h-full flex justify-center items-start mt-5'
        onSubmit={handleSubmit}
      >
        <main className='h-full w-full flex flex-col justify-center flex-start gap-12 leading-10 text-2xl border-2 max-h-[500px] max-w-xl p-6'>
          <div>
            <label htmlFor='email' className='font-bold text-2xl'>
              Email
            </label>
          </div>
          <input
            type='email'
            name='email'
            id='email'
            ref={emailRef}
            className='border-2 pl-4'
          ></input>

          <button
            disabled={loading}
            type='submit'
            className='border-2 p-3 bg-blue-400 active:bg-blue-600'
          >
            Reset password
          </button>
          <div className='text-center text-base hover:underline text-blue-900'>
            <Link to='/login'>Log In</Link>
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
        </main>
      </form>
    </>
  );
};

export default Forgotpassword;
