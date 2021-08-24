// import data from './database/products'
import '../styles/SignInScreen.css'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'

function SignInScreen(props){
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')

const dispatch = useDispatch()
useEffect(()=>{

},[]);
const submitHandler = (e) =>{
  e.preventDefault()
}

  return(

    <div className="form" >
      <form onSubmit={submitHandler}>
        <ul className="form-container">
        <li>
            <h3>Signin</h3>
        </li>
          <li>
            <lable for="email">Email</lable>
            <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
          </li>

          <li>
            <lable for="password">Password</lable>
            <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
          </li>
          <li>
            <button type="submit" className="button primary">Sign In</button>
          </li>
          <li>
            New to amazona?
          </li>
          <li>
            <Link to="/register" className="button full-width">Create your amazona account</Link>
          </li>

        </ul>

      </form>


    </div>
  )
}
export default SignInScreen
