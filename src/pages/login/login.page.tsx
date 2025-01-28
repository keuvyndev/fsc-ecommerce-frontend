import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
import { useForm } from 'react-hook-form'

// Components
import CustomButton from "../../components/custom-button/custom-buttom.component";
import Header from "../../components/header/header.component"

// Styles
import { LoginContainer, LoginContent, LoginHeadline, LogininputContainer, LoginSubtitle } from "./login.styles";
import CustomInput from '../../components/custom-input/custom-input.component';

const LoginPage = () => {

   const { register, formState: { errors }, handleSubmit } = useForm();

   // Só chama esta função caso não existam erros
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleSubmitPress = (data: any) => {
      console.log(data)
   }

   return ( 
      <>
         <Header />
         <LoginContainer>
            <LoginContent>
               <LoginHeadline>Entre com a sua conta</LoginHeadline>
               <LoginSubtitle>Ou entre com seu e-amil</LoginSubtitle>

               <CustomButton startIcon={<BsGoogle size={25} />}>Entrar com o Google</CustomButton>

               {/* Button */}
               <LogininputContainer>
                  <p>E-mail</p>
                  </LogininputContainer>
               <CustomInput 
                  hasError={!! errors?.email}
                  placeholder='Digite seu e-mail' 
                  {...register('email',{required: true})} 
               />
               <LogininputContainer>
                  <p>Senha</p>
                  </LogininputContainer>
               <CustomInput 
               hasError={!! errors?.password}
               placeholder='Digite sua senha' 
               {...register('password',{required: true})} 
               />

               {/* Button */}
               <CustomButton 
                  startIcon={<FiLogIn size={18} />} 
                  onClick={() => handleSubmit(handleSubmitPress)()}>
                  Entrar
               </CustomButton>
            </LoginContent>
         </LoginContainer>
      </>
   );
}
 
export default LoginPage;