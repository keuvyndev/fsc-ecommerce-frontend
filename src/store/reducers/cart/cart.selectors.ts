import { RootState } from "../../store";

export const selectProductsTotalPrice = (state: RootState) => {
   return state.cartReducer.products.reduce((acc, product) => {
      return acc + (product.price * product.quantity)
   }, 0)
}

export const selectProductsCount = (state: RootState) => {
   return state.cartReducer.products.reduce((acc, item) => {
      return acc + item.quantity
   },0)
}