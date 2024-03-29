import React, { useRef, useState } from 'react';
import { useAuth } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const passConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passRef.current.value !== passConfRef.current.value) {
      return setError('Password do not match!');
    }

    try {
      setError('');
      setLoading(true);

      await signup(emailRef.current.value, passRef.current.value);
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
        <main className='h-full w-full flex flex-col flex-start gap-6 leading-10 text-2xl border-2 max-h-[500px] max-w-xl p-6'>
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
          <label htmlFor='passconf' className='font-bold text-2xl'>
            Confirm Password
          </label>
          <input
            type='password'
            name='passconf'
            id='passconf'
            ref={passConfRef}
            className='border-2 pl-4'
          ></input>
          <button
            disabled={loading}
            type='submit'
            className='border-2 p-3 bg-blue-400 active:bg-blue-600'
          >
            Sign UP
          </button>
        </main>
      </form>
    </>
  );
};

export default Signup;
