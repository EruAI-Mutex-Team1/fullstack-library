
// import WritePage2 from "./WritePage2"
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

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Booksearch/>}></Route>
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
        <Route path="ChangeRole" element={
          <div className="bg-[#d8d8d8] min-h-screen grid">
            <Changerole/>
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
