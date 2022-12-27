import React from 'react';
import Announcement from './Announcement';
import Navbar from './Navbar';
import Titles from './Titles';
import { Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import Signup from '../Page/Signup';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='h-screen w-full flex flex-col'>
      <header>
        <Announcement />
        <Titles />
        <Navbar />
      </header>
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
