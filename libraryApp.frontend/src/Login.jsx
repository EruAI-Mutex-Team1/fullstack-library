import React, { useState } from 'react'
import { MdOutlineLocalLibrary } from "react-icons/md";


const Login = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const uyesor = async () => {

        const user = {
          username: username,
          password: password,
        }
    
        const yanit = await fetch(`http://localhost:5249/api/Account/Login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: Json.stringify(user),
        });

        if(yanit.ok){
          const user = await yanit.json();
          localStorage.setItem("userData", Json.stringify(user.userDTO));
        }
      }

  return (
    <div className='place-self-center bg-white h-[550px] w-[450px] p-20 rounded-xl flex flex-col gap-4 '>
      {/* title */}
      <div className='flex flex-col justify-center items-center gap-5'>
         <MdOutlineLocalLibrary className='text-5xl text-sky-950 font-bold '/> {/* adding icon */}
         <h1 className='text-3xl text-center text-sky-950 font-bold tracking-wider'>GİRİŞ YAP</h1>
      </div>
      <form className='bg-white h-[300px] rounded-md text-sky-950 text-base 
       tracking-wide p-8 flex flex-col gap-5 border border-blue-300 cursor-pointer'>
        <div>
            <label>KULLANICI ADI</label>
            <input onChange={e => setusername(e.target.value)} type='text' className='border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
             hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
        </div>
        <div>
            <label>PAROLA</label>
            <input onChange={e => setpassword(e.target.value)} type='password' className='border-b-2 border-blue-300 bg-[#c1c2be33] hover:bg-[#9fa19e44]
             transition-all focus: outline-none'></input>
        </div>    
            <button className='bg-[#fed478fe] rounded text-white text h-[30px] w-[150px] absolute bottom-[230px]
             place-self-center hover:bg-[#fed478c9] transition-all  '>GİRİŞ</button>
        </form>
      
    </div>
    )
}

export default Login
