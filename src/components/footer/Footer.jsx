const Footer = () => {
  return (
    <footer>
      <div className="footer-sections">
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@tuecommerce.com</p>
          <p>Teléfono: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TuEcommerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;