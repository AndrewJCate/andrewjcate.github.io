import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0'>

      {/* Navbar title */}
      <div>

        <h1 className='text-5xl font-signature ml-2 cursor-pointer'>
          <Link to='home' smooth duration={500}>Andrew Cate</Link>
        </h1>

      </div>
      
      {/* Navbar links */}
      <ul className='hidden md:flex'>

        {links.map(({id, link}) => 

          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-125 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>

        )}

      </ul>

      {/* Small screen menu button and exit menu button */}
      <div className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden hover:scale-125' 
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>

      {/* Menu links */}
      {nav && (

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300'>

          {links.map(({id, link}) => 

            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-125'>
              
              <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>
                {link}
              </Link>

            </li>

          )}

        </ul>

      )}
    </div>
  )
}

export default Navbar