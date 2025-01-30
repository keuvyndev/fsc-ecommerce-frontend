
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { collection, getDocs, query, where } from "firebase/firestore"

// Pages
import HomePage from "./pages/home/home.page"
import LoginPage from "./pages/login/login.page"
import SignUpPage from "./pages/sign-up/sign-up.page"

// Utilities
import {auth, db} from './config/firebase.config'
import { userContext } from "./context/user.context"
import { useContext, useState } from "react"

const App = () => {

  const [isInitializing, setIsInitializing] = useState(true);

  const { isAuthenticated, loginUser, logoutUser } = useContext(userContext)

  // Essa função é chamada sempre que o usuário fazer login na Firebase.
  onAuthStateChanged(auth, async (user) => {
    
    // Caso o usuário esteja autenticado, mas não possua dados de usuário da Firebase: Desloga
    const isSigninOut = isAuthenticated && !user
    if(isSigninOut){
      logoutUser()
      return setIsInitializing(true)
    }

    // Caso o usuário não esteja autenticado, mas possua dados de usuário da Firebase: Loga
    const isSigningIn = !isAuthenticated && user
    if(isSigningIn){
      const querySnapshot = await getDocs(query(collection(db,'users'), where('id', '==',user.uid)))
      const userFromFirestore = querySnapshot.docs[0]?.data()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      loginUser(userFromFirestore as any)
      return setIsInitializing(false) 
    }

    return setIsInitializing(false) 
  })

  // Garante que a aplicação só será mostrada após inicializar
  if (isInitializing) return null;

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
