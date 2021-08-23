import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import {productListReducer,productDetailsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import thunk from 'redux-thunk'

const initialState={}
const reducer = combineReducers({
  productList:productListReducer,
  productDetails:productDetailsReducer,
  cart:cartReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;
