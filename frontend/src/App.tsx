import { BrowserRouter ,Route,Routes} from "react-router-dom"
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/write" element={<Write/>}/>
        {/* <Route path="/home" element={<HomePage/>}/> */}
       
      </Routes>
    </BrowserRouter>
    </>

  )
      
  
}

export default App
