import { createContext, useState } from "react";
import CartProduct from "../types/cart.types";

interface ICartContext{
   isVisible: boolean,
   products: CartProduct[],
   toggleCart: () => void,
}

export const CartContext = createContext<ICartContext>({
   isVisible: false,
   products: [],
   toggleCart: () => {},
})

interface Props{
   children: React.ReactNode
}

export const CartContextProvider: React.FC<Props> = ({children}) => {
   const [isVisible, setIsVisible] = useState(false)
   const [products] = useState([]);

   // Seta o valor inverso do valor anterior
   const toggleCart = () => {
      setIsVisible(prevState => !prevState)
   }

   return (
      <CartContext.Provider value={{isVisible, products, toggleCart}}>
         {children}
      </CartContext.Provider>
   )
}