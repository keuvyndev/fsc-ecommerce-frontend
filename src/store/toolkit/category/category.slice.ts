import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../config/firebase.config";
import { categoryConverter } from "../../../converters/firestore.converters";
import Category from "../../../types/category.types";


// Utiliza thunk para requisição com redux toolkit
export const fetchCategories = createAsyncThunk(
   'categories/fetch',
   async () => {
      const categoriesFromFirestore: Category[] = []
      const querySnapthot = await getDocs(
         collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapthot.forEach((doc) => {
         categoriesFromFirestore.push(doc.data())
      })

      // Payload - Action Succes
      return categoriesFromFirestore
   }
)

interface InitialState {
   categories: Category[],
   isLoading: boolean
}

const initialState: InitialState = {
   categories: [],
   isLoading: false
}

const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {},
   extraReducers: (builder) => {

      // Execução iniciada
      builder.addCase(fetchCategories.pending, (state) => {
         state.isLoading = true
      })

      // Executada com sucesso
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
         state.categories = action.payload
         state.isLoading = false
      })

      // Executada com erro
      builder.addCase(fetchCategories.rejected, (state) => {
         state.isLoading = false
      })

   }
})

export default categorySlice.reducer;