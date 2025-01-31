import { useContext, useEffect } from 'react'

// Components
import CategoryItem from '../category-item/category-item.component';

// Utilities

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles';
import { CategoryContext } from '../../context/category.context';
import Loading from '../loading/loading.component';

const Categories = () => {
   
   const {categories, fetchCategories, isLoading} = useContext(CategoryContext)

   // Executa o fetch assim que o componente é montado
   useEffect(() => {
      fetchCategories();
   }, [])

   return ( 
      <CategoriesContainer>
         {isLoading ?? <Loading />}
         <CategoriesContent>
            {categories.map((category)=>
               (
                  <div key={category.id}>
                     <CategoryItem  category={category}/>
                  </div>
               ) 
            )}
         </CategoriesContent>
      </CategoriesContainer>
   );
}
 
export default Categories;