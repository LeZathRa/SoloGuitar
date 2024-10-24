// Comunidad.js
import React from 'react';
import './Comunidad.css'; // Crear este archivo para aplicar los estilos

function Comunidad() {
  return (
    <div className="comunidad-container">
      <header className="comunidad-header">
        <nav className="comunidad-nav">
          <ul>
            <li className="active">Tendencias</li>
            <li>Recientes</li>
            <li>Nivel Básico</li>
            <li>Nivel Intermedio</li>
            <li>Nivel Avanzado</li>
          </ul>
        </nav>
      </header>

      <div className="comunidad-body">
        {/* Sidebar de perfil a la derecha */}
        <aside className="sidebar">
          <div className="profile-info">
            <p>Me gusta: 0</p>
            <p>Seguidos: 0</p>
            <p>Seguidores: 0</p>
            <p>Tus publicaciones: 0</p>
          </div>
        </aside>

        {/* Sección de publicaciones */}
        <section className="feed">
          <div className="post-form">
            <div className="post-avatar">
              <img src="/user-avatar.png" alt="avatar" />
            </div>
            <div className="post-input">
              <textarea placeholder="Texto"></textarea>
              <button className="attach-media">Adjuntar Multimedia</button>
            </div>
          </div>

          {/* Ejemplo de publicación */}
          <div className="post">
            <div className="post-avatar">
              <img src="/user-avatar.png" alt="avatar" />
            </div>
            <div className="post-content">
              <p className="post-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="post-media">
                <img src="/media-placeholder.png" alt="media" />
              </div>
              <div className="post-hashtags">
                <span>#hashtag</span> <span>#hashtag</span> <span>#hashtag</span> <span>#hashtag</span>
              </div>
              <div className="post-comments">
                <p>Comentarios</p>
                <div className="comment">
                  <img src="/user-avatar.png" alt="comment-avatar" />
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Comunidad;
