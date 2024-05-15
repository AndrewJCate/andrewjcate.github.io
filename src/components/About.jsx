import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-dvh bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-gray-300 text-lg'>Welcome!</p>

            <br></br>

            <p className='text-gray-300 text-lg'>I grew up and live in the Pacific Northwest with my wife and daughter. I enjoy running, biking, reading, and PC gaming. I have a growing playing card collection. My biggest passion is learning. I spend months delving into topics that have piqued my interest.</p>

            <br></br>

            <p className='text-gray-300 text-lg'>I left my 8 year career in the training field to pursue my passion for programming. After several years of self teaching, I attended a university and earned my degree in Software Engineering. I created this website to showcase some of the projects I have worked on. I am excited to continue growing my skills and expanding my knowledge in this area.</p>

            <br></br>

            <p className='text-gray-300 text-lg'>Send me an email if you would like to explore working on a project together!</p>

        </div>
    </div>
  )
}

export default About