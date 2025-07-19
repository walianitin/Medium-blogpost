import { BrowserRouter ,Route,Routes} from "react-router-dom"
import SignIn from "./components/Signup";  // Note the capital S and I
import SignUp from "./components/Signup";  // Note the capital S and I
import DashBoard from "./components/pages/DashBoard"
import Header from "./components/Header"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
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
