
import WritePage2 from "./WritePage2"
import AccRequest from "./AccRequest"
import AubookRequest from "./AubookRequest"
import AuMybook from "./AuMybook"
import Booksearch from "./Booksearch"
import Borrowed from "./Borrowed"
import Changerole from "./Changerole"
import Login from "./Login"
import MemRequest from "./BorrowRequest"
import Punishing from "./Punishing"
import BorrowRequest from "./BorrowRequest"
import Messaging from "./Messaging"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import InboxPage2 from "./InboxPage2"
import Register2 from "./Register2"
import HomePage from "./HomePage"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="bg-hero-pattern min-h-screen grid">  
          <HomePage /> 
        </div>                                                    //home default giriş
      }></Route>
      <Route path="Home" element={
          <div className="bg-hero-pattern min-h-screen grid">  
          <HomePage /> 
        </div>                                                    //home urlden giriş
      }></Route>
        <Route path="BookSearch" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Booksearch />
          </div>
        }></Route>
        <Route path="BorrowedBooks" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Borrowed />
          </div>
        }></Route>
        <Route path="BorrowRequest" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <BorrowRequest />
          </div>
        }></Route>
        <Route path="Register" element={
          <div className="bg-hero-pattern min-h-screen grid">
            <Register2 />
          </div>                                                   //register
        }></Route>
        <Route path="Login" element={
          <div className="bg-hero-pattern min-h-screen grid">
            <Login />
          </div>                                                    //login
        }></Route>
        <Route path="Inbox" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <InboxPage2 />
          </div>
        }></Route>
        <Route path="ChangeRole" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Changerole />
          </div>
        }></Route>
        <Route path="Messaging" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Messaging />
          </div>
        }></Route>
        <Route path="AuMybook" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <AuMybook />
          </div>
        }></Route>
        <Route path="Writebook" element={      
            <WritePage2 />    
        }></Route>
        <Route path="Punishing" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Punishing />
          </div>
        }></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
