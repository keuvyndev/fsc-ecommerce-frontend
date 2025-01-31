import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";

// Utilities
import { auth } from "../../config/firebase.config";
import { userContext } from "../../context/user.context";

// Styles
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.styles";

const Header = () => {  

   const { isAuthenticated } = useContext(userContext)

   const navigate = useNavigate();

   const handleLoginClick = () => {
      navigate('/login')
   }

   const handleSignUpClick = () => {
      navigate('/sign-up')
   }

   const handleHomeClick = () => {
      navigate('/')
   }

   const handleExploreClick = () => {
      navigate('/explore')
   }

  return (
   <>
      <HeaderContainer>
         <HeaderTitle onClick={handleHomeClick}> CLUB CLOTHING </HeaderTitle>

         <HeaderItems>
            <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
            {!isAuthenticated && (
               <>
                  <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                  <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
               </>
            )}
            {isAuthenticated && (
               <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
            )}
            <HeaderItem>
               <BsCart3 size={25}/>
               <p style={{marginLeft: 5}}>5</p>
            </HeaderItem>
         </HeaderItems>
      </HeaderContainer>
   </>
  )
}

export default Header;