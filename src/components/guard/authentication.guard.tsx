import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utilities

// Components
import Header from "../header/header.component";
import Loading from "../loading/loading.component";
import { useSelector } from "react-redux";

interface AuthenticationPageProps{
   children: React.ReactNode
}

const AuthenticationGuard:React.FC<AuthenticationPageProps> = ({children}) => {

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const {isAuthenticated} = useSelector((rootReducer: any) => rootReducer.userReducer)
   const navigate = useNavigate()

   useEffect(() => {
      if(!isAuthenticated){
         setTimeout(() =>{
            navigate('/login')
         }, 3000)
      }
   }, [isAuthenticated])

   if(!isAuthenticated){
      return (
         <>
            <Header />
            <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes ..."/>
         </>
      )
   }

   return <>{children}</>
}
 
export default AuthenticationGuard;