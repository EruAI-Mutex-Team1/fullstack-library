 import React, {  useState} from 'react'
 import { GiArcher ,GiArrowsShield } from "react-icons/gi";
import { Link } from 'react-router-dom';


//Zeh
 const Register2 = () => {

   const[name, setname]=useState("");
   const[surname, setsurname]=useState("");
   const[username, setusername]=useState("");
   const[email, setemail]=useState("");
   const[password, setpassword]=useState("");
   const[confirmPassword, setconfirmPassword]=useState("");
   const[passwordeşleşiyormu, setpasswordeşleşiyormu]=useState("");

   const uyeEkle = async () => {

    const user = {
      
      uyeid:2,
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
    if(yanit.ok){
      console.log("kayit oldu")
    }
}

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (password === confirmPassword) {
//     setpasswordeşleşiyormu(true);
//     alert("Registration successful!"); // Şifreler eşleşirse işlemi devam ettir
//   } else {
//     setpasswordeşleşiyormu(false);
//   }
// };




   return (
     <div className='place-self-center bg-white h-[750px] w-[430px] p-20 rounded-xl flex flex-col gap-5 '>
       {/* title */}
       
        <div className='flex flex-col justify-center items-center gap-1'> 
          <div className='flex flex-row gap-4'>
          <GiArcher className='text-5xl text-sky-950 font-bold '/> {/* adding icon */}
          <GiArrowsShield className='text-5xl text-sky-950 font-bold '/> {/* adding icon */}
          </div>
          <h1 className='text-3xl text-center text-sky-950 font-bold tracking-wider'>SİGN UP</h1>
       </div>
       <form className='bg-white h-[650px] rounded-md text-sky-950 text-base 
        tracking-normal p-8 flex flex-col gap-4 border border-blue-300 cursor-pointer'>
         <div>
             <label>USERNAME</label>
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
             <input  onChange={e => setconfirmPassword(e.target.value)} type='password' className='border-b-2 border-blue-300 bg-[#c1c2be33] hover:bg-[#9fa19e44]
              transition-all focus: outline-none'></input>
          </div>  
               <Link to="/Login" onClick={uyeEkle} className='bg-[#f9c65afe] rounded text-white font-semibold px-9 h-auto w-[150px] 
              place-self-center hover:bg-[#fed478c9] transition-all items-center '>CREATE ACCOUNT </Link> 
         </form> 
      
     </div>
   )
 
  }
 export default Register2