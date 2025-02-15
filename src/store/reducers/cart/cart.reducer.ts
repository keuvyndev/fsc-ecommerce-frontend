import CartProduct from "../../../types/cart.types";
import CartActionTypes from "./cart.action-types";
import { CartActions } from "./cart.actions";

interface InitialState {
   isVisible: boolean,
   products: CartProduct[],
}

const initalState: InitialState = {
   isVisible: false,
   products: [],
}

 
const cartReducer = (state = initalState, action: CartActions): InitialState => {
   switch(action.type){
      case CartActionTypes.toggleCart:
         return {
            ...state,
            isVisible: !state.isVisible
         }
      case CartActionTypes.addProductToCart:{

         // Verifica se o produto já está no carrinho
         const product = action.payload
         const productIsAlreadyInCart = state.products.some((item) => item.id === product.id)

         if(productIsAlreadyInCart){

            return {
               ...state,
               products: state.products.map((item) => 

                  // Ao identificar o item incrementa, caso não seja o item, o mantém na lista
                  item.id === product.id ? {...item, quantity: item.quantity + 1} 
                  : {... item}
               )
            }
         }

         // Se não -> adicioná-lo
         return {
            ...state,
             products: [...state.products, { ...product, quantity: 1 }]}
     
      }
      case CartActionTypes.removeProductFromCart:
         return {
            ...state,
            products: state.products.filter(product => product.id !== action.payload)
         }
      case CartActionTypes.increaseCartProductQuantity:
         return {
            ...state,
            products: state.products.map(product => {
               if(product.id === action.payload){
                  return {
                     ...product,
                     quantity: product.quantity + 1
                  }
               }
               return product
            })
      }
      case CartActionTypes.decreaseCartProductQuantity:
         return {
            ...state,
            products: state.products.map(product => {
               if(product.id === action.payload){
                  return {
                     ...product,
                     quantity: product.quantity - 1
                  }
               }
               return product
            }).filter((product) => (product.quantity > 0))
         }
      case CartActionTypes.clearCartProducts:
      return {
         ...state,
         products: []
      }
      default:
         return state // For redux-persist
         //return { ...state}
   }
   
}


export default cartReducer;