// import data from './database/products'
import '../styles/SignInScreen.css'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
// import {signin} from "../actions/userAction"
import {saveProduct} from '../actions/productActions'

function ProductsScreen(props){
  const [name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[image,setimage]=useState('')
  const[brand,setBrand]=useState('')
  const[category,setCategory]=useState('')
  const[countInStock,setCountInStock]=useState('')
  const[description,setDescription]=useState('')

  const productSave=useSelector(state=>state.productSave)
  const {loading:loadingSave, success:successSave, error:errorSave}=productSave;

const dispatch = useDispatch()
useEffect(()=>{


},[]);
const submitHandler = (e) =>{
  e.preventDefault()
  dispatch(saveProduct({name:name,price:price,image:image,brand:brand,category:category,countInStock:countInStock,description:description}));
}

  return(

    <div className="signin__form" >
      <form onSubmit={submitHandler}>
        <ul className="signin__form__container">
        <li>
            <h2>Create Product</h2>
        </li>
        <li>
          {loadingSave&&<div>Loading</div>}
          { errorSave && <div>{errorSave} </div>}
        </li>
          <li>
            <lable htmlFor="name">Name</lable>
            <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
          </li>
          <li>
            <lable htmlFor="price">Price</lable>
            <input type="text" name="price" id="price" onChange={(e)=>setPrice(e.target.value)}></input>
          </li>

          <li>
            <lable htmlFor="image">Image</lable>
            <input type="text" name="image" id="image" onChange={(e)=>setimage(e.target.value)}></input>
          </li>



          <li>
            <lable htmlFor="brand">Brand</lable>
            <input type="text" name="brand" id="brand" onChange={(e)=>setBrand(e.target.value)}></input>
          </li>

          <li>
            <lable htmlFor="CountInStock">CountInStock</lable>
            <input type="text" name="countInStock" id="countInStock" onChange={(e)=>setCountInStock(e.target.value)}></input>
          </li>

          <li>
            <lable htmlFor="category">Category</lable>
            <input type="text" name="category" id="category" onChange={(e)=>setCategory(e.target.value)}></input>
          </li>





          <li>
            <lable htmlFor="description">Description</lable>
            <textarea type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
          </li>


          <li>
            <button type="submit" className="button primary">Create</button>
          </li>


        </ul>

      </form>


    </div>
  )
}
export default ProductsScreen
