import { FunctionComponent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineHome } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { clearCartProducts } from "../../store/reducers/cart/cart.actions";

// Components
import Header from "../../components/header/header.component";

// Styles
import { PaymentConfirmationContainer, PaymentConfirmationContent } from "./payment-confirmation.styles";
import Colors from "../../theme/theme.colors";
import CustomButton from "../../components/custom-button/custom-buttom.component";

const PaymentConfirmationPage: FunctionComponent = () => {
   
   const [searchParams] = useSearchParams();

   const dispatch = useDispatch();

   const navigate = useNavigate();
   const status = searchParams.get('success')
   const isCanceled = searchParams.get('canceled') === 'true'

   // Se o pagamento for confirmado o carrinho será limpado
   useEffect(()=>{
      if(status === 'true'){
         dispatch(clearCartProducts())
      }
   }, [status])

   const handleGoToHomeClick = () =>{
      navigate('/')
   }
   
   return (
      <>
         <Header />
         <PaymentConfirmationContainer>
            <PaymentConfirmationContent>

               {status === 'true' && (
                  <>
                     <AiOutlineCheckCircle size={120} color={Colors.success} />
                     <p>Sua compra foi finalizada com sucesso!</p>
                  </>
               )}

               {(status === 'false' || isCanceled) && (
                  <>
                     <AiOutlineCloseCircle size={120} color={Colors.error} />
                     <p>Ocorreu um erro ao finalizar sua compra. Por favor, tente novamente.</p>
                  </>
               )}
               <CustomButton startIcon={<AiOutlineHome />} onClick={handleGoToHomeClick}>Ir para Página Inicial</CustomButton>
            </PaymentConfirmationContent>
         </PaymentConfirmationContainer>
      </>
   );
}
 
export default PaymentConfirmationPage;