import React from 'react'

const WritePage2 = () => {
  return (
    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
            <div className=' flex flex-col gap-1 ml-10'>
             <div className=' font-extrabold text-4xl'>LIBRARY</div>
             <a href='#'className='text-l font-thin' >MY BOOKS</a>
            </div>
            <div className='flex gap-4 text-sm'>
            <span className='text-[#fed478fe]'>AUTHOR NAME</span>          
            <a href='#'>REPORTS</a>
            <a href='#'>SETTINGS</a>
            <a href='#'className='mr-4 '>LOGOUT</a>
            </div>
        </nav>
   <div className='bg-slate-800 h-screen flex flex-col gap-3 items-center '>
     <h2 className='text-l font-semibold text-slate-50 mt-5'>KİTAPADI</h2>
     <form className='bg-slate-600 h-4/5 w-4/5 rounded'>
      <div className='flex justify-between gap-2 mt-2 ml-2 mr-2'>
          <form className='bg-slate-500 h-16 w-4/5 rounded flex flex-row justify-center gap-2'>
             <h2 className='mt-4 text-lg text-slate-50'>Sayfa:</h2>  
             <form className='bg-slate-600 rounded border-b h-6 w-20 mt-5'>
              <p className='ml-2 font-bold'> 0</p>
             </form>      
          </form>
          <form className='bg-slate-500 h-16 w-1/5 rounded flex justify-center'>
           <h2 className='mt-4 text-lg text-slate-50'>Sayfalar</h2>
          </form>
      </div>
      <div className='flex justify-between h-3/5 gap-2 mt-2 ml-2 mr-2'>
      <input className='bg-slate-700 h-6/7 w-4/5 py-1 px-2'>
      </input> 
        <form className='bg-slate-500 rounded h-16 flex flex-row w-1/5 flex-wrap'>
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold'> 0</p>
         </div>                
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold'> 1</p>
         </div>
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold'> 2</p>
         </div>
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold'> 3</p>
         </div>
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold'> 4</p>
         </div>
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold'> 5</p>
         </div>
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold '> 6</p>
         </div>
         <div className='bg-slate-700 rounded-full flex items-center h-6 w-6 m-1'>
         <p className='ml-1 font-bold'> 7</p>
         </div>
        </form>
        </div>
        <form className='bg-slate-600 h-7 w w-3/4 ml-12'></form>
        <form className='bg-slate-600 h-20 w-3/4 ml-12 flex flex-row justify-end gap-3 '>
        <p className='ml-1 font-semibold mt-2 text-slate-50'> Bir Metin Yükle (.txt):</p>
        <div className="flex items-center justify-center h-10 rounded-xl bg-gray-100">
         <label className="block">
          <span className="sr-only">Choose File</span>
          <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
         </label>
        </div>
        <button className='bg-green-700 hover:bg-green-800 h-10 w-auto p-2 text-slate-50 rounded'> Kaydet
        </button>
        </form>
     </form>

   </div>


</div>
    
  )
}

export default WritePage2