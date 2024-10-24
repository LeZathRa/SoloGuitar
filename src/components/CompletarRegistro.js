import React, { useState } from 'react';
import './CompletarRegistro.css';

function CompletarRegistro() {
  const [nivelExperiencia, setNivelExperiencia] = useState('');
  const [preferencias, setPreferencias] = useState([]);
  const [meta, setMeta] = useState('');
  const [horas, setHoras] = useState('');
  const [formaAprendizaje, setFormaAprendizaje] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica de completar registro (e.g., enviar los datos al backend)
  };

  const handlePreferenciasChange = (e) => {
    const { value, checked } = e.target;
    setPreferencias((prev) =>
      checked ? [...prev, value] : prev.filter((pref) => pref !== value)
    );
  };

  const handleFormaAprendizajeChange = (e) => {
    const { value, checked } = e.target;
    setFormaAprendizaje((prev) =>
      checked ? [...prev, value] : prev.filter((form) => form !== value)
    );
  };

  return (
    <div className="completar-registro-container">
      <h2>Completemos tu Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nivel de Experiencia</label>
          <div>
            <label>
              <input
                type="radio"
                value="Básico"
                checked={nivelExperiencia === 'Básico'}
                onChange={(e) => setNivelExperiencia(e.target.value)}
              />
              Básico
            </label>
            <label>
              <input
                type="radio"
                value="Intermedio"
                checked={nivelExperiencia === 'Intermedio'}
                onChange={(e) => setNivelExperiencia(e.target.value)}
              />
              Intermedio
            </label>
            <label>
              <input
                type="radio"
                value="Avanzado"
                checked={nivelExperiencia === 'Avanzado'}
                onChange={(e) => setNivelExperiencia(e.target.value)}
              />
              Avanzado
            </label>
          </div>
        </div>

        <div>
          <label>Preferencias Musicales</label>
          <div>
            {['Rock', 'Pop', 'Jazz', 'Metal', 'Cumbia'].map((pref) => (
              <label key={pref}>
                <input
                  type="checkbox"
                  value={pref}
                  checked={preferencias.includes(pref)}
                  onChange={handlePreferenciasChange}
                />
                {pref}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>¿Cuál es tu meta al aprender guitarra?</label>
          <input
            type="text"
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
            required
          />
        </div>

        <div>
          <label>¿Cuántas horas a la semana dedicarías?</label>
          <div>
            <label>
              <input
                type="radio"
                value="1-2 horas"
                checked={horas === '1-2 horas'}
                onChange={(e) => setHoras(e.target.value)}
              />
              1-2 horas
            </label>
            <label>
              <input
                type="radio"
                value="3-5 horas"
                checked={horas === '3-5 horas'}
                onChange={(e) => setHoras(e.target.value)}
              />
              3-5 horas
            </label>
            <label>
              <input
                type="radio"
                value="Más de 5 horas"
                checked={horas === 'Más de 5 horas'}
                onChange={(e) => setHoras(e.target.value)}
              />
              Más de 5 horas
            </label>
          </div>
        </div>

        <div>
          <label>¿Cómo te gustaría aprender?</label>
          <div>
            {['Video tutoriales', 'Partituras', 'Ejercicios Interactivos'].map(
              (form) => (
                <label key={form}>
                  <input
                    type="checkbox"
                    value={form}
                    checked={formaAprendizaje.includes(form)}
                    onChange={handleFormaAprendizajeChange}
                  />
                  {form}
                </label>
              )
            )}
          </div>
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CompletarRegistro;
