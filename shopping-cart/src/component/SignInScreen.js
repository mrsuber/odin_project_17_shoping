// import data from './database/products'
import '../styles/SignInScreen.css'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import {signin} from "../actions/userAction"

function SignInScreen(props){
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const userSignin=useSelector(state=>state.userSignin)
  const {loading,userInfo,error}=userSignin;

const dispatch = useDispatch()
useEffect(()=>{
  if(userInfo){
    props.history.push("/")
  }

},[userInfo]);
const submitHandler = (e) =>{
  e.preventDefault()
  dispatch(signin(email,password));
}

  return(

    <div className="signin__form" >
      <form onSubmit={submitHandler}>
        <ul className="signin__form__container">
        <li>
            <h2>Sign-In</h2>
        </li>
        <li>
          {loading &&<div>Loading</div>}
          { error && <div>{error} </div>}
        </li>
          <li>
            <lable htmlFor="email">Email</lable>
            <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
          </li>

          <li>
            <lable htmlFor="password">Password</lable>
            <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}></input>
          </li>
          <li>
            <button type="submit" className="button primary">Sign In</button>
          </li>
          <li>
            New to amazona?
          </li>
          <li>
            <Link to="/register" className="button secondary ">Create your amazona account</Link>
          </li>

        </ul>

      </form>


    </div>
  )
}
export default SignInScreen
