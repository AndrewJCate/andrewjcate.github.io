import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {

    const links = [
        {
            id: 1,
            child: (
                <FaLinkedin size={30}></FaLinkedin>
            ),
            href: 'https://www.linkedin.com/in/andrewjcate',
        },
        {
            id: 2,
            child: (
                <FaGithub size={30}></FaGithub>
            ),
            href: 'https://github.com/AndrewJCate',
        },
        {
            id: 3,
            child: (
                <HiOutlineMail size={30}></HiOutlineMail>
            ),
            href: 'mailto:andrewjcate@gmail.com',
        },
        {
            id: 4,
            child: (
                <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            ),
            href: '/resume.pdf',
            download: true,
        }
    ];

  return (
    <div name='contact' className='w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

            <div className='pb-2 pt-20 md:pt-36'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='text-lg text-gray-300 py-6'>I'd love to chat, even if it's just to say hello!</p>
            </div>

            <div className='flex justify-center items-center'>

                <form action='https://getform.io/f/9c72fef3-98e3-4c17-aa38-b04e7576a9a8' method='POST' className='flex flex-col w-full md:w-1/2'>

                    <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>

                    <input type='text' name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'></input>

                    <textarea name='message' rows='10' placeholder='Type your message here.' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Contact Me</button>

                </form>

            </div>

            {/* Links on bottom of small screens*/}
            <div className='xl:hidden'>
                <div className='flex flex-row justify-center items-center m-auto w-64'>

                {links.map( ({id, child, href, download}) => (   // eslint-disable-next-line

                    <a 
                        key={id}
                        href={href} 
                        className='flex w-auto h-auto p-4 hover:scale-125 duration-300 text-white' 
                        download={download} 
                        target='_blank'
                        rel="noreferrer"
                    >
                        {child}
                    </a>

                ))}

                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact