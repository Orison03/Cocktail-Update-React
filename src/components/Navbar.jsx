import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/icons8-cocktail-100.png"

const Navbar = () => {
  return (
    <main className="font-family font-black h-24 w-full pt-5">
      <section className="w-[90%] md:w-[80%] lg:w-[75%] flex justify-between items-center mx-auto">
        {/* logo */}
        <div className='flex justify-between items-center'>
          <img src={logo} alt="logo" className="h-12" />
          <h1 className='text-white text-sm tracking-wide'>Cocktail DB</h1>
        </div>
        {/* nav links */}
        <ul className="flex text-white capitalize justify-between items-center space-x-8 md:space-x-12 text-lg lg:text-xl">
          <li>
            <Link to="/">home</Link>
          </li>
          <Link to="/about" className='cursor-pointer'>about</Link>
        </ul>
      </section>
    </main>
  );
}

export default Navbar