import '../styles/SideBar.css'

function SideBar(){
  function closeMenu(){
    document.querySelector(".sidebar").classList.remove('open')
  }
  return(
    <aside className="sidebar">
    <h3>Shopping Categories</h3>
    <button onClick={closeMenu} className="sidebar-close-button">x</button>
    <ul>
        <li><a href="#">Pants</a></li>
        <li><a href="#">Shirts</a></li>
    </ul>
    </aside>
  )
}
export default SideBar
