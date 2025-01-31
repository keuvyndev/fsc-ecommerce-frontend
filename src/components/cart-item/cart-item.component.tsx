import { FunctionComponent, useContext } from "react";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose} from 'react-icons/ai'

// Utilities
import CartProduct from "../../types/cart.types";

// Styles
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.styles";
import { CartContext } from "../../context/cart.context";

interface CartItemProps{
   product:CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({product}) => {

   const {removeProductToCart, decreaseProductQuantity, increaseProductQuantity} = useContext(CartContext);

   const handleRemoveClick = () => {
      removeProductToCart(product.id)
   }

   const handleIncreaseQuantityProductClick = () => {
      increaseProductQuantity(product.id)
   }

   const handleDecreaseQuantityProductClick = () => {
      decreaseProductQuantity(product.id)
   }

   return ( 
      <CartItemContainer>
         <CartItemImage imageUrl={product.imageUrl} />
         <CartItemInfo>
            <p>{product.name}</p>
            <p>R$ {product.price}</p>
         <CartItemQuantity>
            <AiOutlineMinus size ={20} onClick={handleDecreaseQuantityProductClick}/>
               <p>{product.quantity}</p>
            <AiOutlinePlus size ={20} onClick={handleIncreaseQuantityProductClick}/>
         </CartItemQuantity>
         </CartItemInfo>

         <RemoveButton onClick={handleRemoveClick}>
            <AiOutlineClose size={25} />
         </RemoveButton>
      </CartItemContainer>
   );
}
 
export default CartItem;