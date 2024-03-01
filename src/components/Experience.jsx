import React from 'react';
import angular from "../assets/angular.png";
import css from "../assets/css.png";
import docker from "../assets/docker.png";
import html from "../assets/html.png";
import invision from "../assets/invision.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import spring from "../assets/spring.png";

const Experience = () => {

    const technologies = [
        {
            id: 1,
            src: java,
            alt: 'Java logo',
            title: 'Java',
            style: 'shadow-java-orange'
        },
        {
            id: 2,
            src: angular,
            alt: 'Angular logo',
            title: 'Angular',
            style: 'shadow-angular-red-light'
        },
        {
            id: 3,
            src: html,
            alt: 'HTML logo',
            title: 'HTML',
            style: 'shadow-html-orange-light'
        },
        {
            id: 4,
            src: css,
            alt: 'CSS logo',
            title: 'CSS',
            style: 'shadow-css-cyan-light'
        },
        {
            id: 5,
            src: javascript,
            alt: 'JavaScript logo',
            title: 'JavaScript',
            style: 'shadow-js-yellow-dark'
        },
        {
            id: 6,
            src: docker,
            alt: 'Docker logo',
            title: 'Docker',
            style: 'shadow-docker-blue'
        },
        {
            id: 7,
            src: spring,
            alt: 'Spring logo',
            title: 'Spring',
            style: 'shadow-spring-green'
        },
        {
            id: 8,
            src: mysql,
            alt: 'MySQL logo',
            title: 'MySQL',
            style: 'shadow-mysql-blue'
        },
        {
            id: 9,
            src: invision,
            alt: 'Invision logo',
            title: 'Invision',
            style: 'shadow-invision-pink'
        },
    ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-dvh max-md:pt-20'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='text-lg text-gray-300 py-6'>These are the technologies I have worked with the most.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {technologies.map(({id, src, alt, title, style}) => (

                    // <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                    <div key={id} className={`shadow-md py-2 rounded-lg ${style}`}>
                        <img src={src} alt={alt} className='w-20 mx-auto'></img>
                        <p className='mt-4'>{title}</p>
                    </div>

                ))}
                
            </div>

        </div>
    </div>
  );
}

export default Experience