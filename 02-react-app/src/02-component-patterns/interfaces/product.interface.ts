import {ReactElement} from "react";
import {Props as ProductCardProps} from "../components/ProductCard";
import {Props as ProductTitleProms} from "../components/ProductTitle";
import {Props as ProductImageProps} from "../components/ProductImage";
import {Props as ProductButtonsProps} from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCarHOCProps {
  ({children, product}: ProductCardProps): ReactElement;

  Title: (Props: ProductTitleProms) => ReactElement;
  Buttons: (Props: ProductButtonsProps) => ReactElement;
  Image: (Props: ProductImageProps) => ReactElement
}