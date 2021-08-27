
import './App.css';
import NavBar from "./component/NavBar"
import MainSection from './component/MainSection'
import SideBar from "./component/SideBar"
import Footer from "./component/Footer"
import CartScreen from "./component/CartScreen"
import ProductDetails from "./component/ProductDetails"
import {BrowserRouter,Route} from 'react-router-dom'
import SignInScreen from './component/SignInScreen'
import RegisterScreen from "./component/RegisterScreen"
import ProductsScreen from "./component/ProductsScreen"
import ShippingScreen from "./component/ShippingScreen"
import PaymentScreen from "./component/PaymentScreen"
import PlaceOrderScreen from "./component/PlaceOrderScreen"
function App() {

  return (
    <BrowserRouter>
    <div className="App grid-container">
    <NavBar/>
    <SideBar />
    <Route path='/signin' component={SignInScreen} />
    <Route path='/register' component={RegisterScreen} />
    <Route path='/products' component={ProductsScreen} />
    <Route path='/shipping' component={ShippingScreen} />
    <Route path='/payment' component={PaymentScreen} />
    <Route path='/placeorder' component={PlaceOrderScreen} />

    <Route path='/product/:id' component={ProductDetails} />
    <Route path='/' exact={true} component={MainSection} />
    <Route path='/cart/:id?' component={CartScreen} />
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
