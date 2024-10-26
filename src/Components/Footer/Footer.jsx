import React from 'react'
import NewsLetter from '../NewsLetter/NewsLetter'

const Footer = () => {
  return (

        
    
      <div className='bg-[#06091A]'>
        
        <div className='pt-56 container mx-auto'>
            <div className='flex  justify-center items-center'>
                    <img src="https://i.ibb.co.com/Hhmhdd5/logo-footer.png" alt="" />
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-between   *:text-white  p-10 relative py-20 ">
        <nav className='flex flex-col'>
            <h6 className="footer-title">Services</h6>
            <p className='max-w-[300px] text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</p>
        </nav>
        <nav className='flex flex-col '>
            <h6 className="footer-title">Company</h6>
            <div className='text-gray-400 flex flex-col'>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
            </div>
        </nav>
       
        <form>
            <h6 className="footer-title space-y-2">Subscribe</h6>
            <fieldset className="form-control  space-y-2">
            <label className="label">
                <span className="text-gray-400">Subscribe to our newsletter for the latest updates.</span>
            </label>
            <div className="join">
                <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item max-w-[170px] md:w-full" />
                <button className="btn bg-gradient-to-r from-orange-400 to-purple-400 join-item font-bold outline-none border-none">Subscribe</button>
            </div>
            </fieldset>
        </form>
        </div>
        </div>
      </div>
    
  )
}

export default Footer
