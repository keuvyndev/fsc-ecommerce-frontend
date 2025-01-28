import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'

// Components
import CustomButton from "../../components/custom-button/custom-buttom.component";
import Header from "../../components/header/header.component"

// Styles
import { LoginContainer, LoginContent, LoginHeadline, LogininputContainer, LoginSubtitle } from "./login.styles";

const LoginPage = () => {
   return ( 
      <>
         <Header />
         <LoginContainer>
            <LoginContent>
               <LoginHeadline>Entre com a sua conta</LoginHeadline>
               <LoginSubtitle>Ou entre com seu e-amil</LoginSubtitle>

               <CustomButton startIcon={<BsGoogle size={25} />}>Entrar com o Google</CustomButton>

               {/* Button */}
               <LogininputContainer>{/*E-mail input */}</LogininputContainer>
               <LogininputContainer>{/*Password input */}</LogininputContainer>

               {/* Button */}
               <CustomButton startIcon={<FiLogIn size={18} />}>Entrar </CustomButton>
            </LoginContent>
         </LoginContainer>
      </>
   );
}
 
export default LoginPage;