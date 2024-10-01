import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//özge
const AccRequest = () => {
  const [users, setusers] = useState([]);
 //ROLE ID VE STAFF ID EKLENMEDİ APPROVE VE REJECT KISIMLARINA
 const [user, setUser] = useState(null);//kullanıcı bilgileri için
 const nav = useNavigate();

  const fetchAccRequest = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Account/getaccountcreationrequests`, {
      method: "GET"
    });

    if (yanit.ok) {
      const users = await yanit.json();
      setusers(users);

    }
  };
  useEffect(
    () => {
      fetchAccRequest();
    }, [])

   //
    const ApproveReq = async () =>{
      const request={
        requestId: 0,
        isApproved: true,
        staffId: 0
      }

      const yanit = await fetch(`http://localhost:5249/api/Account/setaccountcreationrequest`,{
        method:"PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(request),
      });
      if(yanit.ok)
      {
        console.log("kabul edilme gerçekleşti");
      }
      else{
        console.log("kabul edilme gerçekleştirilemedi");
      }
    }

    const RejectReq = async () =>{
      const request={
        requestId: 0,
        isApproved: false,
        staffId: 0
      }

      const yanit = await fetch(`http://localhost:5249/api/Account/setaccountcreationrequest`,{
        method:"PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(request),
      });
      if(yanit.ok)
      {
        console.log("reddetme gerçekleşti");
      }
      else{
        console.log("reddetme gerçekleştirilemedi");
      }
    }

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


  return (
    <div>
      <nav className='bg-black text-white h-24 flex items-center justify-between'>
        <div className=' flex flex-col gap-1 ml-10'>
          <div className=' font-extrabold text-4xl'>LIBRARY</div>
          <Link to="/Home" className='text-l font-thin' >HOME</Link>
        </div>

        <div className='flex gap-4 text-sm'>
          <span className='text-[#fed478fe]'>MANAGER NAME</span>
          <Link to="/Login" href='#' className='mr-4 text-red-700 '>LOGOUT</Link>
        </div>
      </nav>

      {/* underside*/}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
          <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>MEMBER OPERATİONS</h1>
          <Link to="/BorrowRequest" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px] w-[200px]'>PENDING BORROW REQUESTS</Link>
          <button className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] w-[200px]'>PENDING MEMBER REGİSTORATİONS</button>

        </div>
        {/* table */}
        <div className=' bg-slate-500 w-[1500px] h-[780px] overflow-y-auto max-h-[780px]'>

          <table className=' bg-slate-500 text-slate-200 w-[1265px] '>
            <thead className='bg-[#141b295e] text-sm'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[200px] font-serif'>FULL NAME</th>
                <th className='py-3  pr-[100px] font-serif'>USERNAME</th>
                <th className='py-3  pr-[100px] font-serif'>REQUEST DATE</th>
                <th className='py-3  pr-[270px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-white text-[15px]'>
              {users.map((user, index) => (
                <tr className='border-b-2 border-black'>
                  <td className='py-3 pl-4 font-medium'>{user.fullName}</td>
                  <td className='py-3 font-thin'>{user.username}</td>
                  <td className='py-3 font-thin'>{user.requestDate}</td>
                  <td className='py-2 flex flex-row gap-3'><button onClick={() => ApproveReq(user.id)} className='bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] ml-3 '>APPROVE</button>
                    <button onClick={() => RejectReq(user.id)} className='bg-[#f8c558fe] rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>REJECT</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default AccRequest
