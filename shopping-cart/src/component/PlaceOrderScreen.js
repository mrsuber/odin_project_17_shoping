import '../styles/PlaceOrderScreen.css'
import {useEffect} from 'react'
import {addToCart} from '../actions/cartActions'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import {removeFromCart} from '../actions/cartActions'
import CheckOutSteps from './CheckOutSteps'

function PlaceOrderScreen(props){
  const cart = useSelector(state=>state.cart)

  const {cartItems,shipping,payment}=cart
  if(!shipping){
    props.history.push("/shipping");
  }else if(!payment){
    props.history.push("/payment");
  }

const itemsPrice = cartItems.reduce((a,c)=>a+c.price*c.qty,0);
const shippingPrice = itemsPrice>100?0:10;
const taxPrice= 0.15*itemsPrice;
const totalPrice = itemsPrice+shippingPrice+taxPrice;

  const dispatch = useDispatch();

const placeOrderHandler=()=>{

}
  useEffect(()=>{


  },[]);

  const checkoutHandler=()=>{
    props.history.push('/signin?redirect=shipping')
  }

  return(
    <div>
      <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>

      <div className="placeorder">
        <div className="placeorder__info">
        <div>
          <h3>
            Shipping
          </h3>
          <div>
            {cart.shipping.address},{cart.shipping.city},{cart.shipping.postalCode},{cart.shipping.country}
          </div>
          <div>
            <h3>Payment</h3>
            <div>
            Payment Method: {cart.payment.paymentMethod}
            </div>
          </div>

          <div>
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
                        Qty:{item.qty}


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
        </div>

        </div>
        <div className="placeorder__action">
        <ul>
          <li>
            <button className="button primary full_width" onClick={placeOrderHandler}> Place Order</button>
          </li>
          <li>
            <h3>Order Summary</h3>
          </li>
          <li>
            <div>Items</div>
            <div>${itemsPrice}</div>
          </li>

          <li>
            <div>Shipping</div>
            <div>${shippingPrice}</div>
          </li>

          <li>
            <div>Tax</div>
            <div>${taxPrice}</div>
          </li>
          <li>
            <div>Order Total</div>
            <div>${totalPrice}</div>
          </li>
        </ul>


        </div>

      </div>
    </div>

  )
}

export default PlaceOrderScreen
