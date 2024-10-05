import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
//Zeh
const Messaging = () => {

  const [users, setusers] = useState([]);
  const [SelecteduserId, setSelectedUserId] = useState(0);
  const [content, setcontent] = useState("");
  const [title, settitle] = useState("");
  const [senderId, setsenderId] = useState("");
  const [receiverId, setreceiverId] = useState("");

  const [user, setUser] = useState({});
  const nav = useNavigate();

  const fetchgetuser = async (user) => {
    const yanit = await fetch(`http://localhost:5249/api/User/getuserformessaging/${user.roleId}`, {
      method: "GET",
    });

    if (yanit.ok) {
      const users = await yanit.json();
      console.log(users);
      setusers(users);
    }
  };

  useEffect(() => {
    // const data = localStorage.getItem("userData");
    // if(data === null){
    //   nav("/login");
    // }

    // const user = JSON.parse(data);
    // setUser(user); 
    // console.log(user);
    fetchgetuser(user);
  },[]);

  const Mesajekle = async (e) => {
e.preventDefault();
    const mesaj = {
      title: title, 
      content: content,
      senderId: user.id,
      receiverId: SelecteduserId,
    }

    const yanit = await fetch(`http://localhost:5249/api/Message/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mesaj),
    });

    if (yanit.ok) {
      console.log("mesaj gönderildi");
      alert ("Mesajınız gönderildi.");
    } else {
      console.log("mesaj gönderilemedi");
      alert ("Mesajınız gönderilemedi.");
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


      {/* underside*/}
      <div className='flex flex-row'>
        {/* sidebar */}
        <div className='text-white bg-black  flex flex-col gap-8 items-center w-[300px] min-h-screen'>
          <h1 className='text-xl font-serif mt-[60px] hover:border-b-2'>MESSAGE OPERATİONS</h1>
          <button  className=' bg-[#fcb92afe] py-3 px-3 rounded-sm hover:bg-[#fec752] mt-[30px] w-[200px]'>SEND MESSAGE </button>
          <Link to="/Inbox" className=' bg-[#fcb92afe] py-3 px-3 rounded-sm hover:bg-[#fec752] w-[200px]'>VİEW INBOX</Link>

        </div>
        <form className='bg-slate-500 w-[1500px] h-[780px] flex flex-row'>
          <div className='w-[300px] h-[780px] border-r-2 border-black flex flex-col items-center gap-3 pt-[70px]'>
            <label className='font-normal'>SELECT RECEİVER</label>
            {/* get userfor messaging */}
            <select onChange={e => setSelectedUserId(e.target.value)} className='w-[200px] h-7 rounded-sm'>
            <option value="" >Select an user</option>
               {users.map((user, index) => (
            <option value={user.userId} >{user.fullname + " - " + user.roleName}</option>
            ))}
            </select>
          </div>
          <div className=' flex flex-col ml-[140px] mt-[70px]'>
            {/* post sendmessage */}
            <label>TITLE</label>
            <input onChange={e => settitle(e.target.value)} type='text' className='w-[700px] h-7 rounded-sm '/>
            <label>YOUR MESSAGE</label>
            <textarea onChange={e => setcontent(e.target.value)} type='text' className='w-[700px] h-[450px] rounded-sm'></textarea>
            <button onClick={Mesajekle} className='bg-[#fcb92afe] text-white font-medium rounded-sm px-3 py-2  hover:bg-[#fec752] w-[80px] ml-[620px] mt-[20px]'>SEND</button>
          </div>


        </form>
      </div>

    </div>
  )
}

export default Messaging
