import { renderWithRedux } from "../../helpers/test.helpers"
import Cart from "./cart.component"

describe('Cart' , () => {
   it('should show correct cart product', () => {
      const {getByText} = renderWithRedux(<Cart />, {
         preloadedState: {
            cartReducer: {
               products: [{
                  id: '1',
                  imageUrl: 'image_url',
                  name: 'Boné',
                  price: 100,
                  quantity: 2
               }]
            }
         } as any 
      })

      getByText(/boné/i)
      getByText('R$ 100,00')
      getByText('2')
      getByText('Total: R$ 200')
      getByText(/Ir para o checkout/i)
   })
   
   it('should not show checkout button and should show an empty message if cart is empty', ()=>{
      const {getByText, queryByText} = renderWithRedux(<Cart />, {
         preloadedState: {
            cartReducer: {
               products: [{
                  id: '1',
                  imageUrl: 'image_url',
                  name: 'Boné',
                  price: 100,
                  quantity: 2
               }]
            }
         } as any 
      })

      getByText(/Seu carrinho está vazio/i)
      expect(queryByText(/ir para o checkout/i)).toBeNull()
   })
})