
// import WritePage2 from "./WritePage2"
import AccRequest from "./AccRequest"
import AubookRequest from "./AubookRequest"
import AuMybook from "./AuMybook"
import Booksearch from "./Booksearch"
import Borrowed from "./Borrowed"
import Changerole from "./Changerole"
import Login from "./Login"
import Punishing from "./Punishing"
import BorrowRequest from "./BorrowRequest"
import Messaging from "./Messaging"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import InboxPage2 from "./InboxPage2"
import WritePage2 from "./WritePage2"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Booksearch/> }></Route>
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
        <Route path="Changerole" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Changerole/>
          </div>
        }></Route>
         <Route path="AccRequest" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <AccRequest/>
          </div>
        }></Route>
         <Route path="AubookRequest" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <AubookRequest/>
          </div>
        }></Route>
         <Route path="AuMybook" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <AuMybook/>
          </div>
        }></Route>
         <Route path="BorrowRequest" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <BorrowRequest/>
          </div>
        }></Route>
         <Route path="InboxPage2" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <InboxPage2/>
          </div>
        }></Route>
         <Route path="Login" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Login/>
          </div>
        }></Route>
         <Route path="Messaging" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Messaging/>
          </div>
        }></Route>
         <Route path="Punishing" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Punishing/>
          </div>
        }></Route>
        <Route path="WritePage2" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <WritePage2/>
          </div>
        }></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
