import "../styles/Product.css"
// import product1 from '../image/product/product1.webp'
import {Link} from 'react-router-dom'

function Product({image,name,brand,price,rating,numReviews,id}){

  return(
    <div className="product">
      <Link to={'/product/'+id}>
      <img className="product_image" src={image} alt={name} />
      </Link>
      <div className="product_name">
      <Link to={'/product/'+id}> {name}</Link></div>
      <div className="poduct_brand">{brand}</div>
      <div className="product_price">&{price}</div>
      <div className="product_rating">{rating} Stars({numReviews} Reviews)</div>
    </div>
  )
}

export default Product
