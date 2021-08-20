import '../styles/MainSection.css'
import Product from './Product'


function MainSection(){
  return(
    <main className="main">
    <div className="content">
        <ul className="products">
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
        </ul>
    </div>

    </main>
  )
}
export default MainSection
