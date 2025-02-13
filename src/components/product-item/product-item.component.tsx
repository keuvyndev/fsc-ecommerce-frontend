import { FunctionComponent } from "react";
import {BsCartPlus} from 'react-icons/bs'

// Utilities
import Product from "../../types/product.types";

//Styles
import { ProductContainer, ProductImage, ProductInfo } from "./product-item.styles";
import CustomButton from "../custom-button/custom-buttom.component";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/reducers/cart/cart.actions";

interface ProductItemProps{
   product: Product
}

const ProductItem:FunctionComponent<ProductItemProps> = ({product}) => {

   const dispatch = useDispatch();

   const handleAddToCartClick = () => {
      dispatch(addProductToCart(product))
   }

   return ( 
      <ProductContainer>
         <ProductImage imageUrl={product.imageUrl} >
            <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>Adicionar ao Carrinho</CustomButton>
         </ProductImage>
         <ProductInfo>
            <p>{product.name}</p>
            <p>R$ {product.price}</p>
         </ProductInfo>
      </ProductContainer>
   );
}
 
export default ProductItem;