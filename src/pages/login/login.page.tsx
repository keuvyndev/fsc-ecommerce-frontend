/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db, googleProvider } from '../../config/firebase.config'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

// Components
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
import CustomButton from '../../components/custom-button/custom-buttom.component'
import Loading from '../../components/loading/loading.component'

// Styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'
import { useAppSelector } from '../../hooks/redux.hooks'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const {isAuthenticated} = useAppSelector((rootReducer) => rootReducer.userReducer)
  const navigate = useNavigate()

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/')
    }
  },[isAuthenticated])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginForm>()

  // Efetua o Login do usuário no Firebase
  const handleSubmitPress = async (data: any) => {
    try {
      setIsLoading(true)
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(userCredentials)
    } catch (error) {
      const _error = error as AuthError
      if(_error.code === AuthErrorCodes.INVALID_PASSWORD){
        return setError('password', {type: 'mismatch'})
      } 
      
      if (_error.code === AuthErrorCodes.USER_DELETED){
        return setError('email', {type: 'notFound'})
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Efetua login com o google usando Firebase
  const handleSignInWithGoogleProvider = async () => {
    try {
      setIsLoading(true)
      const userCredentials = await signInWithPopup(auth, googleProvider);
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id','==',userCredentials.user.uid)))
      const user = querySnapshot.docs[0]?.data()
      if(!user){
        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName: userCredentials.user.displayName?.split(' ')[0],
          lastNAme: userCredentials.user.displayName?.split(' ')[1],
          provider: 'google'
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />

      {isLoading && <Loading /> }

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={18} onClick={handleSignInWithGoogleProvider} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido.
              </InputErrorMessage>
            )}

            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>
                O e-mail não foi encontrado.
              </InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', { required: true })}
            />

            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
            )}
            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>A senha está incorreta.</InputErrorMessage>
            )}
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage