import React from 'react'

const AubookRequest = () => {
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
        {/*  underside */}
        <div className='flex flex-row'>
         {/* sidebar */}
          <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
            <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>AUTHOR OPERATİONS</h1>
            <button className=' bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb] mt-[30px] w-[200px]'>PENDING BOOK CREATION REQUESTS</button>
            
          </div>
          {/* table */}
          <div className=' bg-slate-500 w-[1500px] h-[780px] overflow-y-auto max-h-[780px]'>
            
            <table className=' bg-slate-500 text-slate-200 w-[1265px] '>
            <thead className='bg-[#141b295e] text-sm'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[150px] font-serif'>BOOK NAME</th>
                <th className='py-3  pr-[100px] font-serif'>AUTHOR</th>
                <th className='py-3  pr-[60px] font-serif'>REQUEST DATE</th>
                <th className='py-3  pr-[380px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-white text-sm'>
            <tr className='border-b-2 border-black'>
                <td className='py-3 pl-7 font-medium'>SEKER PORTAKALI</td>
                <td className='py-3 font-thin'>NAME</td>
                <td className='py-3 font-thin'>24/4/24</td>
                <td className='py-2 flex flex-row gap-3'><button className=' bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] ml-[80px] '>READ THE BOOK</button>
                <button className=' bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1]'>APPROVE</button>
                <button className='bg-[#f8c558fe] rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>REJECT</button>
                <input type='text' placeholder='DETAILS' className=' bg-slate-200 rounded-sm h-[25px] w-[220px] mt-1 text-black'></input></td>
              </tr>
            </tbody>
            </table>
          </div>  
        </div>  
      
    </div>
  )
}

export default AubookRequest
