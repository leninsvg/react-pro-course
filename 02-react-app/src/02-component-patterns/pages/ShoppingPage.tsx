import {ProductCard} from "../components";
import "../styles/custom-stype.css"

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
        <ProductCard
          className="bg-dark"
          product={product}>
          <ProductCard.Image className="custom-image"></ProductCard.Image>
          <ProductCard.Title className="text-white text-bold"></ProductCard.Title>
          <ProductCard.Buttons className="custom-buttons"></ProductCard.Buttons>
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image></ProductCard.Image>
          <ProductCard.Title title={"sss"}></ProductCard.Title>
          <ProductCard.Buttons></ProductCard.Buttons>
        </ProductCard>
        <ProductCard product={product} style={{
          backgroundColor: '#70D1f8'
        }}>
          <ProductCard.Image style={{
            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
          }}></ProductCard.Image>
          <ProductCard.Title style={{
            fontWeight: 'bold'
          }} title={"sss"}></ProductCard.Title>
          <ProductCard.Buttons style={{
            display: "flex",
            justifyContent: "end"
          }}></ProductCard.Buttons>
        </ProductCard>
      </div>
    </div>
  )
}