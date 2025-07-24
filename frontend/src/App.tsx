import { BrowserRouter ,Route,Routes, Navigate } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/Signup"

// import HomePage from "../src/pages/HomePage"
import Write from "./pages/Write"
import Home from "./pages/HomePage"
import Blogs from "./pages/Blogs"
function App() {

  return (
    <>
    
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Blogs/>}/>
        <Route path="/write" element={<Write/>}/>
        {/* <Route path="/home" element={<HomePage/>}/> */}
       
      </Routes>
    </BrowserRouter>
    </>

  )
      
  
}

export default App
