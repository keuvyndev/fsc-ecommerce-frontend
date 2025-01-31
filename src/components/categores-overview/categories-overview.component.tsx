import { useContext, useEffect } from "react";

// Utilities
import { CategoryContext } from "../../context/category.context";

// Styles
import { Container } from "./catecogires-overview.styles";

const CategoriesOverview = () => {

   const {categories, fetchCategories} = useContext(CategoryContext)

   useEffect(() => {
      if(categories.length === 0){
         fetchCategories();
      }
   },[])

   return ( 
      <Container>
         {categories.map((category) => ( 
            <p key={category.id}>{category.displayName}</p>
            )
         )}
      </Container>
   );
}
 
export default CategoriesOverview;