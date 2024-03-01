import React from 'react';

import customTimers from '../assets/portfolio/customTimers.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
// import { Link } from 'react-router-dom';

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: customTimers,
            href: "http://custom-timers-s3.s3-website-us-east-1.amazonaws.com/#"
        },
        {
            id: 2,
            src: installNode,
            link: '/customTimers'
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
    ];

  return (
    <div name='portfolio' className='w-full md:h-dvh max-md:pt-20 bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='text-lg text-gray-300 py-6'>Here is some of my work.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {projects.map(({id, src, href, link}) => (

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                        {/* <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img> */}
                        <img src={src} alt='' className='rounded-md duration-200'></img>
                        
                        <div className='flex justify-center items-center'>
                            <a 
                                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125' 
                                href={href} 
                                target='_blank' 
                                rel="noreferrer"
                            >
                                Demo
                            </a>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Code</button>
                            {/* <Link to={link} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Demo</Link> */}
                        </div>

                    </div>

                ))}
                
            </div>

        </div>
    </div>
  );
}

export default Portfolio