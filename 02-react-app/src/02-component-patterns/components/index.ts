import {ProductCard as ProductCardHOC} from "./ProductCard";
import {ProductTitle} from "./ProductTitle";
import {ProductImage} from "./ProductImage";
import {ProductButtons} from "./ProductButtons";
import {ProductCarHOCProps} from "../interfaces/product.interface";

export const ProductCard: ProductCarHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});