import { collection, getDocs } from "firebase/firestore";
import Category from "../types/category.types";
import { createContext, useState } from "react";
import { db } from "../config/firebase.config";
import { categoryConverter } from "../converters/firestore.converters";

interface ICategoryContext{
   categories: Category[]
   isLoading: boolean
   fetchCategories: () => Promise<void>
}

export const CategoryContext = createContext<ICategoryContext>({
   categories: [],
   fetchCategories: () => Promise.resolve(),
   isLoading: false
})

interface ICategoryProps{
   children: React.ReactNode
}

const CategoryContextProvider: React.FC <ICategoryProps> = ({children}) => {

   const [categories, setCategories] = useState<Category[]>([])
   const [isLoading, setIsLoading] = useState(false)

   // Function the return categories from DB
   const fetchCategories = async () => {
      try {

         setIsLoading(true)
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
      } finally {
         setIsLoading(false)
      }
   }


   console.log(categories)

   return (
      <CategoryContext.Provider value ={{categories, fetchCategories, isLoading}}>
         {children}
      </CategoryContext.Provider>
   )

}

export default CategoryContextProvider;