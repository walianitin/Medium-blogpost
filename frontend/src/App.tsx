import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
// import Blog from "./pages/Blog"
import Blogs from "./pages/Blog"

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/blog" element={<Blogs/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

  )
      
  
}

export default App
