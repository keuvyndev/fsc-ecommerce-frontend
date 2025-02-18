import rootReducer from "../store/root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { RootState } from "../store/store";

// Helper para instanciar um teste envolvendo redux
// Permite passar parâmetros de estado pré-carregado

export const renderWithRedux = (
   component: React.ReactElement, 
   {
      preloadedState, 
      store = configureStore({
         reducer: rootReducer,
          preloadedState
         }), 
         ... renderOptions
      }: {
         preloadedState?: Partial<RootState>,
         store?: any,
      }
   ) => {
      const Wrapper = ({children}: {children: React.ReactElement}) => {
         return (
            <BrowserRouter>
               <Provider store={store}>
                  {children}
               </Provider>
            </BrowserRouter>
         )
      }

      return render(component, {wrapper   : Wrapper, ...renderOptions})
   }