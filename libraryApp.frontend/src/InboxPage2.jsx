import React from 'react'

const InboxPage2 = () => {
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
    </div>
  )
}

export default InboxPage2