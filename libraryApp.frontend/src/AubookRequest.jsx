import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AubookRequest = () => {
//özge
  const [requests, setrequests] = useState([]);
  // const requestId= new URLSearchParams(location.search).get("requestId");

  const BookCreateReq = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/publishrequests`, {
      method: "GET"
    });
    if (yanit.ok) {
      const requests = await yanit.json();
      setrequests(requests);
    }
  }

  useEffect(() => {
    BookCreateReq();
  }, [])

  //AYNI ŞEKİLDE BOOK İDLER EKLENMEDİ
  const ApproveReq = async () => {
    const request = {
      confirmation: true
    }
    //requestId ler doğru mu
    const yanit = await fetch(`http://localhost:5249/api/Book/setpublishing/${requestId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    if (yanit.ok) {
      console.log("kabul edilme gerçekleşti");
    }
    else {
      console.log("kabul edilme gerçekleştirilemedi");
    }
  }

  const RejectReq = async () => {
    const request = {
      confirmation: false,
    }

    const yanit = await fetch(`http://localhost:5249/api/Book/setpublishing/${requestId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
    if (yanit.ok) {
      console.log("reddetme gerçekleşti");
    }
    else {
      console.log("reddetme gerçekleştirilemedi");
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
          <Link to="/Login" className='mr-4 text-red-700'>LOGOUT</Link>
        </div>
      </nav>
      {/*  underside */}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
          <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>AUTHOR OPERATİONS</h1>
          <div className=' bg-[#fdc13ffe] py-2 px-3 rounded-sm mt-[30px] w-[200px]'>PENDING BOOK CREATION REQUESTS</div>

        </div>
        {/* table */}
        <div className=' bg-white w-[1225px] h-[780px] overflow-y-auto max-h-[780px]'>

          <table className=' bg-white text-black w-[1265px] '>
            <thead className='bg-[#f9dc7654]  text-sm'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[150px] font-serif'>BOOK NAME</th>
                <th className='py-3  pr-[100px] font-serif'>AUTHOR</th>
                <th className='py-3  pr-[60px] font-serif'>REQUEST DATE</th>
                <th className='py-3  pr-[380px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-black text-sm'>
              {requests.map((request, index) => (
                <tr className='border-b-2 border-black'>
                  <td className='py-3 pl-8 font-medium'>{request.bookTitle}</td>
                  <td className='py-3 font-thin'>{request.userFullname}</td>
                  <td className='py-3 font-thin'>{request.requestDate}</td>
                  <td className='py-2 flex flex-row gap-3'>
                    {/* read sayfasına giderken nasıl yapacağız */}
                    <Link to={"/ReadBook?bookId="+ request.bookId} className=' bg-[#0f123c] text-white  rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] ml-[80px] '>READ THE BOOK</Link>
                    <button onClick={ApproveReq} className=' bg-[#0f123c] text-white rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1]'>APPROVE</button>
                    <button onClick={RejectReq} className='bg-[#f8c558fe] text-white rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>REJECT</button>
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

export default AubookRequest
