import {ProductCard} from "../components";

const product = {
  id: '1',
  title: 'Coffee mug- card',
  img: './coffee-mug.png'
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <hr/>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <ProductCard product={product}>
          <ProductCard.Image></ProductCard.Image>
          <ProductCard.Title></ProductCard.Title>
          <ProductCard.Buttons></ProductCard.Buttons>
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image></ProductCard.Image>
          <ProductCard.Title title={"sss"}></ProductCard.Title>
          <ProductCard.Buttons></ProductCard.Buttons>
        </ProductCard>
      </div>
    </div>
  )
}