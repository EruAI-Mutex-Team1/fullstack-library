import React, { useEffect, useState } from 'react'

const AccRequest = () => {
  const [users, setusers] = useState([]);

  const AccRequest = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Account/getaccountcreationrequests`, {
      method: "GET"
    });

    if (yanit.ok) {
      const users = await yanit.json();
      setusers[users];

    }
  };
  useEffect(
    () => {
      AccRequest();
    }, [])

  return (
    <div>
      <nav className='bg-black text-white h-24 flex items-center justify-between'>
        <div className=' flex flex-col gap-1 ml-10'>
          <div className=' font-extrabold text-4xl'>LIBRARY</div>
          <a href='#' className='text-l font-thin' >HOME</a>
        </div>

        <div className='flex gap-4 text-sm'>
          <span className='text-[#fed478fe]'>MANAGER NAME</span>
          <a href='#' >REPORTS</a>
          <a href='#'>SETTINGS</a>
          <a href='#' className='mr-4 '>LOGOUT</a>
        </div>
      </nav>

      {/* underside*/}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
          <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>MEMBER OPERATİONS</h1>
          <button className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px] w-[200px]'>PENDING BORROW REQUESTS</button>
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
                  <td className='py-2 flex flex-row gap-3'><button className='bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] ml-3 '>APPROVE</button>
                    <button className='bg-[#f8c558fe] rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>REJECT</button>
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
