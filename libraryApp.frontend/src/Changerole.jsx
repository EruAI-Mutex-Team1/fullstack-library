import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
//özge
const Changerole = () => {
  const [users, setusers] = useState([]); //userdan ne dönüyor dizi mi
  const [selectedRoleId, setSelectedRoleId] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(0);


  const [user, setUser] = useState(null);//kullanıcı bilgileri için
  const nav = useNavigate();

  const fetchUsers = async () => {
    const yanit = await fetch(`http://localhost:5249/api/User/getusersforrolechanging/${user.roleId}`, {
      method: "GET"
    });
    if (yanit.ok) {
      const users = await yanit.json();
      setusers(users);
    }
  };

  //kullanıcı bilgilerini kullanmak için her sayfaya eklenecek
  const checkUser = () => {
    const data = localStorage.getItem("userData");
    if (data === null) {
      nav("/Login");
      return;
    }
    
    const user = JSON.parse(data);
    setUser(user);

    if (user.roleName !== "manager") {
     nav("/");
     return;
    }
  }
  //
  useEffect(
    () => {
      checkUser();
      fetchUsers();
    },
    []);

  //userId ve newRoleId kısmına ne vereceğiz + fonkksiyonum neden tanımlanmıyor
  const updateRole = async () => {
    const role = {
      userId: selectedUserId,
      newRoleId: selectedRoleId
    }

    //path içine book id vermemiz gerekiyor mu
    const yanit = await fetch(`http://localhost:5249/api/User/ChangeRole`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(role),
    });
    if (yanit.ok) {
      console.log("rol güncellendi");
    }
    else {
      console.log("rol güncellenemedi");
    }

  };



  return (
    <div>
      <nav className='bg-black text-white h-24 flex items-center justify-between'>
        <div className=' flex flex-col gap-1 ml-10'>
          <div className=' font-extrabold text-4xl'>LIBRARY</div>
          <Link to="/Home" className='text-l font-thin' >HOME</Link>
        </div>

        <div className='flex gap-4 text-sm'>
          <span className='text-[#fed478fe]'>MANAGER NAME</span>
          <Link to="/Login" className='mr-4 text-red-700'>LOGOUT</Link>
        </div>
      </nav>

      {/* underside*/}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
          <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>GENERAL OPERATİONS</h1>
          <button className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px]'>CHANGE ROLE</button>
          <Link to="/Punishing" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752]'>PUNISH A USER</Link>

        </div>
        {/* form */}
        <form className='text-white bg-[#3953882c]  border-2 border-black h-[600px] w-[1000px] flex flex-col py-7 px-7 gap-6 ml-[120px] mt-[40px]'>
          <div className='flex flex-col'>
            <label >SELECT USER</label>
            <select onChange={e => setSelectedUserId(e.target.value)} className=' bg-[#0b265d5e] w-[800px] hover:bg-[#2d374b5a] '>
              <option value="" >Select an option</option>
              {users.map((user, index) => (
                <option value={user.userId} >{user.fullname + " - " + user.roleName}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col py-3'>
            <label>ROLES</label>
            <select onChange={e => setSelectedRoleId(e.target.value)} className=' bg-[#0b265d5e] w-[800px] hover:bg-[#2d374b5a] '>
              <option value="" >Select an option</option>
              <option value="1" >MEMBER</option>
              <option value="2" >MANAGER</option>
              <option value="3" >STAFF</option>
              <option value="4" >AUTHOR</option>
            </select>
          </div>

          <button onClick={updateRole} className='bg-[#0f123c] rounded-sm py-1 hover:bg-[#0f123cd1] w-[120px]  ml-[670px] mt-[50px]'>UPDATE</button>

        </form>

      </div>
    </div>
  )
}


export default Changerole
