import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'

// Components
import CategoryItem from '../category-item/category-item.component';

// Utilities
import Category from '../../types/category.types';

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles';
import { db } from '../../config/firebase.config';
import { categoryConverter } from '../../converters/firestore.converters';

const Categories = () => {
   const [categories, setCategories] = useState<Category[]>([])

   const fetchCategories = async () => {
      try {

         const categoriesFromFirestore: Category[] = []

         // Obtém o SnapShot dos dados
         const querySnapShot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

         // Obtém os dados percorrendo o snapshot e os armazena
         querySnapShot.forEach((doc) => {
            categoriesFromFirestore.push(doc.data())
         })

         //console.log(categoriesFromFirestore)
         setCategories(categoriesFromFirestore)
         
      } catch(error){
         console.log({error})
      }
   }

   console.log(categories)

   // Executa o fetch assim que o componente é montado
   useEffect(() => {
      fetchCategories();
   }, [])

   return ( 
      <CategoriesContainer>
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