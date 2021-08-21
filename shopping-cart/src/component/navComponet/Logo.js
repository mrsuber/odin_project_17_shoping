import '../../styles/Logo.css'
import {Link} from 'react-router-dom'

function Logo(){
  function openMenu(){
    document.querySelector('.sidebar').classList.add('open')
  }
  return(
    <div className="brand">
    <button onClick={openMenu}>
    &#9776;
    </button>
      <Link to='/'>amazona</Link>
    </div>
  )
}

export default Logo
