import React from 'react'

const Changerole = () => {
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
        
        {/* underside*/}
        <div className='flex flex-row'>
         {/* sidebar */}
          <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
            <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>GENERAL OPERATİONS</h1>
            <button className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>CHANGE ROLE</button>
            <button className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'>PUNISH A USER</button>

          </div>
          {/* form */}
          <form className='text-white bg-[#3953882c]  border-2 border-black h-[600px] w-[1000px] flex flex-col py-7 px-7 gap-6 ml-[120px] mt-[40px]'>
           <div className='flex flex-col'>
            <label >SELECT USER</label>
            <select className=' bg-[#0b265d5e] w-[800px] hover:bg-[#2d374b5a] '></select>
            </div> 
            
            <div className='flex flex-col py-3'>
            <label>ROLES</label>
            <select className=' bg-[#0b265d5e] w-[800px] hover:bg-[#2d374b5a] '></select>
            </div> 

            <button className='bg-[#0f123c] rounded-sm py-1 hover:bg-[#0f123cd1] w-[120px]  ml-[670px] mt-[50px]'>UPDATE</button>

          </form>
     
        </div>
    </div>
  )
}

export default Changerole
