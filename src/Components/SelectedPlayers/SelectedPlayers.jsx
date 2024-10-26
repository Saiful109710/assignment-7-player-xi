import React from 'react'
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer'

const SelectedPlayers = ({selectedPlayers,handleRemoverPlayer,handleAvailablePlayersBtn}) => {
  return (
    <div className='space-y-4'>
       <div className='space-y-3'>
          {
              selectedPlayers.map((player)=><SelectedPlayer key={player.playerId}
              player={player} 
              handleRemoverPlayer={handleRemoverPlayer}></SelectedPlayer>)
            }
       </div>
        <p className=' p-2 border border-[#E7FE29] inline-block rounded-xl'><button onClick={handleAvailablePlayersBtn} className='btn bg-[#E7FE29] font-semibold'>Add more player</button></p>
    </div>
  )
}

export default SelectedPlayers
