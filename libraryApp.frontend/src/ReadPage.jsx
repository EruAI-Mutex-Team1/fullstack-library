import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//seçili kitap okunacak mı
const ReadPage = () => {

  const [kitapAdi, setKitapAdi] = useState("");
  const [sayfalar, setSayfalar] = useState([]);

  const kitabiAl = async () => {
    const yanit = await fetch(`http://localhost:5249/api/Book/${2}`, {
      method: "GET",
    });

    if (yanit.ok) {
      const kitap = await yanit.json();
      setKitapAdi(kitap.title);
      setSayfalar(kitap.pages);
    }
  }

  useEffect (()=> {
   kitabiAl();
  }, []);

  return (
    <div>
        <nav className='bg-black text-white h-24 flex items-center justify-between'>
        <div className=' flex flex-col gap-1 ml-10'>
          <div className=' font-extrabold text-4xl'>LIBRARY</div>
          <Link to="/Home" className='text-l font-thin' >HOME</Link>
        </div>
        <div className='flex gap-4 text-sm'>
          <span className='text-[#fed478fe]'>USER NAME</span>
          <Link to="/Login" className='mr-4 text-red-700'>LOGOUT</Link>
        </div>
      </nav>

      <div className='bg-hero-pattern h-screen flex flex-col items-center gap-5 '>
        <div className='bg-[#fdc13ffe] h-10 w-auto p-1 rounded-md flex items-center'>
       <h2 className='text-l font-serif text-black hover:border-b-2'>{kitapAdi}</h2>
       </div>
        <section className="bg-slate-200 p-6 h-[600px] w-[1010px] rounded-lg shadow-md  overflow-y-scroll">
          {sayfalar.map((sayfa,index) => (
          <p className="text-lg leading-relaxed"> {sayfa} </p>
          ))}
        </section>

        <Link to="/BorrowedBooks" className='bg-[#fdc13ffe] py-2 px-3 rounded-sm hover:bg-[#f6ca6beb] h-10 w-auto'>Go Back</Link> 
        {/* go back= borromed book a git */}
           
      </div>

    </div>
  )
}

export default ReadPage