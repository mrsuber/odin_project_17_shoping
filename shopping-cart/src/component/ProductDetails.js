// import data from './database/products'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import {detailsProduct} from '../actions/productActions'


function ProductDetails(props){
const [qty,setQty]=useState(1)
const productDetails= useSelector(state=>state.productDetails)
const{product,loading,error}=productDetails;
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(detailsProduct(props.match.params.id))
},[]);
const handleAddToCart = ()=>{
    props.history.push("/cart/"+props.match.params.id+"?qtu"+qty)
}
  return(

    <div >

    <div className="back__to__result">

      <Link to="/">Back to result</Link>
    </div>
    {loading?<div>Loading....</div>:
      error?<div>{error}</div>:
      (
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
                <li>Status: {product.countInStock >0?"In Stock":"Out of stock"}</li>
                <li>Qty: <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                  {[...Array(product.countInStock).keys()].map(x=>
                    <option key={x+1} value={x+1}>{x+1}</option>
                  )}
                </select>

                </li>
                <li>
                {product.countInStock>0&&<button onClick={handleAddToCart} className="button">Add To Card</button>


              }

                </li>


            </ul>
        </div>


        </div>
      )
    }


    </div>
  )
}
export default ProductDetails
