import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const InboxPage2 = () => {

  const [mesajlar2, setmesajlar2] = useState([]);
  const [ShowedTitle, setShowedTitle] = useState("");
  const [ShowedContent, setShowedContent] = useState("");
  const [ShowedSender, setShowedSender] = useState("");
  const [Showedadate, setShowedDate] = useState("");

  const [user, setUser] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    // const data = localStorage.getItem("userData");
    // if (data === null) {
    //   nav("/login");

    // }

    // const user = JSON.parse(data);
    // setUser(user);
    // console.log(user);
    fetchmessages(user);
  }, []);

  const fetchmessages = async (user) => {
    const yanit = await fetch(`http://localhost:5249/api/Message/getInbox/${user.id}`, {
      method: "GET"

    });

    if (yanit.ok) {
      const mesajlar = await yanit.json();
      setmesajlar2(mesajlar);
      console.log(mesajlar)
    }
  };

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


      <div className='bg-black flex flex-row justify-between'>
        <form className='flex flex-col items-center bg-slate-300 h-screen space-x-5 ml-3 mt-4 p-10 pl-5'>
          <h2 className='text-xl text-black font-bold rounded mx-3 p-3'>MESSAGE OPTIONS </h2>
          <div className='flex flex-col'>
            <Link to="/Messaging" className='bg-[#fcb92afe] hover:bg-[#fec752] text-white font-semibold py-2 px-2 rounded  mt-10'>Send Message</Link>
            <div className='bg-[#fcb92afe] text-white font-semibold py-2 px-4 rounded  mt-10'>View Inbox</div>
          </div>
        </form>

        <div className="container p-4 w-1/2">
          <form className="bg-slate-300 space-x-5 h-screen">
            <label className="flex-auto text-md font-bold ml-10 mt-5">[1 Unread Message]</label>
            <ul className="p-4 space-y-2 overflow-y-auto h-screen">
              {mesajlar2.map((mesaj, index) => (
                <li onClick={() => {
                  setShowedTitle(mesaj.title);
                  setShowedContent(mesaj.content);
                  setShowedSender(mesaj.senderName);
                  setShowedDate(mesaj.sendingDate);

                  if (!mesaj.isRead) {
            const updatedMessages = mesajlar2.map((m) => {
                if (m.id === mesaj.id) {
                    return { ...m, isRead: true }; // Okundu olarak güncelle
                }
                return m;
            });

            // Mesajları güncelle
            setMesajlar2(updatedMessages);

            
                }}} className="p-4 rounded shadow">
                  <article className='p-4 flex justify-between items-center'>
                    <div>
                      <h3 className="text-gray-600 font-semibold">{mesaj.title}</h3>
                      <h3 className="text-gray-400 font-semibold">A message from {mesaj.senderName}</h3>
                      <p className="text-[#f0a606fe]">{mesaj.content.substring(0, 10)}</p>
                    </div>
                    <div className={(mesaj.isRead ? "bg-green-500 " : "bg-red-500 ") + "text-white font-bold py-2 px-4 rounded"}>
                      {(mesaj.isRead ? "Read" : "Unread")}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </form>
        </div>
        <div className=' bg-slate-300 space-x-2 w-full p-4 pb-0 h-screen mt-4 flex flex-col space-y-2'>
          <form className='bg-slate-500 h-7 rounded flex flex-auto  justify-between '>
            <h3 className="  text-black font-semibold ml-2 mt-2">{ShowedTitle}</h3>
            <h3 className="  text-black font-semibold ml-4 mt-2">{ShowedSender + " " + Showedadate}</h3>
          </form>
          <form className='bg-slate-500 h-5/6 flex flex-auto'>
            <h3 className="  text-black font-semibold ml-4 mt-2">{ShowedContent}</h3>
          </form>
        </div>
      </div>

    </div>
  )
}

export default InboxPage2