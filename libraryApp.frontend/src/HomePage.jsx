import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//bu sayfanın nav kısmını özge güncellediii
const HomePage = () => {
    const [user, setUser] = useState({});
    return (
    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
            <div className=' flex flex-col gap-1 ml-10'>
             <div className=' font-extrabold text-4xl'>LIBRARY</div>
             <a href='#'className='text-l font-thin' >HOME</a>
            </div>
          
            <div className='flex gap-4 text-sm'>
            <span className='text-[#fed478fe]'>{user.username}</span>
            <button onClick={() => {
              localStorage.removeItem("userData");
              nav(0);
              }} className='mr-4 text-red-700'>LOGOUT</button>
            </div>
        </nav>

        <div className='text-white flex flex-col  gap-4 items-center w-[300px] min-h-screen'>
            <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>GENERAL OPERATİONS</h1>
            {/* {(user.roleName === "manager") && (
            <Link to="/Changerole" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>CHANGE ROLE</Link>           
            )} */}
             {(user.roleName === "manager" ||"staff") && (
            <Link to="/Changerole" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>CHANGE ROLE</Link>
            )}
            {(user.roleName === "manager" ||"staff") && (
            <Link to="/Changerole" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>PUNİSH</Link>
            )}
            {(user.roleName === "manager" ||"staff" ||"member") && (
             <Link to="/Messaging" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MESSAGİNG</Link> 
            )}
            {(user.roleName === "manager" ||"staff" ||"member") && (
             <Link to="/Inbox" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> INBOX</Link>
            )}
            {(user.roleName === "manager" ||"staff" ||"member") && (
             <Link to="/Booksearch" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> SEARCH BOOK</Link> 
            )}
            {(user.roleName === "manager" ||"staff" ||"member") && (
             <Link to="/Booksearch" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> SEARCH BOOK</Link> 
            )}
            {(user.roleName === "manager" ||"staff" ||"member") && (
             <Link to="/Booksearch" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> SEARCH BOOK</Link> 
            )}
            {(user.roleName === "manager" ||"staff" ||"member") && (
             <Link to="/Booksearch" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> SEARCH BOOK</Link> 
            )}
            <Link to="/Messaging" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MESSAGİNG</Link>       
            <Link to="/Inbox" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> INBOX</Link>  
            <Link to="/Booksearch" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> SEARCH BOOK</Link>
            <Link to="/AuMybook" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> MY BOOKS</Link>
            <Link to="/Writebook" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'> WRİTE BOOK</Link>
          </div>
    </div>
  )
}

export default HomePage