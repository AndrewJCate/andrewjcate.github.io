import React from 'react'
import Navbar from '../components/Navbar'

function CustomTimers() {
  return (

    <div name='customTimers' className='w-full h-dvh bg-gradient-to-b from-gray-800 to-black text-white'>

        <Navbar />

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Custom Timers Website</p>
            </div>

            <p className='text-gray-300 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eaque placeat illo, aut iste, maiores, dicta sed cupiditate at eius accusantium quas? Quod expedita exercitationem quasi quam repellat quo molestias animi minus. In dolor quae nostrum dolore, rem earum illo accusantium consectetur voluptatibus sunt quibusdam dicta eius harum, numquam laudantium!</p>

            <br></br>

            <p className='text-gray-300 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quibusdam, distinctio et inventore mollitia iure perferendis enim doloremque, quisquam laborum molestiae cupiditate sunt nobis qui odio eius neque aliquid. Ex odit dolores reprehenderit hic enim atque quidem adipisci assumenda esse? Quas illum velit non corporis omnis officiis est, consequuntur sed.</p>

        </div>
    </div>
    
  )
}

export default CustomTimers