import { render } from "@testing-library/react"
import CustomButton from "./custom-buttom.component"

describe('Custom Button', () => {
   it('should render with correct children', () => {
      const {getByText} = render(<CustomButton>Lorem Ipsum</CustomButton>)
      getByText('Lorem Ipsum')
   })
})