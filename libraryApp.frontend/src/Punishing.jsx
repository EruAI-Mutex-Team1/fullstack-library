import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//Zeh
const Punishing = () => {

  const [punishusers,setpunishusers]=useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState({});

  const [user, setUser] = useState({});
  const nav = useNavigate();

//bu fonk çalışmayor
  const fetchgetpunishuser = async () => {
    const yanit = await fetch(`http://localhost:5249/api/User/getuserforpunishment/${2}`, {
      method: "GET",
    });

    if (yanit.ok) {
      const punishusers = await yanit.json();
      setpunishusers(punishusers);
    }
  };

  const punishIt = async () => {

    const punish = {
      userId: userId,      
      punisherId: punisherId,
      isPunish: true,
    }

    const yanit = await fetch(`http://localhost:5249/api/User/SetPunishment`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(punish),
    });

    if (yanit.ok) {
      console.log("Cezalandırıldı");
    } else {
      console.log("Cezalandırılamadı");
    }
  }

  useEffect (()=> {
    const data = localStorage.getItem("userData");
      if(data === null){
        nav("/Login");       
      }
      const user = JSON.parse(data);
      setUser(user);     
      console.log(user);

    fetchgetpunishuser();
   }, []);

  return (
    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
            <div className=' flex flex-col gap-1 ml-10'>
             <div className=' font-extrabold text-4xl'>LIBRARY</div>
             <Link to="/Home" className='text-l font-thin' >HOME</Link>
            </div>
          
            <div className='flex gap-4 text-sm'>
            <span className='text-[#fed478fe]'>{user.name + " " +user.surname}</span>
            <Link to="/Login" className='mr-4 text-red-700'>LOGOUT</Link>
            </div>
        </nav>

         {/* underside*/}
        <div className='flex flex-row'>
         {/* sidebar */}
          <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
            <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>GENERAL OPERATİONS</h1>
            <Link to="/ChangeRole" className=' bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb] mt-[30px]'>CHANGE ROLE</Link>
            <button className='bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb]'>PUNISH A USER</button>
          </div>
          {/* forms */}
          <div className='w-[1000px] h-[600px] ml-[70px] mt-[38px]'>
            <form className='bg-[#fde5b1fe] border-2 border-black flex flex-col w-[1000px] h-[80px] pl-6 pt-1'>
              <label>SELECT A USER TO VİEW PUNİSHMENT STATUS</label>
              <select onChange={e => setSelectedUserId(e.target.value)} className='w-[650px] text-gray-400 ' aria-placeholder='Select'>
              <option value="" >Select an user</option>
               {punishusers.map((user, index) => (
            <option value={user.userId} >{user.fullname + " - " + user.roleName}</option>
            ))}
              </select>
            </form>

            <form className='bg-[#fde5b1fe] border-2 border-black flex flex-col w-[1000px] h-[480px] mt-[18px] '>
              {/* <p>{punishusers.find(p => p.userId === selectedUserId)?.isPunished ? "punished":"not punished"}</p> */}
              <div className=' place-self-center w-[950px] mt-40'>
              {/* <label>DETAILS</label>
              <input type='text' className='h-[200px]'></input> */}
               <button onClick={punishIt} className='bg-[#d51760fe]  text-white rounded-sm py-1 w-[105px] hover:bg-[#f75858f4] ml-[450px] mt-[20px]'>UPDATE PUNİSHMENT</button>
              </div>
             
            </form>
          </div>

        </div>
      
    </div>
  )
}

export default Punishing
