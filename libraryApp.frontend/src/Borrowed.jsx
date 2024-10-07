import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
//özge
const Borrowed = () => {
  const [kitaplar2, setKitaplar2] = useState([]);
  const [user, setUser] = useState({});
  const nav= useNavigate();

  const checkUser = () => {
    const data = localStorage.getItem("userData");
    if (data === null) {
      nav("/Login");
      return;
    }
    
    const user = JSON.parse(data);
    setUser(user);

    fetchBorrowedBooks(user);
  }


  const fetchBorrowedBooks = async (user) => {
    const yanit = await fetch(`http://localhost:5249/api/Book/borrowed/${user.id}`, {
      method: "GET"

    });

    if (yanit.ok) {
      const kitaplar = await yanit.json();
      setKitaplar2(kitaplar);
      console.log(kitaplar);
    }
  };

  useEffect(() => {
    checkUser();
  },[])
  
  const returnBook = async (id) => {

    const yanit = await fetch(`http://localhost:5249/api/Book/returnBook`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });

    console.log(id);

    if(yanit.ok)
    {
      alert("başarılı");
    }else{
      alert("başarısız");
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
        <span className='text-[#fed478fe]'>{user.username}</span>
            <button onClick={() => {
              localStorage.removeItem("userData");
              nav("/Login");
              }} className='mr-4 text-red-700'>LOGOUT</button>
        </div>
      </nav>

      {/*  underside */}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className=' bg-black  flex flex-col gap-8 items-center w-[320px] min-h-screen'>
          <h2 className='text-white text-2xl font-serif mt-[60px] hover:border-b-2'>BOOK OPERATİONS</h2>
          <Link to={"/BookSearch"} className='bg-[#ff7504fe] w-19 h-9 text-white font-bold text-xs hover:bg-[#fec752] rounded-xl p-2'>BOOK SEARCH</Link>
        </div>
        {/* table */}
        <div className='mt-[70px] ml-[70px] overflow-y-auto max-h-[550px] '>
          <table className='border-2 border-black bg-[#202f4c9a] text-slate-200'>
            <thead className='bg-[#141b295e] text-xs'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[150px] font-serif'>TİTLE</th>
                <th className='py-3  pr-[100px] font-serif'>AUTHOR</th>
                <th className='py-3  pr-[100px] font-serif'>BORROWED DATE</th>
                <th className='py-3  pr-[100px] font-serif'>RETURN DATE</th>
                <th className='py-3  pr-[200px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-white text-sm'>
              {kitaplar2.map((kitap, index) => (
                <tr className='border-b-2 border-black'>
                  <td className='py-3 pl-4 font-medium'>{kitap.title}</td>
                  <td className='py-3 font-thin'>{kitap.bookAuthors.join(",")}</td>
                  <td className='py-3 font-thin'>{kitap.requestDate}</td>
                  <td className='py-3 font-thin'>{kitap.returnDate}</td>
                  <td className='py-2'>
                    <Link to={"/ReadBook?bookId="+kitap.bookId} className='bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] mr-3 '>READ</Link>
                    <button onClick={() => {returnBook(kitap.bookId)}} className='bg-[#f8c558fe] rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>RETURN</button>
                  </td>
                </tr>
              ))}
            {/* return hatalı */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Borrowed
