import React from 'react'

const InboxPage2 = () => {

  return (
    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
            <div className=' flex flex-col gap-1 ml-10'>
             <div className=' font-extrabold text-4xl'>LIBRARY</div>
             <a href='#'className='text-l font-thin' >INBOX</a>
            </div>
            <div className='flex gap-4 text-sm'>
            <span className='text-[#fed478fe]'>USER NAME</span>
            <a href='#'>REPORTS</a>
            <a href='#'>SETTINGS</a>
            <a href='#'className='mr-4 '>LOGOUT</a>
            </div>
            </nav>


<div className='flex flex-row justify-between'>
 <form className='flex flex-col items-center bg-slate-300 h-screen space-x-5 ml-3 mt-4 p-10 pl-5'>
   <h2 className='text-xl text-black font-bold rounded mx-3 p-3'>MESAJ İŞLEMLERİ </h2>
     <div className='flex flex-col'>
       <button className='bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-2 rounded  mt-10'>Mesaj Gönder</button>
       <button className='bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded  mt-10'>Gelen Kutusuna Bak</button>
     </div>
  </form>

  <div className="container p-4"> 
      <form className="bg-slate-300 space-x-5 h-screen">
        <label className="flex-auto text-md font-bold ml-10 mt-5">[1 Okunmamış Mesaj]</label>           
        <ul className="p-4 space-y-2 ">
          <li className="p-4 bg-black rounded shadow">
            <article className='p-4 flex justify-between items-center'>
              <div>
                <h3 className="text-gray-600 font-semibold">Kitap Ödünç Alma Talebi</h3>
                <h3 className="text-gray-400 font-semibold">Sevgi Yılmaz'dan 1 mesaj</h3>
                <p className="text-[#fed478fe]">????????</p> 
              </div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Okunmuş
              </button>
            </article>
          </li>
          <li className="p-4 bg-black rounded shadow">
            <article className='p-4 flex justify-between items-center'>
              <div>
                <h3 className="text-gray-600 font-semibold">Şikayet</h3>
                <h3 className="text-gray-400 font-semibold">Ahmet Dönmez'den 1 mesaj</h3>
                <p className="text-[#fed478fe]">...............</p> 
              </div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
               Okunmuş
              </button>
            </article>
          </li>
          <li className="p-4 bg-black rounded shadow">
            <article className='p-4 flex justify-between items-center'>
              <div>
                <h3 className="text-gray-600 font-semibold">Şikayet</h3>
                <h3 className="text-gray-400 font-semibold">Tamer Güneş'ten 1 mesaj</h3>
                <p className="text-[#fed478fe]">AAAAAAAAAA</p>
              </div>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
               Okunmamış
              </button>
            </article>
          </li>
        </ul>
     </form>
  </div>
  <div className=' bg-slate-300 space-x-5 h-screen mt-4 w-3/4 flex flex-col space-y-3'>  
   <form className='bg-slate-500 h-auto border-spacing-3 rounded flex flex-auto justify-between gap-3'>
    <h3 className="  text-black font-semibold ml-2 mt-2">Kitap Ödünç Alma Talebi</h3>
    <h3 className="  text-black font-semibold ml-4 mt-2">GörevliAdı Abdurrahman</h3>
   </form>
   <form className='bg-slate-500 min-h-screen mx-3'>
   <h3 className="  text-black font-semibold ml-4 mt-2">Ödünç alma talebiniz reddedildi.</h3>
   </form>
  </div>
</div>


</div>
  )
}

export default InboxPage2