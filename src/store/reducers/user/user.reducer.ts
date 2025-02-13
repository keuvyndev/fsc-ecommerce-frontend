/* eslint-disable @typescript-eslint/no-explicit-any */
import User from "../../../types/user.types"
import UserActionTypes from "./user.action-types"

interface InitialState {
   currentUser: User | null
   isAuthenticated: boolean
}

const initialState: InitialState = {
   currentUser: null,
   isAuthenticated: false
}

// Dispatch Example: dispatch({type: 'LOGIN_USER', payload: 'user'})

// Efetua actions para User (Requer retorno de objeto)
const userReducer = (state = initialState, action: any) => {
   switch(action.type){
      case UserActionTypes.LOGIN:
         return {
            ... state,
            currentUser: action.payload,
            isAuthenticated: true 
         }
      case UserActionTypes.LOGOUT:
         return {
            ... state, 
            currentUser: null, 
            isAuthenticated: false 
         }
      // Obrigatório em todos os reducers
      default:
         return {
            ... state
         }
   }
}

export default userReducer;   