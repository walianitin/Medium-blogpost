import { BrowserRouter ,Route,Routes} from "react-router-dom"
import SignIn from "./components/Signup";  // Note the capital S and I
import SignUp from "./components/Signup";  // Note the capital S and I
import DashBoard from "./components/pages/DashBoard"
import Header from "./components/Header"
import Footer from "./components/footer";
import Home from "./components/HomePage";
import Write from "./components/pages/Write";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<DashBoard />} />
        <Route path="/write" element={<Write/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
