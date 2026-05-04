# 🌳 Visualizador de Árbol Binario de Búsqueda (BST)

Una aplicación web interactiva construida con **React + TypeScript** que permite visualizar paso a paso la ejecución de todos los métodos de un Árbol Binario de Búsqueda.

## 📋 Características

### Métodos Implementados

#### Operaciones Básicas
- **estaVacio**: Verifica si el árbol está vacío
- **Agregar dato**: Inserta un valor en el árbol manteniendo la propiedad BST
- **Eliminar dato**: Elimina un nodo del árbol (maneja 3 casos: sin hijos, 1 hijo, 2 hijos)
- **Existe dato**: Busca si un valor existe en el árbol

#### Recorridos
- **Inorden** (Izquierda-Raíz-Derecha): Recorrido ordenado ascendente
- **Preorden** (Raíz-Izquierda-Derecha): Raíz primero
- **Postorden** (Izquierda-Derecha-Raíz): Raíz al final
- **Amplitud (BFS)**: Recorrido por niveles

#### Propiedades del Árbol
- **Obtener Altura**: Calcula la altura máxima del árbol
- **Obtener Peso**: Cuenta el número total de nodos
- **Obtener Nivel**: Encuentra el nivel de un nodo específico
- **Contar Hojas**: Cuenta los nodos hoja (sin hijos)

#### Valores Extremos
- **Obtener Menor**: Encuentra el valor mínimo
- **Obtener Mayor**: Encuentra el valor máximo
- **Obtener Nodo Menor**: Retorna el nodo con valor mínimo
- **Obtener Nodo Mayor**: Retorna el nodo con valor máximo

#### Operaciones Destructivas
- **Borrar Árbol**: Elimina todos los nodos del árbol

### Interfaz Visual

La aplicación está dividida en **3 paneles principales**:

#### 1. Panel de Control (Izquierda)
- Entrada de valores para agregar/eliminar/buscar
- Botones para todos los métodos del BST
- Interfaz organizada por categorías
- Estilos modernos con gradientes

#### 2. Visualización del Árbol (Centro)
- Representación gráfica en SVG del árbol
- Nodos destacados durante la ejecución
- Conexiones visuales entre padres e hijos
- Actualización en tiempo real

#### 3. Consola de Ejecución (Derecha)
- Muestra paso a paso cada operación
- Detalla comparaciones realizadas
- Explica decisiones lógicas
- Navegación entre pasos (anterior/siguiente)
- Barra de progreso

## 🚀 Instalación y Uso

### Requisitos
- Node.js 16+ 
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
cd bst-visualizer

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## 💡 Cómo Usar

1. **Agregar Nodos**: Ingresa un número en el campo de entrada y haz clic en "Agregar"
   - El árbol se actualiza automáticamente
   - La consola muestra el proceso de inserción

2. **Explorar Operaciones**: Usa los botones del panel de control para:
   - Buscar valores
   - Realizar recorridos
   - Calcular propiedades
   - Eliminar nodos

3. **Seguir la Ejecución**: 
   - Observa la consola de ejecución en el panel derecho
   - Usa los botones "Anterior" y "Siguiente" para navegar paso a paso
   - Haz clic en cualquier paso para saltar a él

4. **Visualizar el Árbol**:
   - El árbol se dibuja en el panel central
   - Los nodos se destacan en rojo durante la ejecución
   - Las conexiones muestran la estructura del árbol

## 📊 Ejemplo de Uso

```
1. Agregar: 50
2. Agregar: 30
3. Agregar: 70
4. Agregar: 20
5. Agregar: 40
6. Buscar: 40
   → La consola mostrará: 50 > 40 → 30 < 40 → ¡Encontrado!
7. Recorrido Inorden
   → Resultado: 20, 30, 40, 50, 70
```

## 🎨 Diseño

- **Tema**: Gradientes modernos con colores teal y púrpura
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Accesibilidad**: Interfaz clara y fácil de usar
- **Animaciones**: Transiciones suaves y retroalimentación visual

## 🔧 Estructura del Proyecto

```
bst-visualizer/
├── src/
│   ├── BSTVisualizer.ts          # Lógica del BST con trazado
│   ├── TreeVisualization.tsx     # Componente de visualización del árbol
│   ├── ExecutionConsole.tsx      # Consola de ejecución paso a paso
│   ├── ControlPanel.tsx          # Panel de controles
│   ├── App.tsx                   # Componente principal
│   ├── App.css                   # Estilos principales
│   ├── TreeVisualization.css     # Estilos del árbol
│   ├── ExecutionConsole.css      # Estilos de la consola
│   ├── ControlPanel.css          # Estilos del panel
│   └── index.css                 # Estilos globales
├── public/                        # Archivos estáticos
├── package.json                   # Dependencias
├── tsconfig.json                  # Configuración TypeScript
└── vite.config.ts                # Configuración Vite
```

## 🛠️ Tecnologías Utilizadas

- **React 18**: Librería de interfaz de usuario
- **TypeScript**: Tipado estático
- **Vite**: Empaquetador y servidor de desarrollo
- **CSS3**: Estilos modernos con gradientes y animaciones
- **SVG**: Gráficos vectoriales para el árbol

## 📝 Notas Técnicas

### Trazado de Ejecución
Cada método del BST registra pasos detallados:
- **Acción**: Tipo de operación (agregar, buscar, etc.)
- **Descripción**: Explicación del paso actual
- **Comparación**: Operación lógica realizada
- **Resultado**: Conclusión del paso
- **Estado del Árbol**: Referencia al árbol actual

### Algoritmos Implementados
- **Inserción**: Búsqueda recursiva + inserción en posición correcta
- **Eliminación**: Manejo de 3 casos (sin hijos, 1 hijo, 2 hijos con sucesor)
- **Búsqueda**: Búsqueda binaria recursiva
- **Recorridos**: DFS (Inorden, Preorden, Postorden) y BFS (Amplitud)
- **Propiedades**: Cálculos recursivos de altura, peso, nivel

## 🚀 Conversión a Electron (Próximo Paso)

Para convertir esta aplicación web a una aplicación de escritorio con Electron:

1. Instalar Electron: `npm install --save-dev electron`
2. Crear archivo `electron/main.ts` para la ventana principal
3. Configurar scripts en `package.json`
4. Usar `electron-builder` para empaquetar

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👨‍💻 Autor

Creado como herramienta educativa para visualizar y comprender Árboles Binarios de Búsqueda.

---

**¡Disfruta explorando la estructura y comportamiento de los Árboles Binarios de Búsqueda!** 🌳✨
