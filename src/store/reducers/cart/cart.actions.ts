import Product from "../../../types/product.types";
import CartActionTypes from "./cart.action-types";

interface ToggleCartAction {
   type: typeof CartActionTypes.toggleCart
}
export const toggleCart = () => ({
   type: CartActionTypes.toggleCart
})
interface AddProductToCart {
   type: typeof CartActionTypes.addProductToCart,
   payload: Product
}

export const addProductToCart = (payload: Product) => ({
   type: CartActionTypes.addProductToCart,
   payload
})

interface RemoveProductFromCart {
   type: typeof CartActionTypes.removeProductFromCart,
   payload: string
}

export const removeProductFromCart = (payload: string) => ({
   type: CartActionTypes.removeProductFromCart,
   payload
})

interface IncreaseCartProductQuantity {
   type: typeof CartActionTypes.increaseCartProductQuantity,
   payload: string
}

export const increaseCartProductQuantity = (payload: string) => ({
   type: CartActionTypes.increaseCartProductQuantity,
   payload
})

interface DecreaseCartProductQuantity {
   type: typeof CartActionTypes.decreaseCartProductQuantity,
   payload: string
}

export const decreaseCartProductQuantity = (payload: string) => ({
   type: CartActionTypes.decreaseCartProductQuantity,
   payload
}) 

interface ClearCartProducts {
   type: typeof CartActionTypes.clearCartProducts
}

export const clearCartProducts = () => ({
   type: CartActionTypes.clearCartProducts
})

export type CartActions = 
| ToggleCartAction
| AddProductToCart
| RemoveProductFromCart
| IncreaseCartProductQuantity
| DecreaseCartProductQuantity
| ClearCartProducts