import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import Category from "../types/category.types";

// Método que captura a snapshot e retorna o dado com base em interface
export const categoryConverter = {
   toFirestore(category: Category): DocumentData {
      return {...category}
   },
   fromFirestore (
      snapshot: QueryDocumentSnapshot, 
      options: SnapshotOptions
   ): Category {
      const data =   snapshot.data(options);
      return {
         id: data.id,
         displayName: data.displayName,
         imageUrl: data.imageUrl,
         name: data.name,
         products: data.products
      }
   }
}