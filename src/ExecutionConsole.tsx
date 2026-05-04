import React, { useEffect, useRef } from 'react';
import type { ExecutionStep } from './BSTVisualizer';
import './ExecutionConsole.css';

interface ExecutionConsoleProps {
  steps: ExecutionStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
}

const ExecutionConsole: React.FC<ExecutionConsoleProps> = ({
  steps,
  currentStep,
  onStepChange,
}) => {
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleRef.current) {
      const currentElement = consoleRef.current.querySelector('.step.current');
      if (currentElement) {
        currentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [currentStep]);

  return (
    <div className="execution-console">
      <div className="console-header">
        <h3>📋 Consola de Ejecución</h3>
        <span className="step-counter">
          Paso {currentStep + 1} de {steps.length}
        </span>
      </div>

      <div className="console-content" ref={consoleRef}>
        {steps.length === 0 ? (
          <div className="empty-console">
            <p>Ejecuta una operación para ver los pasos aquí...</p>
          </div>
        ) : (
          <div className="steps-list">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step ${index === currentStep ? 'current' : ''} ${
                  index < currentStep ? 'completed' : ''
                }`}
                onClick={() => onStepChange(index)}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <div className="step-action">{step.action}</div>
                  <div className="step-description">{step.description}</div>
                  {step.comparison && (
                    <div className="step-comparison">
                      <strong>Comparación:</strong> {step.comparison}
                    </div>
                  )}
                  {step.result && (
                    <div className="step-result">
                      <strong>Resultado:</strong> {step.result}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {steps.length > 0 && (
        <div className="console-controls">
          <button
            className="btn btn-prev"
            onClick={() => onStepChange(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            ← Anterior
          </button>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <button
            className="btn btn-next"
            onClick={() => onStepChange(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
};

export default ExecutionConsole;
