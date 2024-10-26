import React from 'react'
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer'

const AvailablePlayers = ({players,handleSelectedPlayers}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
        {
            players.map((player)=><AvailablePlayer key={player.playerId}
             player={player}
             handleSelectedPlayers={handleSelectedPlayers}></AvailablePlayer>)
        }
    </div>
  )
}

export default AvailablePlayers
