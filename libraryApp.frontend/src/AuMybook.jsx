import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CreateNewBook from './CreateNewBook';
//özge
const AuMybook = () => {

  const [reqBooks, setreqBooks] = useState([]);
  const [user, setUser] = useState({});
  const nav = useNavigate();
  //request url içine id girdim doğru mu 
  const [showForm, setshowForm] = useState(false);
  const [title, settitle] = useState("");
  const [type, settype] = useState("");
  const [pages, setpages] = useState(0);
  //button değişikliği için
  // const [buttonText, setbuttonText] = useState('Request Publishment');
  // const [buttonColor, setbuttonColor] = useState('#2345');
  // const[isClicked, setisClicked]=useState(false);

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

  const fetchAumybookRequest = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/byauthor/${1}`, {
      method: "GET"
    });

    if (yanit.ok) {
      const reqBooks = await yanit.json();
      setreqBooks(reqBooks);
    }
  }

  useEffect(() => {
    fetchAumybookRequest();
    // checkUser();
  }, [])

  const createbook = async (e) => {
    const newbook = {
      title: title,
      type: type,
      number_of_pages: pages,
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
    setshowForm(!showForm)
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


  // const handleClick = () => {
  //   // setbuttonText('Pending');
  //   // setbuttonColor('#3456');
  //   setisClicked(!isClicked);
  // }

  const changeTitle = async (e) => {
    const newbook = {
      title: title,
    }

    //book author idsi almıyor backend
    const yanit = await fetch(`http://localhost:5249/api/Book/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newbook),
    });

    if (yanit.ok) {
      console.log(" isim değişti");
    }
    else {
      console.log("isim değişmedi");
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
      {/*under side  */}
      <div>


        <button onClick={() => setshowForm(!showForm)} className='bg-[#fdc13ffe] rounded-sm text-white text-base font-medium py-2 px-3 hover:bg-[#ecbe5bb6] ml-[1300px] mt-[15px] '>Create a book</button>
        {/* ekrana verilecek  olan form */}

        {showForm &&
          (<form onSubmit={(e) => {
            e.preventDefault();

          }} className=' fixed inset-0 bg-white h-[450px] w-[300px] rounded-md text-sky-950 text-base 
        tracking-normal p-8 flex flex-col gap-4 border border-blue-300 cursor-pointer place-self-center'>
            <h1 className='text-3xl text-center text-sky-950 font-bold tracking-wider'>CREATE NEW BOOK</h1>

            <div className='flex flex-col justify-center items-center'>
              <label>TİTLE</label>
              <input onChange={e => settitle(e.target.value)} type='text' className='border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
              hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label>TYPE</label>
              <input onChange={e => settype(e.target.value)} type='text' className='flex flex-col border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
              hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <label>PAGES</label>
              <input onChange={e => setpages(e.target.value)} type='text' className='border-b-2 border-blue-300 bg-[#c1c2be33] text-blue-950
              hover:bg-[#9fa19e44] transition-all focus: outline-none'></input>
            </div>

            <button onClick={createbook} className='bg-[#fed478fe] rounded text-white text h-[30px] w-[150px] absolute bottom-[105px]
              place-self-center hover:bg-[#fed478c9] transition-all  '>CREATE</button>
          </form>)}

        <h1 className='text-2xl font-serif pl-[700px]'>MY BOOKS</h1>
        <div className='mt-[20px] ml-[90px] overflow-y-auto max-h-[550px]  '>
          <table className='border-2 border-black bg-[#202f4c9a] text-slate-200'>
            <thead className='bg-[#141b295e] text-xs'>
              <tr className='border-b-2 border-black'>
                <th className='py-3 pl-4 pr-[180px] font-serif'>BOOK NAME</th>
                <th className='py-3  pr-[150px] font-serif'>TYPE OF BOOK</th>
                <th className='py-3  pr-[100px] font-serif'>PAGES</th>
                <th className='py-3  pr-[600px] font-serif'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className='text-white text-sm'>
              {reqBooks.map((book, index) => (
                //status db de dönmemiş publish date dönmememiş.
                <tr className='border-b-2 border-black'>
                  <td className='py-3 pl-4 font-medium'>{book.title}</td>
                  <td className='py-3 font-thin'>{book.type}</td>
                  <td className='py-3 font-thin'>{book.number_of_pages}</td>
                  <td className='py-2'>
                    {/* name input */}
                    <div className='flex flex-row mb-2'>
                      <input onChange={e => settitle(e.target.value)} type='text' className='  w-60 h-8 bg-gray-300 p-2 rounded-sm text-black' placeholder='Enter new name' />
                      <button onClick={changeTitle} className='bg-black rounded-sm text-xs font-medium py-2 px-3 hover:bg-neutral-900 mr-3 '>CHANGE</button>
                    </div>

                    <Link to={"/WritePage?bookId" + book.id} className='bg-[#0f123c] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#0f123cd1] mr-3 '>WRITE</Link>
                    <button onClick={PublishRequest} className='bg-[#0f123c] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#0f123cd1] mr-3 '> Request Publishment </button>
                    <Link to={"/ReadBook?bookId=" + book.id} className='bg-[#fdc13ffe] rounded-sm text-xs font-medium py-2 px-3 hover:bg-[#ecbe5bb6] mr-3 '>READ</Link>
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
