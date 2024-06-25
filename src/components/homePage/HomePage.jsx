import Header from "../header/Header"
import Footer from "../footer/Footer"
import Product from "../product/Product"
import Proptypes from "prop-types"

const products = [
    { name: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'url1' },
    { name: 'Producto 2', description: 'Descripción del producto 2', price: 200, image: 'url2' },
    { name: 'Producto 3', description: 'Descripción del producto 3', price: 300, image: 'url3' },
  ];
  
const HomePage = ({ addToCart }) => {
    return (
      <div>
        <Header />
        <main>
          <div className="product-list">
            {products.map(product => (
              <Product key={product.name} product={product} addToCart={addToCart} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  };
  HomePage.propTypes = {
    addToCart: Proptypes.func
  };
  export default HomePage;