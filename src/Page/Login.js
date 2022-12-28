import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      await login(emailRef.current.value, passRef.current.value);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      {error && (
        <div className='flex justify-center'>
          <div className='text-center bg-red-400 w-[576px] leading-10'>
            {error}
          </div>
        </div>
      )}
      <form
        className='h-full flex justify-center items-start mt-5'
        onSubmit={handleSubmit}
      >
        <main className='h-full w-full flex flex-col justify-center flex-start gap-8 leading-10 text-2xl border-2 max-h-[500px] max-w-xl p-6'>
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
          <label htmlFor='pass' className='font-bold text-2xl'>
            Password
          </label>
          <input
            type='password'
            name='pass'
            id='pass'
            ref={passRef}
            className='border-2 pl-4'
          ></input>

          <button
            disabled={loading}
            type='submit'
            className='border-2 p-3 bg-blue-400 active:bg-blue-600'
          >
            Log In
          </button>
          <div className='text-center text-base hover:underline text-blue-900'>
            <Link to='/forgot-password'>Forgot password?</Link>
          </div>
        </main>
      </form>
    </>
  );
};

export default Login;
