import { useEffect } from 'react'

// Components
import CategoryItem from '../category-item/category-item.component';

// Utilities

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles';
import Loading from '../loading/loading.component';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/toolkit/category/category.slice';   
import { useAppSelector } from '../../hooks/redux.hooks';

const Categories = () => {

   const dispatch = useDispatch();
   const { categories, isLoading } = useAppSelector(state => state.categoryReducer)

   // Executa o fetch assim que o componente é montado
   useEffect(() => {
      dispatch(fetchCategories() as any);
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