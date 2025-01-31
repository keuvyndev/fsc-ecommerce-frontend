import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utilities
import { userContext } from "../../context/user.context";

// Components
import Header from "../header/header.component";
import Loading from "../loading/loading.component";

interface AuthenticationPageProps{
   children: React.ReactNode
}

const AuthenticationGuard:React.FC<AuthenticationPageProps> = ({children}) => {

   const {isAuthenticated} = useContext(userContext)
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