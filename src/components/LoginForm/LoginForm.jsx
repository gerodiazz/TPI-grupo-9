import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica para procesar el login
    // Por ejemplo, enviar los datos a un servidor, validar, etc.
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h2>Bienvenido a KO.MATES</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>
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