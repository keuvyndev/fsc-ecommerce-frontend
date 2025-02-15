import { Dispatch } from "redux"
import Category from "../../../types/category.types"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../config/firebase.config"
import { categoryConverter } from "../../../converters/firestore.converters"
import CategoryActionTypes from "./category.actions-type"

// Dispara uma requisição async com redux-thunk
export const fetchCategories = () => {
   return async (dispatch: Dispatch) => {

      dispatch({
         type: CategoryActionTypes.FETCH_CATEGORIES_START
      })

      try{

         const categoriesFromFirestore: Category[] = []
         const querySnapthot = await getDocs(
            collection(db, 'categories').withConverter(categoryConverter)
         )

         querySnapthot.forEach((doc) => {
            categoriesFromFirestore.push(doc.data())
         })

         dispatch({
            type: CategoryActionTypes.FETCH_CATEGORIES_SUCCES,
            payload: categoriesFromFirestore
         })

      } catch(error) {

         dispatch({
            type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE
         })

         console.error(error)
      }
   }
}