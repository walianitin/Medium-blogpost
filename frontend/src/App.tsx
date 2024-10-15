import { BrowserRouter ,Routes,Route} from "react-router-dom"
import Signup from "./pages/signup"
import Signin from "./pages/signin"

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

  )
      
  
}

export default App
