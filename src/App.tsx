
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

// Pages
import HomePage from "./pages/home/home.page"
import LoginPage from "./pages/login/login.page"
import SignUpPage from "./pages/sign-up/sign-up.page"
import ExplorePage from "./pages/explore/explore.page"

// Utilities
import {auth, db} from './config/firebase.config'
import { userConverter } from "./converters/firestore.converters"
import { loginUser, logoutUser } from "./store/toolkit/user/user.slice"
import { useAppSelector } from "./hooks/redux.hooks"

// Components
import Loading from "./components/loading/loading.component"
import CategoriesDetailsPage from "./pages/categories-details/categories-details.page"
import Cart from "./components/cart/cart.component"
import CheckoutPage from "./pages/checkout/checkout.page"
import AuthenticationGuard from "./components/guard/authentication.guard"
import PaymentConfirmationPage from "./pages/payment-confirmation/payment-confirmation"

const App = () => {

  const [isInitializing, setIsInitializing] = useState(true);

  const dispatch = useDispatch();
   
  const {isAuthenticated} = useAppSelector((rootReducer) => rootReducer.userReducer)

  useEffect(() => {
    // Essa função é chamada sempre que o usuário fazer login na Firebase.
    onAuthStateChanged(auth, async (user) => {
      
      // Caso o usuário esteja autenticado, mas não possua dados de usuário da Firebase: Desloga
      const isSigninOut = isAuthenticated && !user
      if(isSigninOut){
        dispatch(logoutUser())
        return setIsInitializing(true)
      }

      // Caso o usuário não esteja autenticado, mas possua dados de usuário da Firebase: Loga
      const isSigningIn = !isAuthenticated && user
      if(isSigningIn){
        const querySnapshot = await getDocs(query(collection(db,'users').withConverter(userConverter), where('id', '==',user.uid)))
        const userFromFirestore = querySnapshot.docs[0]?.data()
        dispatch(loginUser(userFromFirestore))
        return setIsInitializing(false) 
      }

      return setIsInitializing(false) 
    })
  },[isAuthenticated, dispatch])

  // Garante que a aplicação só será mostrada após inicializar
  if (isInitializing) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/category/:id' element={<CategoriesDetailsPage />} />
        <Route path='/payment-confirmation' element={<PaymentConfirmationPage />} />

        {/* Protege a rota de Checkout deixando-o como componente filho */}
        <Route path='/checkout' element={<AuthenticationGuard><CheckoutPage /></AuthenticationGuard>} />

      </Routes>

      <Cart />
    </BrowserRouter> 
  )
} 

export default App
