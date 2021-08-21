import '../../styles/Logo.css'

function Logo(){
  function openMenu(){
    document.querySelector('.sidebar').classList.add('open')
  }
  return(
    <div className="brand">
    <button onClick={openMenu}>
    &#9776;
    </button>
      <a href="index.html">amazona</a>
    </div>
  )
}

export default Logo
