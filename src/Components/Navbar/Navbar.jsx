import React from 'react'
const Navbar = ({freeGift}) => {
  return (
    <div className='py-2 sticky top-0  backdrop-blur-3xl z-50'>
            <div className="navbar justify-between   container mx-auto backdrop-blur-3xl" >
                <div className="">
                    <a className=""><img src="https://i.ibb.co.com/Jp1bRhx/logo.png" alt="" /></a>
                </div>
                <div>
                <div className=" hidden  sm:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
                    <li><a>Home</a></li>
                    <li><a >Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a >Schedule</a></li>
                    
                    </ul>
                    <div className="ml-8">
                    <a className="btn bg-transparent border border-black font-bold">{freeGift} Coin <i className="fa-solid fa-coins text-orange-400"></i></a>
                   </div>
                </div>
                     <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                    <div className="ml-8">
                    <a className="btn bg-transparent border border-black font-bold">{freeGift} Coin <i className="fa-solid fa-coins text-orange-400"></i></a>
                   </div>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 right-0 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a >Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a >Schedule</a></li>
                    </ul>
                    </div>
                </div>
               
            </div>
    </div>
  )
}

export default Navbar
