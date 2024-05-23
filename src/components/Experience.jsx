import React from 'react';
import androidStudio from "../assets/icons/androidstudio.png";
import angular from "../assets/icons/angular.png";
import aws from "../assets/icons/aws.png";
import css from "../assets/icons/css.png";
import docker from "../assets/icons/docker.png";
import gimp from "../assets/icons/gimp.png";
import html from "../assets/icons/html.png";
import intellij from "../assets/icons/intellij.png";
import invision from "../assets/icons/invision.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/javascript.png";
import mysql from "../assets/icons/mysql.png";
import spring from "../assets/icons/spring.png";
import vscode from "../assets/icons/vscode.png";


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
            src: spring,
            alt: 'Spring logo',
            title: 'Spring',
            style: 'shadow-spring-green'
        },
        {
            id: 7,
            src: aws,
            alt: 'AWS logo',
            title: 'AWS',
            style: 'shadow-aws-orange'
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
            src: docker,
            alt: 'Docker logo',
            title: 'Docker',
            style: 'shadow-docker-blue'
        },
        {
            id: 10,
            src: intellij,
            alt: 'IntelliJ logo',
            title: 'IntelliJ',
            style: 'shadow-intellij-purple'
        },
        {
            id: 11,
            src: vscode,
            alt: 'VS Code logo',
            title: 'VS Code',
            style: 'shadow-vscode-blue-light'
        },
        {
            id: 12,
            src: invision,
            alt: 'Invision logo',
            title: 'Invision',
            style: 'shadow-invision-pink'
        },
        {
            id: 13,
            src: androidStudio,
            alt: 'Android Studio logo',
            title: 'Android Studio',
            style: 'shadow-android-teal'
        },
        {
            id: 14,
            src: gimp,
            alt: 'Gimp logo',
            title: 'Gimp',
            style: 'shadow-gimp-brown-light'
        },
    ];

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full md:h-dvh pt-20'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white'>

            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='text-lg text-gray-300 py-6'>These are the technologies I have worked with the most.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center pb-8 px-12 sm:px-0'>

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