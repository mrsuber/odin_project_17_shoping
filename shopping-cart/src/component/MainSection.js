import '../styles/MainSection.css'
import Product from './Product'
import data from './database/products'

function MainSection(){
  return(
    <main className="main">
    <div className="content">
        <ul className="products">
          {
            data.products.map(product=>
              <li>

                <Product

                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
                numReviews={product.numReviews}
                />
              </li>
            )
          }


        </ul>
    </div>

    </main>
  )
}
export default MainSection
