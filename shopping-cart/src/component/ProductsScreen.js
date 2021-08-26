// import data from './database/products'
import '../styles/SignInScreen.css'
import {Link} from 'react-router-dom'
import '../styles/ProductDetails.css'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
// import {signin} from "../actions/userAction"
import {saveProduct,listProducts} from '../actions/productActions'

function ProductsScreen(props){
  const [modalVisible, setModalVisible]=useState(false)
  const [_id,setId]=useState('')
  const [name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[image,setImage]=useState('')
  const[brand,setBrand]=useState('')
  // const[rating,setRating]=useState('')
  const[category,setCategory]=useState('')
  const[countInStock,setCountInStock]=useState('')
  // const[numReviews,setNumReviews]=useState('')
  const[description,setDescription]=useState('')
  const productList=useSelector(state=>state.productList)
  const {loading,products,error} = productList
  const productSave=useSelector(state=>state.productSave)
  const {loading:loadingSave, success:successSave, error:errorSave}=productSave;
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(listProducts())

},[]);
const openModal = (product)=>{
  setModalVisible(true)
  setId(product._id)
  setName(product.name)
  setPrice(product.price)
  setImage(product.image)
  setBrand(product.brand)
  setCategory(product.category)
  setCountInStock(product.countInStock)
  setDescription(product.description)


}
const submitHandler = (e) =>{
  e.preventDefault()
  dispatch(saveProduct({id:_id,name:name,price:price,image:image,brand:brand,category:category,countInStock:countInStock,description:description}));
}

  return(
    <div className="content content-margined">
        <div className="product-header">
          <h3>Products</h3>
          <button onClick={()=>openModal({})}>Create Product</button>
        </div>
        {modalVisible &&
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
                  <input type="text" value={name}  name="name" id="name" onChange={(e)=>setName(e.target.value)}></input>
                </li>
                <li>
                  <lable htmlFor="price">Price</lable>
                  <input type="text" name="price" value={price} id="price" onChange={(e)=>setPrice(e.target.value)}></input>
                </li>

                <li>
                  <lable htmlFor="image">Image</lable>
                  <input type="text" name="image" id="image" value={image} onChange={(e)=>setImage(e.target.value)}></input>
                </li>



                <li>
                  <lable htmlFor="brand">Brand</lable>
                  <input type="text" name="brand" value={brand} id="brand" onChange={(e)=>setBrand(e.target.value)}></input>
                </li>

                <li>
                  <lable htmlFor="CountInStock">CountInStock</lable>
                  <input type="text" name="countInStock"value={countInStock} id="countInStock" onChange={(e)=>setCountInStock(e.target.value)}></input>
                </li>

                <li>
                  <lable htmlFor="category">Category</lable>
                  <input type="text" value = {category} name="category" id="category" onChange={(e)=>setCategory(e.target.value)}></input>
                </li>





                <li>
                  <lable htmlFor="description">Description</lable>
                  <textarea type="text" value={description} name="description" id="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                </li>


                <li>
                  <button type="submit" className="button primary">{_id?"Update":"Create"}</button>
                </li>
                <li>
                  <button type="button" onClick={()=>setModalVisible(false)} className="button secondary">Back</button>
                </li>


              </ul>

            </form>


          </div>
        }


        <div className="product-list">
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

            {products===undefined?'': products.map(product=>(
              <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                  <button onClick={()=>openModal(product)}>Edit</button>
                  <button>Delete</button>
                  </td>
              </tr>
            )) }

            </tbody>
          </table>
        </div>
    </div>

  )
}
export default ProductsScreen
