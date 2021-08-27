// import data from './database/products'
import '../styles/SignInScreen.css'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import {savePayment} from "../actions/cartActions"
import CheckOutSteps from './CheckOutSteps'

function PaymentScreen(props){
  const [paymentMethod,setPaymentMethod]=useState('')

  const dispatch = useDispatch()



const submitHandler = (e) =>{
  e.preventDefault()
  dispatch(savePayment(paymentMethod));
  props.history.push("placeorder")
}

  return(

    <div>
    <CheckOutSteps step1 step2 step3></CheckOutSteps>

    <div className="signin__form" >
      <form onSubmit={submitHandler}>
        <ul className="signin__form__container">
        <li>
            <h2>Payment</h2>
        </li>

          <li>
          <input type="radio" value="paypal" name="paymentMethod" id="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)}></input>

          <lable htmlFor="address">Papal</lable>
          </li>

          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>    


        </ul>

      </form>


    </div>
    </div>



  )
}
export default PaymentScreen
