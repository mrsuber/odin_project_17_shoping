import data from './database/products'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
function ProductDetails(props){

  const product = data.products.find(product=>product.id===Number(props.match.params.id))

  return(
    <div >
    <div className="back__to__result">
      <Link to="/">Back to result</Link>
    </div>
    <div className="details">
    <div className="details__image">
      <img src={product.image} alt="product"/>
    </div>
    <div className="details__info">
      <ul>
        <li>  <h3>{product.name}</h3></li>
        <li>
          {product.rating} Stars ({product.numReviews} Rewiews)
        </li>
        <li>Price: <b>${product.price}</b></li>
        <li>
        Description:
        <div>{product.description}</div>
        </li>
      </ul>

    </div>
    <div className="details__action">
        <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.price}</li>
            <li>Qty: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            </li>
            <li><button className="button">Add To Card</button></li>


        </ul>
    </div>

    </div>

    </div>
  )
}
export default ProductDetails
