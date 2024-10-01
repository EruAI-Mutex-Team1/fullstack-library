import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//özge
const AuMybook = () => {

  const [reqBooks, setreqBooks] = useState([]);
  //request url içine id girdim doğru mu acaba
  const AumybookRequest = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/byauthor/${1}`, {
      method: "GET"
    });

    if (yanit.ok) {
      const reqBooks = await yanit.json();
      setreqBooks(reqBooks);
    }
  }
  useEffect(() => {
    AumybookRequest();
  }, [])

  const createbook = async () => {
    const newbook = {
      title: "özge",
      type: "özge1",
      number_of_pages: 2,
      bookAuthors: [
        "özgeeee"
      ]
    }

    //book author idsi almıyor backend
    const yanit = await fetch(`http://localhost:5249/api/Book/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newbook),
    });
    if (yanit.ok) {
      console.log("yeni kitap oluşturuldu");
    }
    else {
      console.log("yeni kitap oluşturulamadi");
    }
  }
  // //BU FONKSİYON DA ÇALIŞMIYOR :(((((
  // const AddPage = async () => {
  //   const Page = {
  //     bookId: 0,
  //     content: "string",
  //     pageNumber: 0,
  //   }
  //   const yanit = await fetch(`http://localhost:5249/api/Book/5/addpage`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringfy(Page),
  //   });
  //   if (yanit.ok) {
  //     console.log("yeni sayfa eklendi");
  //   }
  //   else {
  //     console.log("yeni sayfa eklenemedi");
  //   }

  // }

  const PublishRequest = async () => {
    const request = {
      title: "string",
      type: "string",
      number_of_pages: 0,
      requestDate: {
        year: 0,
        month: 0,
        day: 0,
        dayOfWeek: 0
      },
      confirmation: true,
      pending: true,
      user: [
        string
      ],
      book: [
        "string"
      ]
    }

    const yanit = await fetch(`http://localhost:5249/api/Book/requestpublishment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringfy(request),
    });
    if (yanit.ok) {
      console.log(" talep gönderildi");
    }
    else {
      console.log("talep gönderilemedi");
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
          <span className='text-[#fed478fe]'>AUTHOR NAME</span>
          <Link to="/Login" className='mr-4 text-red-700 '>LOGOUT</Link>
        </div>
      </nav>
      {/*under side  */}
      <div>


        <button onClick={createbook} className='bg-[#fdc13ffe] rounded-sm text-white text-base font-medium py-2 px-3 hover:bg-[#ecbe5bb6] ml-[1300px] mt-[15px] '>Create a book</button>
        <h1 className='text-2xl font-serif pl-[700px]'>MY BOOKS</h1>
        <div className='mt-[20px] ml-[90px] overflow-y-auto max-h-[550px]  '>
          <table className='border-2 border-black bg-[#202f4c9a] text-slate-200'>
            <thead className='bg-[#141b295e] text-xs'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[180px] font-serif'>BOOK NAME</th>
                <th className='py-3  pr-[150px] font-serif'>STATUS</th>
                <th className='py-3  pr-[100px] font-serif'>PUBLISH DATE</th>
                <th className='py-3  pr-[600px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-white text-sm'>
              {reqBooks.map((book, index) => (
                //status db de dönmemiş publish date dönmememiş.
                <tr className='border-b-2 border-black'>
                  <td className='py-3 pl-4 font-medium'>{book.title}</td>
                  <td className='py-3 font-thin'>CAN SEND REQUEST</td>
                  <td className='py-3 font-thin'>24/4/24</td>
                  <td className='py-2'>
                    {/* name input */}
                    <div className='flex flex-row mb-2'>
                      <input type='text' className='  w-60 h-8 bg-gray-300 p-2 rounded-sm text-black' placeholder='Enter new name' />
                      {/* <button onClick={AddPage} className='bg-black rounded-sm text-xs font-medium py-2 px-3 hover:bg-neutral-900 mr-3 '>CHANGE</button> */}
                    </div>

                    <Link to="/WritePage" className='bg-[#0f123c] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#0f123cd1] mr-3 '>WRITE</Link>
                    <button onClick={PublishRequest} className='bg-[#0f123c] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#0f123cd1] mr-3 '>Request Publishment</button>
                    <Link className='bg-[#fdc13ffe] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#ecbe5bb6] mr-3 '>READ</Link>
                    {/* create:create change : add page, write:router writepage2???? req:req  read: router read page miii */}
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

export default AuMybook
