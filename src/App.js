import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registro from './components/Registro';
import CompletarRegistro from './components/CompletarRegistro';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">
              <img src="/logo.png" alt="SoloGuitar" />
              <span>SoloGuitar</span>
            </div>
            <ul className="menu">
              <li>Tutoriales</li>
              <li>Comunidad</li>
              <li>Academias afiliadas</li>
              <li>Canciones</li>
              <li>
                <button className="login-button">Iniciar sesión</button>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            {/* Ruta para el registro */}
            <Route path="/" element={<Registro />} />
            {/* Ruta para completar el registro */}
            <Route path="/completar-registro" element={<CompletarRegistro />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <p>Términos y condiciones | Política de seguridad | Política de privacidad</p>
          <p>Copyright SoloGuitar 2024 - 2024 © Todos los derechos reservados</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
