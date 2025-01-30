
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

// Pages
import HomePage from "./pages/home/home.page"
import LoginPage from "./pages/login/login.page"
import SignUpPage from "./pages/sign-up/sign-up.page"

// Utilities
import {auth} from './config/firebase.config'

const App = () => {

  // Essa função é chamada sempre que o usuário fazer login na Firebase.
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter> 
  )
} 

export default App
