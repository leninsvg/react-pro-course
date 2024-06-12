import {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductTitle = ({title}: { title?: string }) => {
  const {product} = useContext(ProductContext);
  const productTitle = title || product.title;
  return (
    <span className={styles.productDescription}>{productTitle}</span>
  );
}
