import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//özge
//swaggerda nereden çekeceğimi emin olamadım borrow kısmından çektim doğru değil gibi geldi borrew request kısmını göremedim

const BorrowRequest = () => {
  const [reqBooks, setreqBooks] = useState([]); //db de göremedim ama dizi döndermiş gibi düşündüm

  const borrowRequest = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/getBorrowRequests`, {
      method: "GET"
    });

    if (yanit.ok) {
      const reqBooks = await yanit.json();
      setreqBooks(reqBooks);
    }
  }

  useEffect(() => {
    borrowRequest();
  }, [])

  const ApproveReq = async () => {
    const request ={
      requestId: 0,
      confirmation: true
    }
    //requestId ler doğru mu
    const yanit = await fetch(`http://localhost:5249/api/Book/setBorrowRequest/${requestId}`, {
      method: "POST",
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
      requestId: 0,
      confirmation: false
    }
    const yanit = await fetch(`http://localhost:5249/api/Book/setBorrowRequest/${requestId}`, {
      method: "POST",
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

      {/* underside*/}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
          <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>MEMBER OPERATİONS</h1>
          <button className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] mt-[30px] w-[200px]'>PENDING BORROW REQUESTS</button>
          <Link to="/AccRequest" className=' bg-[#fcb92afe] py-2 px-3 rounded-sm hover:bg-[#fec752] w-[200px]'>PENDING MEMBER REGİSTORATİONS</Link>

        </div>
        {/* table */}
        <div className=' bg-slate-500 w-[1500px] h-[780px] overflow-y-auto max-h-[780px]'>

          <table className=' bg-slate-500 text-slate-200 w-[1265px] '>
            <thead className='bg-[#141b295e] text-xs'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[200px] font-serif'>BOOK</th>
                <th className='py-3  pr-[100px] font-serif'>REQUESTOR</th>
                <th className='py-3  pr-[100px] font-serif'>BORROW DATE</th>
                <th className='py-3  pr-[100px] font-serif'>RETURN DATE</th>
                <th className='py-3  pr-[270px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            {/* burada db de göremediğim için parametreleri rastgele atadım */}
            <tbody className='text-white text-sm'>
              {reqBooks.map((book, index) => (
                <tr className='border-b-2 border-black'>
                  <td className='py-3 pl-4 font-medium'>{book.bookTitle}</td>
                  <td className='py-3 font-thin'>{book.userFullname}</td>
                  <td className='py-3 font-thin'>{book.borrowDate}</td>
                  <td className='py-3 font-thin'>{book.returnDate}</td>
                  <td className='py-2 flex flex-row gap-3'>
                    <button onClick={ApproveReq} className='bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] ml-3 '>APPROVE</button>
                    <button onClick={RejectReq} className='bg-[#f8c558fe] rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>REJECT</button>
                    {/* setborrowrequestden approve ve reject çekeceğim */}
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

export default BorrowRequest
