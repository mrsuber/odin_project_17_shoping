import '../styles/CartScreen.css'
import {useEffect} from 'react'
import {addToCart} from '../actions/cartActions'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import {removeFromCart} from '../actions/cartActions'

function CartScreen(props){
  const cart = useSelector(state=>state.cart)

  const {cartItems}=cart

  const productId=props.match.params.id;
  const qty = props.location.search?Number(props.location.search.split("=")[1]):1;

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId)=>{
    dispatch(removeFromCart(productId))
  }
  useEffect(()=>{
    if(productId){
      dispatch(addToCart(productId,qty))
    }
  },[])

  const checkoutHandler=()=>{
    props.history.push('/signin?redirect=shipping')
  }

  return(
    <div className="cart">
      <div className="cart__list">
          <ul className="cart__list__container">
            <li>
                <h3>
                    Shopping Cart
                </h3>
                <div>
                    Price
                </div>
            </li>
            {
              cartItems.length===0?
              <div>
                Cart is empty
              </div>
              :
              cartItems.map(item=>
                <li>
                <div className="cart__image">
                  <img src={item.image} alt="product" />
                </div>

                  <div className="cart__name">
                      <div>
                      <Link to={"/product/"+item.product}>
                        {item.name}
                      </Link>

                      </div>

                      <div>
                        Qty:
                          <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,e.target.value))}>
                            {[...Array(item.countInStock).keys()].map(x=>
                            <option key={x+1} value={x+1}>{x+1}</option>

                          )}
                          </select>
                          <button className="button" type="button" onClick={()=>removeFromCartHandler(item.product)}>
                            Delete
                          </button>
                      </div>
                  </div>
                  <div className="cart__price">
                    ${item.price}
                  </div>
                  </li>

              )
            }
          </ul>
      </div>
      <div className="cart__action">
        <h3>
            Subtotal ({cartItems.reduce((a,c)=>a+c.qty,0)} items)
            :
            $ {cartItems.reduce((a,c)=> a+c.price*c.qty,0)}
        </h3>
        <button onClick={checkoutHandler} className="button primary full_width" disabled={cartItems.length===0}>Proceed to Checkout</button>
      </div>

    </div>
  )
}

export default CartScreen
