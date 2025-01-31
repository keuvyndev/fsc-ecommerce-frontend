import { useContext } from 'react';
import {BsCartCheck} from 'react-icons/bs'

// Components
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from '../cart-item/cart-item.component';

// Utilities
import { CartContext } from '../../context/cart.context';

// Styles
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.styles";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

   const {isVisible, toggleCart, products, productsTotalPrice, productsCount} = useContext(CartContext)
   const navigate = useNavigate();

   const handleGoToCheckout = () => {
      toggleCart()
      navigate('/checkout')
   }

   return ( 
      <>
         <CartContainer isVisible = {isVisible}>
            <CartEscapeArea onClick={toggleCart} />
               <CartContent>
                  <CartTitle> Seu carrinho </CartTitle>
                     {products.map((product) => <CartItem key={product.id} product={product}/>)}

                     {productsCount > 0 ?
                           <>
                              <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
                              <CustomButton startIcon={<BsCartCheck />} onClick={handleGoToCheckout}>Ir para o Checkout</CustomButton>
                           </>
                     : (<p>Seu carrinho está vazio!</p>)}
               </CartContent>
         </CartContainer>
      </>
   );
}
 
export default Cart;