
import './App.css';
import NavBar from "./component/NavBar"
import MainSection from './component/MainSection'
import SideBar from "./component/SideBar"
import Footer from "./component/Footer"
import CartScreen from "./component/CartScreen"
import ProductDetails from "./component/ProductDetails"
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App grid-container">
    <NavBar/>
    <SideBar />
    <Route path='/product/:id' component={ProductDetails} />
    <Route path='/' exact={true} component={MainSection} />
    <Route path='/cart/:id?' component={CartScreen} />
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
