import React, { createContext, useState } from 'react'
import User from '../types/user.types';

// Aqui são definidos os tipos do contexto
interface IUserContext{
   currentUser: User | null,
   isAuthenticated: boolean,
   loginUser: (user: User) => void
   logoutUser: () => void
}

// Foi aninhado a interface 'IUserContext' para permite o tipo User | null
// Cria um contexto para os dados de usuário e passa-os a arvore de componentes por meio do provider
// Aqui são definidos os valores padrão do contexto
export const userContext = createContext<IUserContext>({
   currentUser: null,
   isAuthenticated: false,
   loginUser: () => {},
   logoutUser: () => {},
})

interface Props{
   children: React.ReactNode;
}

// O provider 'exporta' todos os atributos do contexto e deve ser
// Inicializado na raiz da aplicação 'app.tsx'
const UserContextProvider: React.FC<Props> = ({children}) => {
   const [currentUser, setCurrentUser] =useState<User | null>(null)
   const isAuthenticated = currentUser !== null
   const loginUser = (user:User) => {
      setCurrentUser(user)
   }
   const logoutUser = () => {
      setCurrentUser(null)
   }
   
   return (
      <userContext.Provider value={{currentUser, isAuthenticated, loginUser, logoutUser}}>
         {children}
      </userContext.Provider>
   )
}

export default UserContextProvider;