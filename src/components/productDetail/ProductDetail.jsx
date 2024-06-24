import { useState } from 'react';
import PropTypes from "prop-types"

const ProductDetailPage = ({ products, match }) => {
  const productId = parseInt(match.params.productId, 10);

  const product = products.find(prod => prod.id === productId);

  const [cart, setCart] = useState([]); // Estado del carrito de compras

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  const addToCart = () => {
    // Agregar el producto al carrito
    setCart([...cart, product]);
    console.log(`Añadido al carrito: ${product.name}`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <div className="product-detail">
        <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
        <p>Precio: ${product.price}</p>
        <button onClick={addToCart}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

ProductDetailPage.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    match: PropTypes.object.isRequired, 
  };

export default ProductDetailPage;
