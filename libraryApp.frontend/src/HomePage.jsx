import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  
  
    return (

    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
            <div className=' flex flex-col gap-1 ml-10'>
             <div className=' font-extrabold text-4xl'>LIBRARY</div>
             <a href='#'className='text-l font-thin' >HOME</a>
            </div>
          
            <div className='flex gap-4 text-sm'>
            <span className='text-[#fed478fe]'>MANAGER NAME</span>
            <a href='#' >REPORTS</a>
            <a href='#'>SETTINGS</a>
            <a href='#'className='mr-4 '>LOGOUT</a>
            </div>
        </nav>

        <div className='text-white bg-black  flex flex-col gap-4 items-center w-[300px] min-h-screen'>
            <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>GENERAL OPERATİONS</h1>
            <Link to="/Changerole" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>CHANGE ROLE</Link>
            <Link to="/Messaging" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MESSAGİNG</Link>        
            <Link to="/Booksearch" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> SEARCH BOOK</Link>
            <Link to="/AuMybook" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MY BOOKS</Link>
            <Link to="/Writebook" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> WRİTE BOOK</Link>
            <Link className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> READ BOOK</Link>
            <Link to="/Punishing" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> PUNİSH USER</Link>
          </div>
    </div>
  )
}

export default HomePage