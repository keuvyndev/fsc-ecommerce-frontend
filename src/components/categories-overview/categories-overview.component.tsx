import { useContext, useEffect } from "react";

// Utilities
import { CategoryContext } from "../../context/category.context";

// Styles
import { Container } from "./catecogires-overview.styles";

// Components
import CategoryOverview from "../category-overview/category-overview.component";

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
               <CategoryOverview key={category.id} category={category} />
            )
         )}
      </Container>
   );
}
 
export default CategoriesOverview;