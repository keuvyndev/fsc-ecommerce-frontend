import { useContext } from 'react';
import {BsCartCheck} from 'react-icons/bs'

// Components
import CustomButton from "../custom-button/custom-buttom.component";
import CartItem from '../cart-item/cart-item.component';

// Utilities
import { CartContext } from '../../context/cart.context';
import { toggleCart } from '../../store/reducers/cart/cart.actions';

// Styles
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.styles";
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux.hooks';
import { useDispatch } from 'react-redux';

const Cart = () => {

   const {isVisible, products} = useAppSelector(state => state.cartReducer);
   const dispatch = useDispatch();

   const {productsTotalPrice, productsCount} = useContext(CartContext)
   const navigate = useNavigate();

   const handleGoToCheckout = () => {
      dispatch(toggleCart())
      navigate('/checkout')
   }

   const handleEscapeAreaClick = () => {
      dispatch(toggleCart())
   }

   return ( 
      <>
         <CartContainer isVisible = {isVisible}>
            <CartEscapeArea onClick={handleEscapeAreaClick} />
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