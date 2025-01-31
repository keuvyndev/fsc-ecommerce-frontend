import { createContext, useMemo, useState } from "react";
import CartProduct from "../types/cart.types";
import Product from "../types/product.types";

interface ICartContext{
   isVisible: boolean,
   productsTotalPrice: number,
   productsCount: number,
   products: CartProduct[],
   toggleCart: () => void,
   addProductToCart: (product:Product) => void
   removeProductToCart: (productId: string) => void
   increaseProductQuantity: (productId: string) => void
   decreaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
   isVisible: false,
   productsTotalPrice: 0,
   productsCount: 0,
   products: [],
   toggleCart: () => {},
   addProductToCart: () => {},
   removeProductToCart: () => {},
   increaseProductQuantity: () => {},
   decreaseProductQuantity: () => {},
})

interface Props{
   children: React.ReactNode
}

export const CartContextProvider: React.FC<Props> = ({children}) => {
   const [isVisible, setIsVisible] = useState(false)
   const [products, setProducts] = useState<CartProduct[]>([]);

   // A função é executada sempre que o componente é renderizado novamente
   // O useMemo garante que ela seja executada somente se a lista de produtos mudar
   const productsTotalPrice = useMemo(() => {
      return products.reduce((acc, product) => {
         return acc + (product.price * product.quantity)
      }, 0)
   }, [products])

   const productsCount = useMemo(() => {
      return products.reduce((acc, item) => {
         return acc + item.quantity
      },0)
   }, [products])

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

   const removeProductToCart = (productId: string) => {
      setProducts(products => products.filter((product) => {
         return product.id !== productId;
      }))
   }

   const increaseProductQuantity = (productId: string) => setProducts(products => products.map((item) => item.id === productId ? 
      {...item, quantity: item.quantity + 1} : {...item}
   ))

   const decreaseProductQuantity = (productId: string) => setProducts(products => products.map((item) => item.id === productId ? 
      {...item, quantity: item.quantity -1} : {...item}
   ).filter((product) => product.quantity > 0))

   return (
      <CartContext.Provider value={{isVisible, products, productsTotalPrice, productsCount, toggleCart, addProductToCart, removeProductToCart, increaseProductQuantity, decreaseProductQuantity}}>
         {children}
      </CartContext.Provider>
   )
}