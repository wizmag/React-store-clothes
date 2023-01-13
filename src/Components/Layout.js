import React from 'react';
import Announcement from './Announcement';
import Navbar from './Navbar';
import Titles from './Titles';
import { Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import Signup from '../Page/Signup';
import Login from '../Page/Login';
import Footer from './Footer';
import Forgotpassword from '../Page/Forgotpassword';
import Clothes from '../Page/Clothes';
import Editdatabase from '../Page/Editdatabase';

const Layout = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <header className='relative z-50'>
        <Announcement />
        <Titles />
        <Navbar />
      </header>
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgot-password' element={<Forgotpassword />}></Route>
          <Route path='/editdb' element={<Editdatabase />}></Route>
          <Route path='/overcoat' element={<Clothes type='Overcoat' />}></Route>
          <Route path='/blouse' element={<Clothes type='Blouse' />}></Route>
          <Route path='/shorts' element={<Clothes type='Shorts' />}></Route>
          <Route path='/jeans' element={<Clothes type='Jeans' />}></Route>
          <Route path='/other' element={<Clothes type='Other' />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
