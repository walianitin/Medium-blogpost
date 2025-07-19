import { BrowserRouter ,Route,Routes} from "react-router-dom"
import SignIn from "./components/signin"
import SignUp from "./components/Signup"
import DashBoard from "./components/pages/DashBord"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
    </>

  )
      
  
}

export default App
