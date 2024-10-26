import React from 'react'

const Players = ({handleActiveStatus,isActive,selectedPlayers}) => {
  return (
    <div className='sticky top-28'>
        <div className='flex  justify-between '>
            {
              isActive?<h3 className='font-bold text-lg md:text-xl'>Available Players</h3>:<h3 className='font-bold text-lg md:text-xl'>Selected Players ({selectedPlayers.length}/6)</h3>
            }
            <div className='flex flex-col md:flex-row '>
                <button onClick={()=>handleActiveStatus('available')} className={`${isActive?'btn bg-[#E7FE29]':'btn bg-transparent'}`}>Available</button>
                <button onClick={()=>handleActiveStatus('selected')} className={`${isActive?'btn bg-transparent':'btn bg-[#E7FE29]'}`}>Selected ({selectedPlayers.length})</button>
            </div>
        </div>
    </div>
  )
}

export default Players
