import { render } from "@testing-library/react"
import CategoryItem from "./category-item.component"
import Category from "../../types/category.types"
import { BrowserRouter } from "react-router-dom"

describe('CategoryItem', () => {
   it('should render category correctly', () => {

      const category: Category = {
         id: '1',
         displayName: 'Lorem Ipsum',
         imageUrl: 'image_url',
         name: 'LoremIpsum',
         products: []
      }

      const {getByText} = render(
      <BrowserRouter>
         <CategoryItem category={category}/>
      </BrowserRouter>
   )
      getByText('Lorem Ipsum')
      getByText('Explorar')
   })
})