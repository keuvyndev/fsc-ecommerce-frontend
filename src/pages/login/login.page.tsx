import {BsGoogle} from 'react-icons/bs'
import {FiLogIn} from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'

// Components
import CustomButton from "../../components/custom-button/custom-buttom.component";
import Header from "../../components/header/header.component"
import InputErrorMessage from '../../components/input-error-message/input-error-message.component';
import CustomInput from '../../components/custom-input/custom-input.component';

// Styles
import { LoginContainer, LoginContent, LoginHeadline, LogininputContainer, LoginSubtitle } from "./login.styles";

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

               {/* Button E-mail */}
               <LogininputContainer>
                  <p>E-mail</p>
                  </LogininputContainer>
               <CustomInput 
                  hasError={!! errors?.email}
                  placeholder='Digite seu e-mail' 
                  {...register('email', {required: true, validate: (value) => {return validator.isEmail(value)}})} 
               />

               {errors?.email?.type === 'required' && (
                  <InputErrorMessage>O e-mail é obrigatório</InputErrorMessage>
               )}

               {errors?.email?.type === 'validate' && (
                  <InputErrorMessage>O e-mail não é válido</InputErrorMessage>
               )}

               {/* Button Senha */}
               <LogininputContainer>
                  <p>Senha</p>
                  </LogininputContainer>
               <CustomInput 
               hasError={!! errors?.password}
               placeholder='Digite sua senha' 
               {...register('password',{required: true})} 
               />

               {errors?.password?.type === 'required' && (
                  <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
               )}

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