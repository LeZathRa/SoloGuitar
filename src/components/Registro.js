import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate(); // Initialize the hook for navigation

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Basic validation: Check if password and confirmPassword match
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Simulate registration logic here
    const registrationData = {
      nombre,
      correo,
      password,
    };

    console.log('User registered:', registrationData);

    // After registration, redirect to the "Completar Registro" page
    navigate('/completar-registro');
  };

  return (
    <div className="registro-container">
      <div className="formulario">
        <h2>Registro</h2>
        <div className="avatar">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </div>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirme su contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
        <button className="google-signup">
          <i className="fa fa-google"></i> Registrarse con Google
        </button>
      </div>
    </div>
  );
}

export default Registro;
