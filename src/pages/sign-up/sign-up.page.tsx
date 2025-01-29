/* eslint-disable @typescript-eslint/no-explicit-any */
import {FiLogIn} from 'react-icons/fi'
import {useForm} from 'react-hook-form'
import validator from 'validator';

// Components
import CustomButton from "../../components/custom-button/custom-buttom.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";

// Styles
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from "./sign-up.styles";
import InputErrorMessage from '../../components/input-error-message/input-error-message.component';

interface SignUpForm {
   name: string;
   lastName: string;
   email: string;
   password: string;
   passwordConfirmation: string;
}

const SignUpPage = () => {

   const { 
      register, 
      formState:{errors}, 
      handleSubmit,
      watch,
   } = useForm<SignUpForm>();

   const watchPassword = watch('password');

   const handleSubmitPress = (data:any) => {
      console.log(data)
   }

   return ( 
      <>
         <Header />

         <SignUpContainer>
            <SignUpContent>
               <SignUpHeadline></SignUpHeadline>

               <SignUpInputContainer>
                  <p>Nome</p>
                  <CustomInput 
                  hasError={!! errors?.name}
                  placeholder="Digite seu nome"
                  {...register('name'), {required:true}}                  
                  />

                  {errors?.name?.type === 'required' && (
                     <InputErrorMessage>O nome é obrigatório</InputErrorMessage>
                  )}
               </SignUpInputContainer>

               <SignUpInputContainer>
                  <p>Sobrenome</p>
                  <CustomInput 
                  hasError={!! errors?.lastName}
                  placeholder="Digite seu sobrenome"
                  {...register('lastName'), {required:true}}   
                  />
                  {errors?.lastName?.type === 'required' && (
                     <InputErrorMessage>O sobrenome é obrigatório</InputErrorMessage>
                  )}
               </SignUpInputContainer>

               <SignUpInputContainer>
                  <p>E-mail</p>
                  <CustomInput 
                  hasError={!! errors?.email}
                  placeholder="Digite seu e-mail"
                  {...register('email'), {required:true, validate: (value:string) => {return validator.isEmail(value)}}}  
                  />

               {errors?.email?.type === 'required' && (
                  <InputErrorMessage>O e-mail é obrigatório</InputErrorMessage>
               )}

               {errors?.email?.type === 'validate' && (
                  <InputErrorMessage>O e-mail não é válido</InputErrorMessage>
               )}
               </SignUpInputContainer>

               <SignUpInputContainer>
                  <p>Senha</p>
                  <CustomInput 
                  hasError={!! errors?.password}
                  placeholder="Digite seu senha" 
                  type={'password'}
                  {...register('password'), {required:true}}  
                  />
                  {errors?.password?.type === 'required' && (
                     <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
                  )}

               </SignUpInputContainer>

               <SignUpInputContainer>
                  <p>Confirmação de Senha</p>
                  <CustomInput 
                  hasError={!! errors?.passwordConfirmation}
                  placeholder="Digite novamente sua senha" 
                  type={'password'}
                  {...register('passwordConfirmation'), {required:true, validate: (value:string) => { return value === watchPassword} }}  
                   />
                   {errors?.passwordConfirmation?.type === 'required' && (
                     <InputErrorMessage>A confirmação de e-mail é obrigatória</InputErrorMessage>
                   )}
                   {errors?.passwordConfirmation?.type === 'validate' && (
                     <InputErrorMessage>A confirmação de senha precisa ser igual a senha</InputErrorMessage>
                   )}
               </SignUpInputContainer>

               <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}><FiLogIn size={18}/> Criar Conta</CustomButton>
            </SignUpContent>
         </SignUpContainer>
      </>
   );
}
 
export default SignUpPage;