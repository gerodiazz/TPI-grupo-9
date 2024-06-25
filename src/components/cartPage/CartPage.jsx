import PropTypes from 'prop-types';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    //  lógica para procesar el checkout
  
    alert('¡Compra realizada con éxito!');
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeFromCart(item)}>Eliminar</button>
              </div>
            </div>
          ))}
          <hr />
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={handleCheckout}>Realizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
  removeFromCart: PropTypes.func,
};

export default CartPage;