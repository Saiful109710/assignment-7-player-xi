
import { useEffect, useState } from 'react'
import './App.css'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Players from './Components/Players/Players'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';

function App() {

  const [players,setPlayers] = useState([]);
  const [selectedPlayers,setSelectedPlayers] = useState([]);
  const [isActive,setIsActive] = useState(true)
  const [freeGift,setFreeGift] = useState(0)


  useEffect(()=>{
    fetch('./players.json')
    .then(res=>res.json())
    .then((data=>setPlayers(data)))
  },[])
 
  const handleSelectedPlayers = (player)=>{
    const existSelectedPlayer = selectedPlayers.find((existPlayer)=>existPlayer.playerId === player.playerId)
    if(existSelectedPlayer){
      
      toast.error('Player already selected', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }else{
        if(freeGift>player.biddingPrice){
            if(selectedPlayers.length<6){
              setSelectedPlayers([...selectedPlayers,player])
              setFreeGift(freeGift-player.biddingPrice)
              toast.success(`Congratulation!! ${player.name} is now your squad`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            }else{
              toast.error(' You cannot select more than 6 player!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            }
        }else{
          
          toast.error('Your balance is low for selecting player', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        }
    }
     
  }

  const handleRemoverPlayer = (player)=>{
      const remainingSelectedPlayers = selectedPlayers.filter((p)=>p.playerId !== player.playerId);
      setSelectedPlayers(remainingSelectedPlayers);
      toast.success(` ${player.name} remove on your squad`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      

  }

  const handleActiveStatus = (status)=>{
        if(status==='available'){
          setIsActive(true)
        }else{
          setIsActive(false)
        }
  }
  const handleAvailablePlayersBtn = ()=>{
        setIsActive(true)
  }

  const handleFreeGift=()=>{

    setFreeGift(freeGift+7500000)
    toast.success('Credit added to your account', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  

  return (
    <>
     
     <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition='bounce'
        />
          <Navbar freeGift={freeGift}></Navbar>
          <div className='p-3'>
            <Banner handleFreeGift={handleFreeGift}></Banner>
          </div>
          
      

        <main className='container mx-auto mb-16 space-y-8 p-3'>
            <Players handleActiveStatus={handleActiveStatus}
             isActive={isActive}
             selectedPlayers={selectedPlayers}></Players>
            <section >
                  {
                    isActive ?<AvailablePlayers
                    players={players}
                    handleSelectedPlayers={handleSelectedPlayers}></AvailablePlayers>:<SelectedPlayers 
                    selectedPlayers={selectedPlayers}
                    handleRemoverPlayer={handleRemoverPlayer} handleAvailablePlayersBtn={handleAvailablePlayersBtn}></SelectedPlayers>
                  }
                
            </section> 
        </main>
       
        <footer className=''>
        <section className='relative translate-y-[50%] z-30 p-3'>
            <NewsLetter></NewsLetter>
        </section>
            <Footer></Footer>
      </footer>
                  
      
    </>
  )
}

export default App
