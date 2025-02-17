import { render } from "@testing-library/react"
import Loading from "./loading.component"

describe('Loading', () => {
   it('shoulder show a message if there is one', () => {
      const {getByText} = render(<Loading message="Loading..."/>)
      getByText('Loading...')
   })
})