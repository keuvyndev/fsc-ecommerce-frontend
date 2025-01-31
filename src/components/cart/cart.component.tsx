import {BsCartCheck} from 'react-icons/bs'

// Components
import CustomButton from "../custom-button/custom-buttom.component";

// Styles
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.styles";
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const Cart = () => {

   const {isVisible, toggleCart} = useContext(CartContext)

   return ( 
      <>
         <CartContainer isVisible = {isVisible}>
            <CartEscapeArea onClick={toggleCart} />
               <CartContent>
                  <CartTitle> Seu carrinho </CartTitle>

                     {/* produtos */}

                  <CartTotal>R$ 999,00</CartTotal>
                  <CustomButton startIcon={<BsCartCheck />}>Ir para o Checkout</CustomButton>
               </CartContent>
         </CartContainer>
      </>
   );
}
 
export default Cart;