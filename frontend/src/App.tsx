import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Signup from "./pages/signup"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup></Signup>}/>
    {/* <Route path="/signin" element={<Signin/>}></Route> */}
    {/* <Route path="/blog" element={<Blogs/>}></Route> */}
    </Routes>
    </BrowserRouter>
    </>

  )
      
  
}

export default App
