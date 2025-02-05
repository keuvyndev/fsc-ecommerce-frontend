import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// Styles
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.styles";
import { CartContext } from "../../context/cart.context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const Header = () => {  

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const {isAuthenticated} = useSelector((rootReducer:any) => rootReducer.userReducer);
   const dispatch = useDispatch();


   const {toggleCart, productsCount} = useContext(CartContext);

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

   const handleSignOutClick = () => {
      dispatch({type: 'LOGOUT_USER'})
      signOut(auth)
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
               <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
            )}
            <HeaderItem>
               <BsCart3 size={25} onClick={toggleCart}/>
               <p style={{marginLeft: 5}}>{productsCount}</p>
            </HeaderItem>
         </HeaderItems>
      </HeaderContainer>
   </>
  )
}

export default Header;