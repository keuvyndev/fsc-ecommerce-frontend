import { useContext } from 'react';
import {BsCartCheck} from 'react-icons/bs'

// Components
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from '../cart-item/cart-item.component';

// Utilities
import { CartContext } from '../../context/cart.context';

// Styles
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.styles";

const Cart = () => {

   const {isVisible, toggleCart, products, productsTotalPrice} = useContext(CartContext)

   return ( 
      <>
         <CartContainer isVisible = {isVisible}>
            <CartEscapeArea onClick={toggleCart} />
               <CartContent>
                  <CartTitle> Seu carrinho </CartTitle>
                     {products.map((product) => <CartItem key={product.id} product={product}/>)}
                  <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
                  <CustomButton startIcon={<BsCartCheck />}>Ir para o Checkout</CustomButton>
               </CartContent>
         </CartContainer>
      </>
   );
}
 
export default Cart;