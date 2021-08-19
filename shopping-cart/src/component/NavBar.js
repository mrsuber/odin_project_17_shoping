import '../styles/NavBar.css'
import Logo from "./navComponet/Logo"
import Search from "./navComponet/SearchBar"
import Order from "./navComponet/Order"
import Basket from "./navComponet/Basket"

function NavBar(){
  return(
    <div className="nav__container">
      this is the nave bare with its componet
      <Logo/>
      <Search/>
      <Order/>
      <Basket/>
    </div>
  )
}

export default NavBar
