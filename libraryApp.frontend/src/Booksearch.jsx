import React, { useState } from 'react'
import { TbBrandD3 } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const Booksearch = () => {

  const [kitapIsmi, setKitapIsmi] = useState("");
  const [kitaplar, setKitaplar] = useState([]);

  const handleSearchClick = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/bytitle/${kitapIsmi}`, {
      method: "GET",
    });

    if (yanit.ok) {
      const kitaplar = await yanit.json();
      setKitaplar(kitaplar);
      console.log(kitaplar);
    }

  };

  return (
    <div>
      <nav className='bg-black text-white h-24 flex items-center justify-between'>
        <div className=' flex flex-col gap-1 ml-10'>
          <div className=' font-extrabold text-4xl'>LIBRARY</div>
          <a href='#' className='text-l font-thin hover:text-[#fcb92afe]' >HOME</a>
        </div>

        <div className='flex gap-4 text-sm'>
          <span className='text-[#fed478fe]'>MANAGER NAME</span>
          <a href='#' className='hover:border-b-2 ' >REPORTS</a>
          <a href='#' className='hover:border-b-2'>SETTINGS</a>
          <a href='#' className='mr-4 hover:text-red-700'>LOGOUT</a>
        </div>
      </nav>
      {/*  underside */}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className=' bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
          <h2 className='text-white text-2xl font-serif mt-[60px] hover:border-b-2'>BOOK OPERATİONS</h2>

          {/* search bar */}
          <div className=' flex item-center'>
            <input onChange={e => setKitapIsmi(e.target.value)} type='text' className='border-2  w-50 h-9 bg-gray-300 p-2 rounded-l-full focus:border-[#ffc13bf4]' placeholder='  search book...' />
            <button onClick={handleSearchClick} className='bg-[#fcb92afe] w-20 h-9 text-white font-bold text-xs hover:bg-[#fec752] rounded-r-full'>SEARCH</button>
          </div>
          <Link className='bg-[#fcb92afe] w-19 h-9 text-white font-bold text-xs hover:bg-[#fec752] rounded-xl p-2' to="/BorrowedBooks">VİEW BORROWED BOOKS</Link>
        </div>
        {/* table */}
        <div className='mt-[70px] ml-[70px] overflow-y-auto max-h-[550px] '>
          <table className='border-2 border-black bg-[#202f4c9a] text-slate-200'>
            <thead className='bg-[#141b295e] text-sm'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[200px] font-serif'>TITLE</th>
                <th className='py-3  pr-[100px] font-serif'>TYPE</th>
                <th className='py-3  pr-[150px] font-serif'>AUTHORS</th>
                <th className='py-3  pr-[270px] font-serif '>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-white text-sm'>
              {
                kitaplar.map((kitap, index) => (
                  <tr className='border-b-2 border-black'>
                    <td className='py-3 pl-4 font-medium'>{kitap.title}</td>
                    <td className='py-3 font-thin'>{kitap.type}</td>
                    <td className='py-3 font-thin'>{kitap.bookAuthors.join(", ")}</td>
                    <td className='py-2'>
                      <Link className='bg-[#0f123c] rounded-sm text-xs font-medium p-2 hover:bg-[#0f123cd1] mr-3 ' to={"/ReadBook?bookId=" + kitap.id}>READ THE BOOK</Link>
                      <button className='bg-[#f8c558fe] rounded-sm text-xs font-bold p-2 hover:bg-[#ecbe5bb6]'>BORROW</button>
                      </td>
                  </tr>
                ))
              }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Booksearch
