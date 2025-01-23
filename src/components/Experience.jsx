import { AndroidStudio, Angular, Aws, Css, Docker, Gimp, Html, IntelliJ, Invision, Java, JavaScript, MySql, React, Spring, Tailwind, VsCode } from '../assets/icons/index';


const Experience = () => {

    const technologies = [
        {
            id: 1,
            src: Java,
            alt: 'Java logo',
            title: 'Java',
            style: 'shadow-java-orange'
        },
        {
            id: 2,
            src: React,
            alt: 'React logo',
            title: 'React',
            style: 'shadow-react-blue'
        },
        {
            id: 3,
            src: Tailwind,
            alt: 'Tailwind logo',
            title: 'Tailwind',
            style: 'shadow-tailwind-blue'
        },
        {
            id: 4,
            src: Angular,
            alt: 'Angular logo',
            title: 'Angular',
            style: 'shadow-angular-red-light'
        },
        {
            id: 5,
            src: Html,
            alt: 'HTML logo',
            title: 'HTML',
            style: 'shadow-html-orange-light'
        },
        {
            id: 6,
            src: Css,
            alt: 'CSS logo',
            title: 'CSS',
            style: 'shadow-css-cyan-light'
        },
        {
            id: 7,
            src: JavaScript,
            alt: 'JavaScript logo',
            title: 'JavaScript',
            style: 'shadow-js-yellow-dark'
        },
        {
            id: 8,
            src: Spring,
            alt: 'Spring logo',
            title: 'Spring Boot',
            style: 'shadow-spring-green'
        },
        {
            id: 9,
            src: Aws,
            alt: 'AWS logo',
            title: 'AWS',
            style: 'shadow-aws-orange'
        },
        {
            id: 10,
            src: MySql,
            alt: 'MySQL logo',
            title: 'MySQL',
            style: 'shadow-mysql-blue'
        },
        {
            id: 11,
            src: IntelliJ,
            alt: 'IntelliJ logo',
            title: 'IntelliJ',
            style: 'shadow-intellij-purple'
        },
        {
            id: 12,
            src: VsCode,
            alt: 'VS Code logo',
            title: 'VS Code',
            style: 'shadow-vscode-blue-light'
        },
        {
            id: 13,
            src: Invision,
            alt: 'Invision logo',
            title: 'Invision',
            style: 'shadow-invision-pink'
        },
        {
            id: 14,
            src: AndroidStudio,
            alt: 'Android Studio logo',
            title: 'Android Studio',
            style: 'shadow-android-teal'
        },
        {
            id: 15,
            src: Gimp,
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