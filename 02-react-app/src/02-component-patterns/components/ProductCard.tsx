import styles from '../styles/styles.module.css';
import {useProduct} from "../hooks/useProduct";
import {Context, createContext} from "react";
import {ProductCardProps, ProductContextProps} from "../interfaces/product.interface";


export const ProductContext: Context<ProductContextProps> = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product}: ProductCardProps) => {
  const {counter, increaseBy} = useProduct()
  return (
    <Provider value={{counter, increaseBy, product}}>
      <div className={styles.productCard}>
        {children}
        {/*<ProductImage img={product.img}></ProductImage>*/}
        {/*/!*<img className={styles.productImg} src="./coffee-mug.png" alt="Coffee mug"/>*!/*/}
        {/*/!*<img className={styles.productImg} src={noImage} alt="Coffee mug"/>*!/*/}
        {/*<ProductTitle title={product.title}></ProductTitle>*/}
        {/*<ProductButtons counter={counter} increaseBy={increaseBy}></ProductButtons>*/}
      </div>
    </Provider>
  )
}