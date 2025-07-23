import { BrowserRouter ,Route,Routes, Navigate } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/Signup"
import DashBoard from "../src/pages/Explore"
// import HomePage from "../src/pages/HomePage"
import Write from "./pages/Write"

function App() {

  return (
    <>
    
    <BrowserRouter>
   
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/write" element={<Write/>}/>
        <Route path="/" element={<DashBoard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route path="/home" element={<HomePage/>}/> */}
       
      </Routes>
    </BrowserRouter>
    </>

  )
      
  
}

export default App
