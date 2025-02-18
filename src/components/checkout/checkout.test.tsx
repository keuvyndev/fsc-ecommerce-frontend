import { renderWithRedux } from "../../helpers/test.helpers"
import Checkout from "./checkout.component"

describe('Checkout', () => {
   it('sholud show correct products and total price', () =>{
      const {getByText} = renderWithRedux(<Checkout />, {preloadedState: {
         cartReducer: {products: [
            {
               id: '1',
               imageUrl: 'image_url',
               name: 'Lorem',
               price: 100,
               quantity: 1
            },
            {
               id: '2',
               imageUrl: 'image_url',
               name: 'Ipsum',
               price: 200,
               quantity: 2
            },
            {
               id: '3',
               imageUrl: 'image_url',
               name: 'Dolor',
               price: 300,
               quantity: 3
            },
         ]
      } as any
      }})

      getByText('Total: R$600')
      getByText(/finalizar compra/i)
      getByText(/checkout/i)
   })

   it('should show empty message if cart is empty and not show checkout button', () => {
      const {getByText, queryByText} = renderWithRedux(<Checkout />, {preloadedState: {
         cartReducer: {products: []
      } as any
      }})
      getByText(/seu carrinho está vazio/i)
      expect(queryByText(/finalizar compra/i)).toBeNull()
   })
})