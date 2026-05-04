import React, { useState } from 'react';
import './ControlPanel.css';

interface ControlPanelProps {
  onAgregar: (valor: number) => void;
  onEliminar: (valor: number) => void;
  onBuscar: (valor: number) => void;
  onRecorridoInorden: () => void;
  onRecorridoPreorden: () => void;
  onRecorridoPostorden: () => void;
  onObtenerAltura: () => void;
  onObtenerPeso: () => void;
  onObtenerNivel: (valor: number) => void;
  onContarHojas: () => void;
  onObtenerMenor: () => void;
  onObtenerMayor: () => void;
  onImprimirAmplitud: () => void;
  onEstaVacio: () => void;
  onBorrarArbol: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onAgregar,
  onEliminar,
  onBuscar,
  onRecorridoInorden,
  onRecorridoPreorden,
  onRecorridoPostorden,
  onObtenerAltura,
  onObtenerPeso,
  onObtenerNivel,
  onContarHojas,
  onObtenerMenor,
  onObtenerMayor,
  onImprimirAmplitud,
  onEstaVacio,
  onBorrarArbol,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [nivelValue, setNivelValue] = useState('');

  const handleAgregar = () => {
    const valor = parseInt(inputValue);
    if (!isNaN(valor)) {
      onAgregar(valor);
      setInputValue('');
    }
  };

  const handleEliminar = () => {
    const valor = parseInt(inputValue);
    if (!isNaN(valor)) {
      onEliminar(valor);
      setInputValue('');
    }
  };

  const handleBuscar = () => {
    const valor = parseInt(inputValue);
    if (!isNaN(valor)) {
      onBuscar(valor);
      setInputValue('');
    }
  };

  const handleObtenerNivel = () => {
    const valor = parseInt(nivelValue);
    if (!isNaN(valor)) {
      onObtenerNivel(valor);
      setNivelValue('');
    }
  };

  return (
    <div className="control-panel">
      <h2>🎮 Panel de Control</h2>

      {/* Sección de Inserción y Eliminación */}
      <div className="control-section">
        <h3>Operaciones Básicas</h3>
        <div className="input-group">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa un valor"
            onKeyPress={(e) => e.key === 'Enter' && handleAgregar()}
          />
          <button onClick={handleAgregar} className="btn btn-primary">
            ➕ Agregar
          </button>
          <button onClick={handleBuscar} className="btn btn-info">
            🔍 Buscar
          </button>
          <button onClick={handleEliminar} className="btn btn-danger">
            🗑️ Eliminar
          </button>
        </div>
      </div>

      {/* Sección de Recorridos */}
      <div className="control-section">
        <h3>Recorridos</h3>
        <div className="button-group">
          <button onClick={onRecorridoInorden} className="btn btn-secondary">
            Inorden
          </button>
          <button onClick={onRecorridoPreorden} className="btn btn-secondary">
            Preorden
          </button>
          <button onClick={onRecorridoPostorden} className="btn btn-secondary">
            Postorden
          </button>
          <button onClick={onImprimirAmplitud} className="btn btn-secondary">
            Amplitud (BFS)
          </button>
        </div>
      </div>

      {/* Sección de Propiedades */}
      <div className="control-section">
        <h3>Propiedades del Árbol</h3>
        <div className="button-group">
          <button onClick={onEstaVacio} className="btn btn-info">
            ¿Está Vacío?
          </button>
          <button onClick={onObtenerAltura} className="btn btn-info">
            Altura
          </button>
          <button onClick={onObtenerPeso} className="btn btn-info">
            Peso (# nodos)
          </button>
          <button onClick={onContarHojas} className="btn btn-info">
            Contar Hojas
          </button>
        </div>
      </div>

      {/* Sección de Búsqueda de Extremos */}
      <div className="control-section">
        <h3>Valores Extremos</h3>
        <div className="button-group">
          <button onClick={onObtenerMenor} className="btn btn-warning">
            Menor
          </button>
          <button onClick={onObtenerMayor} className="btn btn-warning">
            Mayor
          </button>
        </div>
      </div>

      {/* Sección de Nivel */}
      <div className="control-section">
        <h3>Obtener Nivel</h3>
        <div className="input-group">
          <input
            type="number"
            value={nivelValue}
            onChange={(e) => setNivelValue(e.target.value)}
            placeholder="Valor del nodo"
            onKeyPress={(e) => e.key === 'Enter' && handleObtenerNivel()}
          />
          <button onClick={handleObtenerNivel} className="btn btn-info">
            Obtener Nivel
          </button>
        </div>
      </div>

      {/* Sección de Limpieza */}
      <div className="control-section danger-section">
        <h3>Operaciones Destructivas</h3>
        <button onClick={onBorrarArbol} className="btn btn-danger full-width">
          🔴 Borrar Árbol Completo
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
