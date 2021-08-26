import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import {productListReducer,productDetailsReducer,productSaveReducer,productDeleteReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import {userSigninReducer, userRegisterReducer} from "./reducers/userReducers"


function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}

let loginUserCookie=String(Cookie.get("userInfo"))
let cardItemsCookie=String(Cookie.get("cartItems"))

let cartItems
let userInfo
if(isJson(loginUserCookie)===false && isJson(cardItemsCookie)===false){
 cartItems = [];
  userInfo =null;

}
if(isJson(loginUserCookie)===false && isJson(cardItemsCookie)===true){
   cartItems = JSON.parse(cardItemsCookie);
    userInfo =null;
}
if(isJson(loginUserCookie)===true && isJson(cardItemsCookie)===false){
   cartItems = [];
   userInfo = JSON.parse(loginUserCookie)
}
if(isJson(loginUserCookie)===true && isJson(cardItemsCookie)===true){
   cartItems = JSON.parse(cardItemsCookie);
   userInfo = JSON.parse(loginUserCookie)
}



const initialState={cart:{cartItems},userSignin:{userInfo}}
const reducer = combineReducers({
  productList:productListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer,
  userSignin: userSigninReducer,
  userRegister:userRegisterReducer,
  productSave:productSaveReducer,
  productDelete: productDeleteReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;
