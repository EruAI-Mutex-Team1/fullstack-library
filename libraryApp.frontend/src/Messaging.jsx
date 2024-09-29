import React from 'react'

const Messaging = () => {
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
            <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>MESSAGE OPERATİONS</h1>
            <button className=' bg-[#fcb92afe] py-3 px-3 rounded-sm hover:bg-[#fec752] mt-[30px] w-[200px]'>SEND MESSAGE </button>
            <button className=' bg-[#fcb92afe] py-3 px-3 rounded-sm hover:bg-[#fec752] w-[200px]'>VİEW INBOX</button>

          </div>
          <form className='bg-slate-500 w-[1500px] h-[780px] flex flex-row'>
            <div className='w-[300px] h-[780px] border-r-2 border-black flex flex-col items-center gap-3 pt-[70px]'>
            <label className='font-normal'>SELECT RECEİVER</label>
            <select className='w-[200px] h-7 rounded-sm'></select>
            </div>
            <div className=' flex flex-col ml-[140px] mt-[70px]'>
              <label>TITLE</label>
              <input type='text' className='w-[700px] h-7 rounded-sm '></input>
              <label>YOUR MESSAGE</label>
              <input type='text' className='w-[700px] h-[450px] rounded-sm'></input>
              <button className='bg-[#fcb92afe] text-white font-medium rounded-sm px-3 py-2  hover:bg-[#fec752] w-[80px] ml-[620px] mt-[20px]'>SEND</button>
            </div>
            

          </form>
        </div>
      
    </div>
  )
}

export default Messaging
