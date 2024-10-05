import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

//seçili kitap okunacak mı
const ReadPage = () => {

 // const [book, setBook] = useState([]);
  const [kitapAdi, setKitapAdi] = useState("");
  const [sayfalar, setSayfalar] = useState([]);
  const [numOfPages, setNumOfPages] = useState([]);
  const [currentpage, setcurrentpage] = useState([]);
  // const [nextpage, setnextpage] = useState([]);
  // const [prevpage, setprevpage] = useState([]);

  // const pages = [
  //   "Chapter 1: Once upon a time...",
  //   "Chapter 2: The journey continues...",
  //   "Chapter 3: A twist in the tale...",
  //   "Chapter 4: The grand finale...",
  //   "Chapter 5: The story unfolds...",
  //   "Chapter 6: The surprising conclusion...",
  //   "Chapter 7: The surprising conclusion..."
  // ];

  const bookId = new URLSearchParams(location.search).get("bookId");

  const kitabiAl = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/${bookId}`, {
      method: "GET",
    });

    if (yanit.ok) {
       const book = await yanit.json();
      // setKitapAdi(kitap.title);
      // setSayfalar(kitap.pages);
       const pages = Array.from({ length: book.number_of_pages }, (_, i) => i);
         setNumOfPages(pages);
         setPageNum(book.number_of_pages + 1);
    }
        const nextpage = () => {
          if (currentpage < numOfPages - 2) {
            setcurrentpage(currentpage + 2);
          }
        };

        const prevpage = () => {
          if (currentpage > 0) {
            setcurrentpage(currentpage - 2);
          }
        };

        const searchpage = () => {
          if (currentpage < numOfPages - 2) {
            setcurrentpage(e);
          }
        };

      

    const [user, setUser] = useState({});
    const nav = useNavigate();
  

  useEffect (()=> {
   // checkuser ı useeffect içinde çalıştırdığın için sayfalar sende görünmüyor.
    const data = localStorage.getItem("userData");
      if(data === null){
        nav("/Login");     
      }
      const user = JSON.parse(data);
      setUser(user);     
      console.log(user);

    kitabiAl();
    prevpage();
    nextpage();
  }, []);

  return (
    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
        <div className=' flex flex-col gap-1 ml-10'>
          <div className=' font-extrabold text-4xl'>LIBRARY</div>
          <Link to="/Home" className='text-l font-thin' >HOME</Link>
        </div>
        <div className='flex gap-4 text-sm'>
        <span className='text-[#fed478fe]'>{user.name + " " +user.surname}</span>
            <button onClick={() => {
              localStorage.removeItem("userData");
              nav("/Home");
              }} className='mr-4 text-red-700'>LOGOUT</button>
        </div>
      </nav>

      <div className='bg-hero-pattern h-screen flex flex-col items-center gap-5 '>
      {/* <div className="flex justify-center space-x-4 my-4">
        {pages.map((_, index) => (
          <span
            key={index}
            className={`px-2 py-1 border ${
              index === currentpage || index === currentpage + 1
                ? "border-blue-500 text-blue-500 font-bold"
                : "border-gray-400 text-gray-400"
            } rounded`}
          >
            {index + 1}
          </span>
        ))}
      </div> */}
        <div className='bg-[#fdc13ffe] h-10 w-auto p-1 rounded-md flex items-center mr-[210px]'>
       <h2 className='text-l font-serif text-black hover:border-b-2 '>{bookId.title}</h2>
       </div>
       <div className='flex justify-between'>
       <button
            onClick={prevpage}
            className={`px-4 py-2 rounded-lg bg-[#fdc13ffe] text-black font-semibold h-10 mt-[300px] mr-2 ${
              currentpage === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentpage === 0}
          >
          <GrCaretPrevious />
          </button>
        <form className="bg-[#f2e6c9fe] p-6 h-[600px] w-[500px] rounded-l-md shadow-md">
          {/* {sayfalar.map((sayfa,index) => (
          <p className="text-lg leading-relaxed"> {sayfa} </p>
          ))} */}
          <p className="text-lg"></p>
          {book.pages[currentpage] && (
              <p className="text-lg mb-6">{book.pages[currentpage]}</p>
            )}
        </form>
        <form className='bg-black h-[600px] w-[8px]'></form>
        
        <form className="bg-[#f2e6c9fe] p-6 h-[600px] w-[500px] rounded-r-md shadow-md">
        {book.pages[currentpage + 1] ? (
              <p className="text-lg">{pages[currentpage + 1]}</p>
            ) : (
              <p className="text-lg ">END</p> // Eğer sayfa yoksa
            )}
          </form>
          
        <button
            onClick={nextpage}
            className={`px-4 py-2 rounded-lg bg-[#fdc13ffe] text-black font-semibold h-10 mt-[300px] ml-2 ${
              currentpage === numOfPages - 1 ? "opacity-50 cursor-not-allowed": ""
            }`}
            disabled={currentpage >= numOfPages - 1}
          >
            <GrCaretNext />
          </button>
          <div className='flex flex-col'>
          <label className='bg-[#edc05f] text-black flex items-center w-15 mt-6 h-auto'>Search Page</label>
          <input onChange={e=>setcurrentpage(e.target.value-1)} className='bg-[#f4eee2eb] py-2 px-3 rounded-sm hover:bg-[#dad2c0eb] h-10 w-auto'/> 
          <Link to="/BorrowedBooks" className='bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb] h-10 w-auto mt-[400px]'>Go Borrowed Books</Link>      
          <Link to="/AuMyBook" className='bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb] h-10 w-auto'>Go My Books</Link>
        </div></div>
       <div className='flex flex-row justify-between gap-3 mr-[210px]'>

          
       
       {/* {(user.roleName === "author") && (
               <Link to="/AuMyBook" className='bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb] h-10 w-auto'>Go My Books</Link>
            )} */}
        </div>    
      </div>

    </div>
  )
}
}
export default ReadPage