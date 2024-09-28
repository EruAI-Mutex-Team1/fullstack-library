 import React, { useEffect } from 'react'
 import { MdOutlineLocalLibrary } from "react-icons/md";


 const Register2 = () => {

   const[name, setname]=useState("");
   const[surname, setsurname]=useState("");
   const[username, setusername]=useState("");
   const[email, setemail]=useState("");
   const[password, setpassword]=useState("");
   const[confirmPassword, setconfirmPassword]=useState("");

   const uyeEkle = async () => {

    const user = {
      
      name: name,
      surname: surname,
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }

    const yanit = await fetch(`http://localhost:5249/api/Account/Register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
}


   return (
     <div className='place-self-center bg-white h-[750px] w-[430px] p-20 rounded-xl flex flex-col gap-3 '>
       {/* title */}
        <div className='flex flex-col justify-center items-center gap-1'> 
          <MdOutlineLocalLibrary className='text-5xl text-sky-950 font-bold '/> {/* adding icon */}
          <h1 className='text-3xl text-center text-sky-950 font-bold tracking-wider'>KAYIT OL</h1>
       </div>
       <form className='bg-white h-[650px] rounded-md text-sky-950 text-base 
        tracking-normal p-8 flex flex-col gap-4 border border-blue-300 cursor-pointer'>
         <div>
             <label>KULLANICI ADI</label>
             <input onChange={e => setusername(e.target.value)} type='text' className='border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
              hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
         </div>
         <div>
             <label>AD</label>
             <input onChange={e => setname(e.target.value)} type='text' className='flex flex-col border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
              hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
         </div>
         <div>
             <label>SOYAD</label>
             <input onChange={e => setsurname(e.target.value)} type='text' className='border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
              hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
         </div>
         <div>
             <label>E-POSTA</label>
             <input onChange={e => setemail(e.target.value)} type='text' className='border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
              hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
         </div>
         <div>
             <label>PAROLA</label>
             <input onChange={e => setpassword(e.target.value)} type='password' className='border-b-2 border-blue-300 bg-[#c1c2be33] hover:bg-[#9fa19e44]
              transition-all focus: outline-none'></input>
          </div>  
          <div>
             <label>PAROLA TEKRAR</label>
             <input onChange={e => setconfirmPassword(e.target.value)} type='password' className='border-b-2 border-blue-300 bg-[#c1c2be33] hover:bg-[#9fa19e44]
              transition-all focus: outline-none'></input>
          </div>  
               <button className='bg-[#fed478fe] rounded text-white text h-[30px] w-[150px] absolute bottom-[105px]
              place-self-center hover:bg-[#fed478c9] transition-all  '>KAYIT OL</button> 
         </form> 
      
     </div>
   )
 }

 export default Register2