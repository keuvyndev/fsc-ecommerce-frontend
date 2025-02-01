import { FunctionComponent, useContext, useState } from "react";
import {BsBagCheck} from 'react-icons/bs'

// Components
import CustomButton from "../../components/custom-button/custom-buttom.component";

// Styles
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from "../../components/checkout/checkout.styles";
import CartItem from "../../components/cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import axios from "axios";
import Loading from "../loading/loading.component";


const Checkout: FunctionComponent = () => {

   const {products, productsTotalPrice, productsCount} = useContext(CartContext)
   const [isLoading, setIsLoading] = useState(false)

   const handleFinishPurchaseClick = async () => {
      try {
         setIsLoading(true)
         const {data} = await axios.post(`${process.env.REACT_APP_API_URL!}/create-checkout-session`, {products})
         
         // Redireciona o usuário para a URL
         window.location.href = data.url
      } catch (error) {
         console.log(error)  
      } finally{
         setIsLoading(false)
      }
   }

   return ( 
      <>
         {isLoading && <Loading />}
         <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>
               {productsCount > 0 ? 
               ( 
                  <>
                     <CheckoutProducts>
                        {products.map((product) => <CartItem key={product.id} product={product} />)}
                     </CheckoutProducts>
                     <CheckoutTotal>R$ {productsTotalPrice}</CheckoutTotal>
                     <CustomButton startIcon={<BsBagCheck />} onClick={handleFinishPurchaseClick}>Finalizar Compra</CustomButton>
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