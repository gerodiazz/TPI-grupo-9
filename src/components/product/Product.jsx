import PropTypes from 'prop-types';

const Product = ({ product, addToCart }) => {
  const { name, description, price, image } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <button onClick={() => addToCart(product)}>Añadir al Carrito</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;