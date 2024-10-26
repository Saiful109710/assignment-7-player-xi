import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='p-4 border-2 border-white backdrop-blur-3xl rounded-2xl container mx-auto '>
        <div style={{backgroundImage:`url(./src/assets/bg-shadow.png)`}} className='py-16 bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-5 rounded-2xl'>
                    <h2 className='text-[2rem] text-center font-bold'>Subscribe to our Newsletter</h2>
                    <p className='text-gray-500 text-center'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex gap-4 flex-wrap md:flex-nowrap'>
                        <input type="email" placeholder='Please enter your email' className='px-4 py-3 w-full md:w-[300px]  rounded-xl outline-none border' />
                        <button className='btn bg-gradient-to-r from-purple-500 to-orange-400 text-white'>Subscribe</button>
                    </div>
        </div>
    </div>
  )
}

export default NewsLetter
