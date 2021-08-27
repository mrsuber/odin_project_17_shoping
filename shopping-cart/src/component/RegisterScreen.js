// import data from './database/products'
import '../styles/SignInScreen.css'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import {register} from "../actions/userAction"

function RegisterScreen(props){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[rePassword,setRePassword]=useState('')
  const userRegister=useSelector(state=>state.userRegister)
  const {loading,userInfo,error}=userRegister;
  const redirect = props.location.search?props.location.search.split("=")[1]:'/'
  const dispatch = useDispatch()


useEffect(()=>{
  if(userInfo){
    props.history.push(redirect)
  }

},[userInfo]);
const submitHandler = (e) =>{
  e.preventDefault()
  dispatch(register(name,email,password));
}

  return(

    <div className="signin__form" >
      <form onSubmit={submitHandler}>
        <ul className="signin__form__container">
        <li>
            <h2>Create Account</h2>
        </li>
        <li>
          {loading &&<div>Loading</div>}
          { error && <div>{error} </div>}
        </li>
          <li>
            <lable htmlFor="name">Full Name</lable>
            <input type="name" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
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
            <lable htmlFor="rePassword">Re-Enter Password</lable>
            <input type="rePassword" name="rePassword" id="rePassword" onChange={(e)=>setRePassword(e.target.value)}></input>
          </li>
          <li>
            <button type="submit" className="button primary">Register</button>
          </li>
          <li>
            Already have an account?
            <Link to={redirect==="/"?"signin":"signin?redirect="+redirect} className="button secondary ">Create your amazona account</Link>
          </li>


        </ul>

      </form>


    </div>
  )
}
export default RegisterScreen
