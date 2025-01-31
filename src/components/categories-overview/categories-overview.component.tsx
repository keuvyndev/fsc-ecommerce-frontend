import { useContext, useEffect } from "react";

// Utilities
import { CategoryContext } from "../../context/category.context";

// Styles
import { Container } from "./catecogires-overview.styles";

// Components
import CategoryOverview from "../category-overview/category-overview.component";
import Loading from "../loading/loading.component";

const CategoriesOverview = () => {

   const {categories, fetchCategories, isLoading} = useContext(CategoryContext)

   useEffect(() => {
      if(categories.length === 0){
         fetchCategories();
      }
   },[])

   if(isLoading) return <Loading />

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