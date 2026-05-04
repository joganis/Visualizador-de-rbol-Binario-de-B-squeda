import React, { useMemo } from 'react';
import type { BSTNode } from './BSTVisualizer';
import './TreeVisualization.css';

interface TreeVisualizationProps {
  root: BSTNode | null;
  highlightedNode?: number | null;
}

interface NodePosition {
  value: number;
  x: number;
  y: number;
  left?: NodePosition;
  right?: NodePosition;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ root, highlightedNode }) => {
  const nodePositions = useMemo(() => {
    if (!root) return null;

    // Calcular la altura del árbol
    const getHeight = (node: BSTNode | null): number => {
      if (!node) return 0;
      return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };

    // Calcular dimensiones
    const height = getHeight(root);
    const width = Math.max(1000, Math.pow(2, height + 1) * 60);
    const svgHeight = Math.max(600, height * 120 + 100);

    // Calcular posiciones manteniendo estructura de árbol
    const calculatePositions = (
      node: BSTNode | null,
      x: number,
      y: number,
      offset: number
    ): NodePosition | undefined => {
      if (!node) return undefined;

      return {
        value: node.value,
        x,
        y,
        left: calculatePositions(node.left, x - offset, y + 120, offset / 2),
        right: calculatePositions(node.right, x + offset, y + 120, offset / 2),
      };
    };

    const rootPosition = calculatePositions(root, width / 2, 60, width / 4);
    return { rootPosition, width, height: svgHeight };
  }, [root]);

  if (!nodePositions || !nodePositions.rootPosition) {
    return (
      <div className="tree-visualization empty">
        <p>El árbol está vacío</p>
      </div>
    );
  }

  // Dibujar líneas conectoras
  const drawLines = (position: NodePosition): React.ReactNode[] => {
    const lines: React.ReactNode[] = [];

    if (position.left) {
      lines.push(
        <line
          key={`line-left-${position.value}-${position.x}-${position.y}`}
          x1={position.x}
          y1={position.y}
          x2={position.left.x}
          y2={position.left.y}
          stroke="#999"
          strokeWidth="2"
        />
      );
      lines.push(...drawLines(position.left));
    }

    if (position.right) {
      lines.push(
        <line
          key={`line-right-${position.value}-${position.x}-${position.y}`}
          x1={position.x}
          y1={position.y}
          x2={position.right.x}
          y2={position.right.y}
          stroke="#999"
          strokeWidth="2"
        />
      );
      lines.push(...drawLines(position.right));
    }

    return lines;
  };

  // Dibujar nodos
  const drawNodes = (position: NodePosition): React.ReactNode[] => {
    const nodes: React.ReactNode[] = [];
    const isHighlighted = highlightedNode === position.value;

    // Círculo
    nodes.push(
      <circle
        key={`circle-${position.value}-${position.x}-${position.y}`}
        cx={position.x}
        cy={position.y}
        r="28"
        fill={isHighlighted ? '#ff6b6b' : '#4ecdc4'}
        stroke={isHighlighted ? '#c92a2a' : '#0a7e7e'}
        strokeWidth="3"
      />
    );

    // Texto
    nodes.push(
      <text
        key={`text-${position.value}-${position.x}-${position.y}`}
        x={position.x}
        y={position.y}
        textAnchor="middle"
        dy="0.35em"
        fill="white"
        fontSize="18"
        fontWeight="bold"
      >
        {position.value}
      </text>
    );

    // Recursivamente dibujar hijos
    if (position.left) {
      nodes.push(...drawNodes(position.left));
    }

    if (position.right) {
      nodes.push(...drawNodes(position.right));
    }

    return nodes;
  };

  const lines = drawLines(nodePositions.rootPosition);
  const nodes = drawNodes(nodePositions.rootPosition);

  return (
    <div className="tree-visualization">
      <svg
        width={nodePositions.width}
        height={nodePositions.height}
        className="tree-svg"
        viewBox={`0 0 ${nodePositions.width} ${nodePositions.height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {lines}
        {nodes}
      </svg>
    </div>
  );
};

export default TreeVisualization;
