// import data from './database/products'
import '../styles/SignInScreen.css'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import {saveShipping} from "../actions/cartActions"
import CheckOutSteps from './CheckOutSteps'

function ShippingScreen(props){
  const [address,setAddress]=useState('')
  const [city,setCity]=useState('')
  const[postalCode,setPostalCode]=useState('')
  const[country,setCountry]=useState('')
  const dispatch = useDispatch()



const submitHandler = (e) =>{
  e.preventDefault()
  dispatch(saveShipping({address,city,postalCode,country}));
  props.history.push("/payment")
}

  return(

    <div>
    <CheckOutSteps step1 step2 ></CheckOutSteps>

    <div className="signin__form" >
      <form onSubmit={submitHandler}>
        <ul className="signin__form__container">
        <li>
            <h2>Shipping</h2>
        </li>

          <li>
            <lable htmlFor="address">Address</lable>
            <input type="address" name="address" id="address" onChange={(e)=>setAddress(e.target.value)}></input>
          </li>

          <li>
            <lable htmlFor="city">City</lable>
            <input type="city" name="city" id="city" onChange={(e)=>setCity(e.target.value)}></input>
          </li>


          <li>
            <lable htmlFor="postalcode">Postal Code</lable>
            <input type="postalcode" name="postalcode" id="postalcode" onChange={(e)=>setPostalCode(e.target.value)}></input>
          </li>


          <li>
            <lable htmlFor="country">Country</lable>
            <input type="country" name="country" id="country" onChange={(e)=>setCountry(e.target.value)}></input>
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
export default ShippingScreen
