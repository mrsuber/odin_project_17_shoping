import '../styles/MainSection.css'
import Product from './Product'
// import data from './database/products'
import {useState,useEffect} from 'react'
// import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Cookie from 'js-cookie'
//
// console.log(Cookie.get("foo"))


function MainSection(){
  console.log(Cookie.get("cartItems"))

  const productList = useSelector(state=>state.productList)
  const {products,loading, error} = productList;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(listProducts())
    return () =>{

    }
  },[])
  return(
    loading?<div>loading...</div>:
    error?<div>{error}</div>:
    <main className="main">
    <div className="content">
        <ul className="products">
          {
          products.map(product=>
              <li>

                <Product

                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
                numReviews={product.numReviews}
                />
              </li>
            )
          }


        </ul>
    </div>

    </main>
  )
}
export default MainSection
