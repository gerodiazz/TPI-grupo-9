import PropTypes from 'prop-types';

const CartPage = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Aquí puedes implementar la lógica para procesar el checkout
    // Por ejemplo, enviar los productos a un servidor, calcular el total, etc.
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
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartPage;