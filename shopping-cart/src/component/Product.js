import "../styles/Product.css"
import product1 from '../image/product/product1.webp'

function Product(){
  return(
    <div className="product">
      <img className="product_image" src={product1} alt="product1" />
      <div className="product_name">
      <a href="#"> Slim Shirt</a></div>
      <div className="poduct_brand">Nike</div>
      <div className="product_price">$60</div>
      <div className="product_rating">4.5 Stars(10 Reviews)</div>
    </div>
  )
}

export default Product
