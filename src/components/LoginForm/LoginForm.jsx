import { useState } from 'react';
import "./Loginform.css"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email: ${email}, Password: ${password}");
    // Aquí puedes implementar la lógica para procesar el login
    // Por ejemplo, enviar los datos a un servidor, validar, etc.
  };

  return (
    <div className="login-container">
      <h2>Bienvenido a KO.MATES</h2>
      <form className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" className="login-button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        ¿No tienes cuenta? <a href="#">Crear una cuenta</a>
      </p>
    </div>
  );
};

export default LoginForm;