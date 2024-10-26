import React from 'react'

const Banner = ({handleFreeGift}) => {
  return (
    <div style={{backgroundImage:`url(https://i.ibb.co.com/N6QkXJw/bg-shadow.png)`}} className='py-10 md:py-20 px-10 bg-black rounded-xl md:rounded-2xl bg-no-repeat bg-center bg-cover container mx-auto mb-10'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src="https://i.ibb.co.com/C793LGH/banner-main.png" alt="" />
                <h2 className='text-[1.8rem] md:text-[2.7rem] text-white font-[700] text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-center text-gray-400 md:text-xl'>Beyond Boundaries Beyond Limits</p>
               <p className=' p-2 border border-[#E7FE29] inline-block rounded-xl'><button onClick={handleFreeGift} className='btn bg-[#E7FE29] font-semibold'>Claim Free Credit</button></p>
            </div> 
    </div>
  )
}

export default Banner
