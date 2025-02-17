import { render } from "@testing-library/react"
import Header from "./header.component"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../../store/root-reducer"
import { renderWithRedux } from "../../helpers/test.helpers"

describe('header' , () => {

   // Este teste usa renderWithRedux (método helper) para renderizar o componente
   it('should shown sign out button if user is not authenticated', () => {
      
      
      // A render requer o provider e o browser router para funcionar
      const {getByText} = renderWithRedux(<Header />, {
         preloadedState: { userReducer: {isAuthenticated: true}} as any
      })

      getByText(/Sair/i)
   })

   // Este teste não usa o helper, mas sim o render padrão
   it('should shown sign in and sign up button if user is authenticated', () => {
      
      // Cria dados do store para testes
      const store = configureStore({
         reducer: rootReducer, 
         preloadedState: { userReducer: { isAuthenticated: false } } as any
      })

      // A render requer o provider e o browser router para funcionar
      const {getByText} = render(
         <BrowserRouter>
            <Provider store={store}>
                  <Header />
            </Provider>
         </BrowserRouter>
      )

      getByText(/Login/i)
      getByText(/criar login/i)
   })
})