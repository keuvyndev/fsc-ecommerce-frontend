import Header from "../../components/header/header.component"
import { LoginContainer, LoginContent, LoginHeadline, LogininputContainer, LoginSubtitle } from "./login.styles";

const LoginPage = () => {
   return ( 
      <>
         <Header />
         <LoginContainer>
            <LoginContent>
               <LoginHeadline>Entre com a sua conta</LoginHeadline>
               <LoginSubtitle>Ou entre com seu e-amil</LoginSubtitle>

               {/* Button */}
               <LogininputContainer>{/*E-mail input */}</LogininputContainer>
               <LogininputContainer>{/*Password input */}</LogininputContainer>

               {/* Button */}
            </LoginContent>
         </LoginContainer>
      </>
   );
}
 
export default LoginPage;