import { createContext, useState } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";

interface ICartContext{
   isVisible: boolean,
   products: CartProduct[],
   toggleCart: () => void,
   addProductToCart: (product:Product) => void
}

export const CartContext = createContext<ICartContext>({
   isVisible: false,
   products: [],
   toggleCart: () => {},
   addProductToCart: () => {},
})

interface Props{
   children: React.ReactNode
}

export const CartContextProvider: React.FC<Props> = ({children}) => {
   const [isVisible, setIsVisible] = useState(false)
   const [products, setProducts] = useState<CartProduct[]>([]);

   // Seta o valor inverso do valor anterior
   const toggleCart = () => {
      setIsVisible(prevState => !prevState)
   }

   const addProductToCart = (product: Product) => {
      
      // Verifica se o produto já está no carrinho
      const productIsAlreadyInCart = products.some((item) => item.id === product.id)

      if(productIsAlreadyInCart){
         return setProducts(products => products.map((item) => 

         // Ao identificar o item incrementa, caso não seja o item, o mantém na lista
         item.id === product.id ? {...item, quantity: item.quantity + 1} : {... item}));
      }

      return setProducts((prevState) => [...prevState, {...product, quantity: 1}])
   }

   return (
      <CartContext.Provider value={{isVisible, products, toggleCart, addProductToCart}}>
         {children}
      </CartContext.Provider>
   )
}