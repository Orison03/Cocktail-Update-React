import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='font-family font-black'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default Home