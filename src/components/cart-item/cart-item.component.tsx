import { FunctionComponent } from "react";
import {AiOutlinePlus, AiOutlineMinus, AiOutlineClose} from 'react-icons/ai'

// Utilities
import CartProduct from "../../types/cart.types";

// Styles
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.styles";
import { useDispatch } from "react-redux";
import { decreaseCartProductQuantity, increaseCartProductQuantity, removeProductFromCart } from "../../store/toolkit/cart/cart.slice";

interface CartItemProps{
   product:CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({product}) => {

   const dispatch = useDispatch();


   const handleRemoveClick = () => {
      dispatch(removeProductFromCart(product.id))
   }

   const handleIncreaseQuantityProductClick = () => {
      dispatch(increaseCartProductQuantity(product.id))
   }

   const handleDecreaseQuantityProductClick = () => {
      dispatch(decreaseCartProductQuantity(product.id))
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