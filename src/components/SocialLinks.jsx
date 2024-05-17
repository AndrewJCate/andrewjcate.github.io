import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn<FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href: 'https://www.linkedin.com/in/andrewjcate',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={30}></FaGithub>
                </>
            ),
            href: 'https://github.com/AndrewJCate',
        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href: 'mailto:andrewjcate@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>
            ),
            href: '/resume.txt',    // TODO: replace with actual resume pdf
            style: 'rounded-br-md',
            download: true,
        }
    ];

  return (
    <div className='hidden min-[1280px]:flex flex-col top-[35%] left-0 fixed min'>

        <ul>

            {links.map( ({id, child, href, style, download}) => (
                // eslint-disable-next-line
                <li key={id} className={'flex justify-between items-center w-36 h-14 px-4 ml-[-85px] hover:ml-[-4px] hover:rounded-md duration-300 bg-gray-600' + " " + style}>

                    <a 
                        href={href} 
                        className='flex justify-between items-center w-full text-white' 
                        download={download} 
                        target='_blank'
                        rel="noreferrer"
                    >
                        {child}
                    </a>
                    
                </li>

            ))}

        </ul>

    </div>
  )
}

export default SocialLinks