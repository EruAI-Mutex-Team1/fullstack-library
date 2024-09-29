import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Borrowed = () => {
  const [kitaplar2, setKitaplar2] = useState([]);

  const fetchBorrowedBooks = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/borrowed/23`, {
      method: "GET"

    });

    if (yanit.ok) {
      const kitaplar = yanit.json();
      setKitaplar2(kitaplar);
    }
  };

  useEffect(() => {
    fetchBorrowedBooks();

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

      {/*  underside */}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className=' bg-black  flex flex-col gap-8 items-center w-[320px] min-h-screen'>
          <h2 className='text-white text-2xl font-serif mt-[60px] hover:border-b-2'>BOOK OPERATİONS</h2>
          {/* search bar */}
          <div className=' flex item-center'>
            <input type='text' className='border-2  w-50 h-9 bg-gray-300 p-2 rounded-l-full focus:border-[#ffc13bf4]' placeholder='  search book...' />
            <button className='bg-[#fcb92afe] w-20 h-9 text-white font-bold text-xs hover:bg-[#fec752] rounded-r-full'>SEARCH</button>
          </div>
          <button className='bg-[#fcb92afe] w-19 h-9 text-white font-bold text-xs hover:bg-[#fec752] rounded-xl p-2'>VİEW BORROWED BOOKS</button>
        </div>
        {/* table */}
        <div className='mt-[70px] ml-[70px] overflow-y-auto max-h-[550px] '>
          <table className='border-2 border-black bg-[#202f4c9a] text-slate-200'>
            <thead className='bg-[#141b295e] text-xs'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[150px] font-serif'>TİTLE</th>
                <th className='py-3  pr-[100px] font-serif'>AUTHOR</th>
                <th className='py-3  pr-[100px] font-serif'>PUBLISH DATE</th>
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
                  <td className='py-3 font-thin'>0/0/0</td>
                  <td className='py-3 font-thin'>0/0/0</td>
                  <td className='py-3 font-thin'>00/0/0</td>
                  <td className='py-2'>
                    <Link to="/BookSearch" className='bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] mr-3 '>READ</Link>
                    <button className='bg-[#f8c558fe] rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>RETURN</button>
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

export default Borrowed
