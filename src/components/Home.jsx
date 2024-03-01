import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-dvh w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            
            <div className='flex flex-col justify-center h-full'>

                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Software Engineer</h2>
                <p className='text-gray-300 py-4 max-w-md'>I recently graduated and am excited to join a team and get some experience! I really like back-end work and have experience with Java.</p>

                <div>

                    <Link 
                        to='portfolio' 
                        smooth 
                        duration={500} 
                        className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'
                    >
                        Portfolio

                        <span className='ml-2 group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={18}></HiArrowNarrowRight>
                        </span>

                    </Link>

                </div>

            </div>

            <div className='max-md:-mt-14 max-md:pb-14 mt'>
                <img src={ HeroImage } alt='This is me, hello!' className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
            </div>

        </div>
    </div>
  )
}

export default Home