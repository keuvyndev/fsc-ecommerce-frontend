import { FunctionComponent, useContext } from "react";
import {BsBagCheck} from 'react-icons/bs'

// Components
import CustomButton from "../../components/custom-button/custom-buttom.component";

// Styles
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from "../../components/checkout/checkout.styles";
import CartItem from "../../components/cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";


const Checkout: FunctionComponent = () => {

   const {products, productsTotalPrice, productsCount} = useContext(CartContext)

   return ( 
      <>
         <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>
               {productsCount > 0 ? 
               ( 
                  <>
                     <CheckoutProducts>
                        {products.map((product) => <CartItem key={product.id} product={product} />)}
                     </CheckoutProducts>
                     <CheckoutTotal>R$ {productsTotalPrice}</CheckoutTotal>
                     <CustomButton startIcon={<BsBagCheck />}>Finalizar Compra</CustomButton>
                  </>
               )
               : (
                  <>
                     <p>Seu carrinho está vazio</p>
                  </>
               )}
         </CheckoutContainer>
      </>
   );
}
 
export default Checkout;