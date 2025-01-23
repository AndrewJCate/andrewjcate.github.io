import { Cinemate, CinemateHover, CustomTimers, CustomTimersHover, PortfolioSite, PortfolioSiteHover, ProgressTracker, ProgressTrackerHover, TypeTheDictionary, TypeTheDictionaryHover } from '../assets/project-images/index';

const Portfolio = () => {

    const projects = [
        {
            id: 1,
            src: PortfolioSite,
            hoverSrc: PortfolioSiteHover,
            alt: "Thumbnail for Portfolio website.",
            codeHref: "https://github.com/AndrewJCate/Portfolio-Website"
        },
        {
            id: 2,
            src: CustomTimers,
            hoverSrc: CustomTimersHover,
            alt: "Thumbnail for Custom Timers website.",
            siteHref: "https://customtimers.net",
            codeHref: "https://gitfront.io/r/andrewcate/sqg1uDGywjA4/Custom-Timers-Website/"
        },
        {
            id: 3,
            src: Cinemate,
            hoverSrc: CinemateHover,
            alt: "Thumbnail for Cinemate website.",
            siteHref: "https://cinemate-ajc.netlify.app/",
            codeHref: "https://github.com/AndrewJCate/cinemate"
        },
        {
            id: 4,
            src: TypeTheDictionary,
            hoverSrc: TypeTheDictionaryHover,
            alt: "Thumbnail for Type The Dictionary game.",
            codeHref: "https://github.com/AndrewJCate/Typing-The-Dictionary"
        },
        {
            id: 5,
            src: ProgressTracker,
            hoverSrc: ProgressTrackerHover,
            alt: "Thumbnail for Student Progress Tracker Android app.",
            codeHref: "https://gitfront.io/r/andrewcate/W1TXPFr5cikZ/Student-Progress-Tracker/"
        },
    ];

  return (
    <div name='portfolio' className='w-full md:h-dvh max-md:pt-20 bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>

            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='text-lg text-gray-300 py-6'>Here are some of my projects.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-3 sm:px-0'>

                {projects.map(({id, src, hoverSrc, alt, siteHref, codeHref, link}) => (

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                        {/* <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'></img> */}
                        <img 
                            src={src} 
                            alt={alt} 
                            className='rounded-md duration-200 hover:scale-105'
                            onMouseOver={ e => { e.currentTarget.src = hoverSrc }}
                            onMouseOut={ e => { e.currentTarget.src = src }}
                        ></img>
                        
                        <div className='flex justify-center items-center'>

                            {siteHref ? (
                                <div className='flex'>
                                    <a 
                                        className='w-1/2 px-10 py-2 m-4 duration-200 hover:scale-125' 
                                        href={siteHref} 
                                        target='_blank' 
                                        rel="noreferrer"
                                    >
                                        Website
                                    </a> 
                                    
                                    <a 
                                        className='w-1/2 px-10 py-2 m-4 duration-200 hover:scale-125' 
                                        href={codeHref} 
                                        target='_blank' 
                                        rel="noreferrer"
                                    >
                                        Code
                                    </a>   
                                </div>
                            ) : (
                                <a 
                                    className='w-auto px-10 py-2 m-4 duration-200 hover:scale-125' 
                                    href={codeHref} 
                                    target='_blank' 
                                    rel="noreferrer"
                                >
                                    Code
                                </a>   
                            ) }
                                
                            {/* <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>
                                Code
                            </button> */}

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