import Product from "../../../types/product.types";
import CartActionTypes from "./cart.action-types";

interface ToggleCartAction {
   type: typeof CartActionTypes.toggleCart
}
export const toggleCart = () :ToggleCartAction => ({
   type: CartActionTypes.toggleCart
})
interface AddProductToCart {
   type: typeof CartActionTypes.addProductToCart,
   payload: Product
}

export const addProductToCart = (payload: Product):AddProductToCart => ({
   type: CartActionTypes.addProductToCart,
   payload
})

interface RemoveProductFromCart {
   type: typeof CartActionTypes.removeProductFromCart,
   payload: string
}

export const removeProductFromCart = (payload: string):RemoveProductFromCart => ({
   type: CartActionTypes.removeProductFromCart,
   payload
})

interface IncreaseCartProductQuantity {
   type: typeof CartActionTypes.increaseCartProductQuantity,
   payload: string
}

export const increaseCartProductQuantity = (payload: string): IncreaseCartProductQuantity => ({
   type: CartActionTypes.increaseCartProductQuantity,
   payload
})

interface DecreaseCartProductQuantity {
   type: typeof CartActionTypes.decreaseCartProductQuantity,
   payload: string
}

export const decreaseCartProductQuantity = (payload: string): DecreaseCartProductQuantity => ({
   type: CartActionTypes.decreaseCartProductQuantity,
   payload
}) 

interface ClearCartProducts {
   type: typeof CartActionTypes.clearCartProducts
}

export const clearCartProducts = (): ClearCartProducts => ({
   type: CartActionTypes.clearCartProducts
})

export type CartActions = 
| ToggleCartAction
| AddProductToCart
| RemoveProductFromCart
| IncreaseCartProductQuantity
| DecreaseCartProductQuantity
| ClearCartProducts