import { useEffect, useState } from 'react'
import axios from 'axios'

// Utilities
import Category from '../../types/category.types';
import env from '../../config/env.config';

// Styles
import './categories.styles.css'

const Categories = () => {
   const [categories, setCategories] = useState<Category[]>([])

   const fetchCategories = async () => {
      try {
         const {data} = await axios.get(`${env.apiUrl}/api/category`)
         setCategories(data)
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
      <div className="categories-container">
         <div className="categories-content">

         </div>
      </div>
   );
}
 
export default Categories;