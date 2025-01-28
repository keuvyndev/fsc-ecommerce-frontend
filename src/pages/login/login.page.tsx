import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'

// Components
import CustomButton from "../../components/custom-button/custom-buttom.component";
import Header from "../../components/header/header.component"

// Styles
import { LoginContainer, LoginContent, LoginHeadline, LogininputContainer, LoginSubtitle } from "./login.styles";
import CustomInput from '../../components/custom-input/custom-input.component';

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
               <CustomInput placeholder='Digite seu e-mail' />
               <LogininputContainer>{/*Password input */}</LogininputContainer>
               <CustomInput placeholder='Digite sua senha' />

               {/* Button */}
               <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
            </LoginContent>
         </LoginContainer>
      </>
   );
}
 
export default LoginPage;