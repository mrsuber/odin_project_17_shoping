import '../styles/NavBar.css'
import Logo from "./navComponet/Logo"
import Search from "./navComponet/SearchBar"
import Card from "./navComponet/Card"
import Basket from "./navComponet/Basket"
import Signin from "./navComponet/Signin"

function NavBar(){
  return(
    <header className="header">
    
      <Logo/>
      <Search/>
      <Basket/>
      <div className="header__links">
          <Card/>
          <Signin/>
      </div>

    </header>
  )
}

export default NavBar
