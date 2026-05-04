import { useState, useEffect } from 'react';
import type { ExecutionStep } from './BSTVisualizer';
import { BinarySearchTree } from './BSTVisualizer';
import TreeVisualization from './TreeVisualization';
import ExecutionConsole from './ExecutionConsole';
import ControlPanel from './ControlPanel';
import './App.css';

function App() {
  const [bst] = useState(() => new BinarySearchTree());
  const [treeVersion, setTreeVersion] = useState(0);
  const [steps, setSteps] = useState<ExecutionStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightedNode, setHighlightedNode] = useState<number | null>(null);
  const [lastResult, setLastResult] = useState<string>('');

  // Función auxiliar para ejecutar operaciones
  const executeOperation = (operation: () => void) => {
    operation();
    setSteps([...bst.getSteps()]);
    setCurrentStep(0);
    setTreeVersion((prev) => prev + 1);
    setHighlightedNode(null);
  };

  // Actualizar nodo destacado según el paso actual
  useEffect(() => {
    if (steps.length > 0 && currentStep < steps.length) {
      const step = steps[currentStep];
      setHighlightedNode(step.currentNode ?? null);
      setLastResult(step.result ?? '');
    }
  }, [currentStep, steps]);

  // Operaciones del BST
  const handleAgregar = (valor: number) => {
    executeOperation(() => bst.agregar(valor));
  };

  const handleEliminar = (valor: number) => {
    executeOperation(() => bst.eliminarDato(valor));
  };

  const handleBuscar = (valor: number) => {
    executeOperation(() => bst.existeDato(valor));
  };

  const handleRecorridoInorden = () => {
    executeOperation(() => bst.recorridoInorden());
  };

  const handleRecorridoPreorden = () => {
    executeOperation(() => bst.recorridoPreorden());
  };

  const handleRecorridoPostorden = () => {
    executeOperation(() => bst.recorridoPostorden());
  };

  const handleObtenerAltura = () => {
    executeOperation(() => bst.obtenerAltura());
  };

  const handleObtenerPeso = () => {
    executeOperation(() => bst.obtenerPeso());
  };

  const handleObtenerNivel = (valor: number) => {
    executeOperation(() => bst.obtenerNivel(valor));
  };

  const handleContarHojas = () => {
    executeOperation(() => bst.contarHojas());
  };

  const handleObtenerMenor = () => {
    executeOperation(() => bst.obtenerMenor());
  };

  const handleObtenerMayor = () => {
    executeOperation(() => bst.obtenerNodoMayor());
  };

  const handleImprimirAmplitud = () => {
    executeOperation(() => bst.imprimirAmplitud());
  };

  const handleEstaVacio = () => {
    executeOperation(() => bst.estaVacio());
  };

  const handleBorrarArbol = () => {
    if (confirm('¿Estás seguro de que deseas borrar todo el árbol?')) {
      executeOperation(() => bst.borrarArbol());
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌳 Visualizador de Árbol Binario de Búsqueda</h1>
        <p>Explora paso a paso cada operación en el árbol</p>
      </header>

      <div className="app-container">
        <div className="left-panel">
          <ControlPanel
            onAgregar={handleAgregar}
            onEliminar={handleEliminar}
            onBuscar={handleBuscar}
            onRecorridoInorden={handleRecorridoInorden}
            onRecorridoPreorden={handleRecorridoPreorden}
            onRecorridoPostorden={handleRecorridoPostorden}
            onObtenerAltura={handleObtenerAltura}
            onObtenerPeso={handleObtenerPeso}
            onObtenerNivel={handleObtenerNivel}
            onContarHojas={handleContarHojas}
            onObtenerMenor={handleObtenerMenor}
            onObtenerMayor={handleObtenerMayor}
            onImprimirAmplitud={handleImprimirAmplitud}
            onEstaVacio={handleEstaVacio}
            onBorrarArbol={handleBorrarArbol}
          />
        </div>

        <div className="center-panel" key={treeVersion}>
          <TreeVisualization root={bst.root} highlightedNode={highlightedNode} />
          {lastResult && (
            <div className="result-display">
              <strong>Resultado:</strong> {lastResult}
            </div>
          )}
        </div>

        <div className="right-panel">
          <ExecutionConsole
            steps={steps}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
