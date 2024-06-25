import { useState } from 'react';
import './Registrationform.css'; // Importa el archivo CSS donde están definidos los estilos

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí puedes implementar la lógica para procesar el registro
    // Por ejemplo, enviar los datos a un servidor, validar, etc.
    console.log("Nombre: ${name}, Email: ${email}, Password: ${password}");
  };

  return (
    <div className="registration-container">
      <h2>Crear cuenta</h2>
      <form className="registration-form">
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="button" onClick={handleRegister}>
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;