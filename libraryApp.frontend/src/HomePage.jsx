import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const [user, setUser] = useState({});
    const nav = useNavigate();
  
    useEffect(() => {
      //BURAYI DA YORUMA ALDIM DB BAĞLI OLMADIĞI İÇİN DATA NULL OLUYOR VE LOGİNE DÖNDERİYOR
      const data = localStorage.getItem("userData");
      if(data === null){
        nav("/login");       
      }
      const user = JSON.parse(data);
      setUser(user);  
      console.log(user);
    },[]);



    return (
    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
            <div className=' flex flex-col gap-1 ml-10'>
             <div className=' font-extrabold text-4xl'>LIBRARY</div>
             <a href='#'className='text-l font-thin' >HOME</a>
            </div>
          
            <div className='flex gap-4 text-sm'>
            <span className='text-[#fed478fe]'>{user.name + " " +user.surname}</span>
            <button onClick={() => {
              localStorage.removeItem("userData");
              nav("/Login");
              }} className='mr-4 text-red-700'>LOGOUT</button>
            </div>
        </nav>

        <div className='text-white flex flex-col  gap-4 items-center w-[300px] min-h-screen'>
            <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>GENERAL OPERATİONS</h1>
            {(user.roleName === "manager") && (
            <Link to="/Changerole" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>CHANGE ROLE</Link>           
            )}
            {(user.roleName === "manager") && (
            <Link to="/AubookRequest" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>AUTHOR BOOK REQUEST</Link>           
            )}
            {(user.roleName === "manager" ||user.roleName === "staff") && (
            <Link to="/Punishing" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>PUNİSH</Link>
            )}         
            {(user.roleName === "author") && (
              <Link to="/AuMybook" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MY BOOKS</Link>
            )}
            {(user.roleName === "author") && (
             <Link to="/Writebook" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> WRİTE BOOK</Link> 
            )}

            <Link to="/Messaging" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MESSAGİNG</Link>  
            <Link to="/Inbox" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> INBOX</Link>
            <Link to="/Booksearch" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> SEARCH BOOK</Link>
            <Link to="/BorrowedBooks" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MY BORROWED BOOKS</Link>

          </div>
            
    </div>
  )
}

export default HomePage