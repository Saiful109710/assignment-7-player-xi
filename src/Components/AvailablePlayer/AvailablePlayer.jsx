import React from 'react'

const AvailablePlayer = ({player,handleSelectedPlayers}) => {
    const {name,country,image,role,battingType,bowlingType,biddingPrice} = player
  return (
    <div className='p-6 border rounded-xl space-y-5 shadow-md '>
        <div className=''><img className='w-full h-[240px] rounded-xl' src={image} alt="" /></div>

        <div className='flex gap-3 items-center'>
            <i className="fa-solid fa-user"></i>
            <h2 className='text-xl font-bold'>{name}</h2>
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-flag text-gray-400"></i>
                <p className='text-gray-500'>{country}</p>
            </div>
            <button className='btn btn-sm hover:bg-transparent bg-transparent border-[#3c359b]'>{role}</button>
        </div>
        <hr className='border '/>
        <p className='font-bold'>Rating</p>
        <div className='flex justify-between items-center'>
            <p className=' font-bold'>{battingType}</p>
            <p className='text-gray-600 font-semibold'>{bowlingType}</p>
        </div>
        <div className='flex justify-between items-center'>
            <p className='font-bold'>Price: ${biddingPrice}</p>
            <button className='btn btn-sm bg-transparent border-1 border-[#3c359b] hover:bg-[#E7FE29]   font-[600]' onClick={()=>handleSelectedPlayers(player)}>Choose the player</button>
        </div>
        
    </div>
  )
}

export default AvailablePlayer
