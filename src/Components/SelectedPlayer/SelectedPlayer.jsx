import React from 'react'

const SelectedPlayer = ({player,handleRemoverPlayer}) => {
  const {image,name,battingType,bowlingType,biddingPrice} = player
  return (
    <div className='p-3 border rounded-xl flex  justify-between items-center'>
        <div className='flex flex-col sm:flex-row gap-4 items-center'>
            <div>
              <img className='w-[50px] h-[50px] rounded-2xl' src={image} alt="" />
            </div>
            <div>
              <h2 className='font-bold text-lg'>{name}</h2>
              <p className='text-gray-500 font-medium'>{battingType}</p>
              <p className='text-gray-500 font-medium'>{bowlingType}</p>
              <p className='text-gray-500 font-medium'>Price: ${biddingPrice}</p>
            </div>
        </div>
        <button onClick={()=>handleRemoverPlayer(player)} className='btn text-red-500'>Delete <i class="fa-solid fa-trash text-red-500"></i></button>
    </div>
  )
}

export default SelectedPlayer
