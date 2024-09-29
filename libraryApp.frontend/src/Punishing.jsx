import React from 'react'

const Punishing = () => {
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
            <button className=' bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb] mt-[30px]'>CHANGE ROLE</button>
            <button className='bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb]'>PUNISH A USER</button>
          </div>
          {/* forms */}
          <div className='w-[1000px] h-[600px] ml-[115px] mt-[38px]'>
            <form className='bg-[#0c48fc27] border-2 border-black flex flex-col w-[1000px] h-[80px] pl-6 pt-1  '>
              <label>SELECT A USER TO VİEW PUNİSHMENT STATUS</label>
              <select className='w-[650px] text-gray-400' aria-placeholder='Select'>SELECT USER</select>
            </form>

            <form className='bg-[#0c48fc27] border-2 border-black flex flex-col w-[1000px] h-[480px] mt-[18px] '>
              
              <h2 className='border-b-2 border-black pt-2 w-[950px] ml-[19px]'>PUNISHMENT STATUS</h2>
              
              <div className=' ml-[19px] flex gap-4 mt-[20px]'>
                <label>IS USER PUNISHED</label>
                <input type='checkbox'></input>
              </div>
              <div className=' flex flex-row gap-7  ml-[330px] mt-[20px]'>
                <label>CURRENT POINT</label>
                <input type='number' defaultValue={0}></input>
              </div>
              <div className=' flex flex-col  w-[950px] ml-[19px] mt-[10px]'>
              <label>DETAILS</label>
              <input type='text' className='h-[200px]'></input>
              </div>
              <button className='bg-[#820a0a]  text-white rounded-sm py-1 w-[80px] hover:bg-[#820a0ada] ml-[890px] mt-[20px]'>PUNISH</button>
            </form>
          </div>

        </div>
      
    </div>
  )
}

export default Punishing
