import { FunctionComponent } from "react";

// Utilities
import Product from "../../types/product.types";

//Styles
import { ProductContainer, ProductImage, ProductInfo } from "./product-item.styles";

interface ProductItemProps{
   product: Product
}

const ProductItem:FunctionComponent<ProductItemProps> = ({product}) => {
   return ( 
      <ProductContainer>
         <ProductImage imageUrl={product.imageUrl} />

         <ProductInfo>
            <p>{product.name}</p>
            <p>{product.price}</p>
         </ProductInfo>
      </ProductContainer>
   );
}
 
export default ProductItem;