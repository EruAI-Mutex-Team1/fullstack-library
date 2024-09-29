import React from 'react'

const AuMybook = () => {
  return (
    <div>
       <nav className='bg-black text-white h-24 flex items-center justify-between'>
            <div className=' flex flex-col gap-1 ml-10'>
             <div className=' font-extrabold text-4xl'>LIBRARY</div>
             <a href='#'className='text-l font-thin' >HOME</a>
            </div>
          
            <div className='flex gap-4 text-sm'>
            <span className='text-[#fed478fe]'>AUTHOR NAME</span>
            <a href='#' >MY BOOKS</a>
            <a href='#'className='mr-4 '>LOGOUT</a>
            </div>
        </nav>
        {/*under side  */}
        <div>
          
          
          <button className='bg-[#fdc13ffe] rounded-sm text-white text-base font-medium py-2 px-3 hover:bg-[#ecbe5bb6] ml-[1300px] mt-[15px] '>Create a book</button>
          <h1 className='text-2xl font-serif pl-[700px]'>MY BOOKS</h1>  
         <div className='mt-[20px] ml-[90px] overflow-y-auto max-h-[550px]  '>
          <table className='border-2 border-black bg-[#202f4c9a] text-slate-200'>
            <thead className='bg-[#141b295e] text-xs'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[180px] font-serif'>BOOK NAME</th>
                <th className='py-3  pr-[150px] font-serif'>STATUS</th>
                <th className='py-3  pr-[100px] font-serif'>PUBLISH DATE</th>
                <th className='py-3  pr-[600px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-white text-sm'>
            <tr className='border-b-2 border-black'>
                <td className='py-3 pl-4 font-medium'>POLLYANNA</td>
                <td className='py-3 font-thin'>CAN SEND REQUEST</td>
                <td className='py-3 font-thin'>24/4/24</td>
                <td className='py-2'>
                  {/* name input */}
                  <div className='flex flex-row mb-2'>
                    <input type='text' className='  w-60 h-8 bg-gray-300 p-2 rounded-sm text-black' placeholder='Enter new name'/>
                    <button className='bg-black rounded-sm text-xs font-medium py-2 px-3 hover:bg-neutral-900 mr-3 '>CHANGE</button>
                  </div>
                
                  <button className='bg-[#0f123c] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#0f123cd1] mr-3 '>WRITE</button>
                  <button className='bg-[#0f123c] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#0f123cd1] mr-3 '>Request Publishment</button>
                  <button className='bg-[#fdc13ffe] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#ecbe5bb6] mr-3 '>READ</button>
                 </td>
              </tr>
            
            <tr className='border-b-2 border-black'>
                <td className='py-3 pl-4 font-medium'>POLLYANNA</td>
                <td className='py-3 font-thin'>PUBLISHED</td>
                <td className='py-3 font-thin'>24/4/24</td>
                <td className='py-2'><button className='bg-[#fdc13ffe] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#ecbe5bb6] mr-3 '>READ</button></td>
              </tr>
              <tr className='border-b-2 border-black'>
                <td className='py-3 pl-4 font-medium'>POLLYANNA</td>
                <td className='py-3 font-thin'>PUBLISHED</td>
                <td className='py-3 font-thin'>24/4/24</td>
                <td className='py-2'><button className='bg-[#fdc13ffe] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#ecbe5bb6] mr-3 '>READ</button></td>
              </tr>
              <tr className='border-b-2 border-black'>
                <td className='py-3 pl-4 font-medium'>POLLYANNA</td>
                <td className='py-3 font-thin'>PUBLISHED</td>
                <td className='py-3 font-thin'>24/4/24</td>
                <td className='py-2'><button className='bg-[#fdc13ffe] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#ecbe5bb6] mr-3 '>READ</button></td>
              </tr>
              <tr className='border-b-2 border-black'>
                <td className='py-3 pl-4 font-medium'>HEIDI</td>
                <td className='py-3 font-thin'>PUBLISHED</td>
                <td className='py-3 font-thin'>24/4/24</td>
                <td className='py-2'><button className='bg-[#fdc13ffe] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#ecbe5bb6] mr-3 '>READ</button></td>
              </tr>
               </tbody>
             </table>
            </div>
            
           
        </div>
      
    </div>
  )
}

export default AuMybook
