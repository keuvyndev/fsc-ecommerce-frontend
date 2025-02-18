import userEvent from "@testing-library/user-event"
import { renderWithRedux } from "../../helpers/test.helpers"
import LoginPage from "./login.page"

describe('Login', () => {

   it('should show errors when trying to submit without filling all required fields', async () =>{
      const {getByText, findByText} = renderWithRedux(<LoginPage />, {})
      const submitButton = getByText('Entrar')
      userEvent.click(submitButton)
      await findByText(/o e-mail é obrigatório/i)
   });

   
});