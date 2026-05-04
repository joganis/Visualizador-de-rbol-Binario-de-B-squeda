# 📖 Instrucciones de Instalación y Ejecución

## 🔧 Requisitos Previos

Asegúrate de tener instalado:
- **Node.js** versión 16 o superior
- **npm** (incluido con Node.js)

Para verificar:
```bash
node --version
npm --version
```

## 📥 Instalación

### Opción 1: Desde el archivo comprimido

```bash
# Descomprimir el archivo
tar -xzf bst-visualizer.tar.gz
cd bst-visualizer

# Instalar dependencias
npm install
```

### Opción 2: Desde el directorio

```bash
cd bst-visualizer
npm install
```

## ▶️ Ejecutar la Aplicación

### Modo Desarrollo (con Hot Reload)

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

**Ventajas:**
- Recarga automática al guardar cambios
- Mejor para desarrollo
- Mensajes de error detallados

### Modo Producción

```bash
# Compilar la aplicación
npm run build

# Servir los archivos compilados
npm run preview
```

La aplicación estará en `http://localhost:4173`

## 🎮 Uso de la Aplicación

### Panel de Control (Izquierda)

1. **Operaciones Básicas**
   - Ingresa un número en el campo de entrada
   - Haz clic en "Agregar" para insertar
   - Haz clic en "Buscar" para encontrar un valor
   - Haz clic en "Eliminar" para remover un nodo

2. **Recorridos**
   - Botones para Inorden, Preorden, Postorden y Amplitud
   - Muestra el orden de visita de nodos

3. **Propiedades**
   - Calcula altura, peso, número de hojas
   - Verifica si el árbol está vacío

4. **Valores Extremos**
   - Encuentra el valor menor y mayor
   - Obtiene el nivel de un nodo

### Visualización del Árbol (Centro)

- **Nodos blancos**: Nodos normales
- **Nodos rojos**: Nodo actual en ejecución
- **Líneas grises**: Conexiones entre nodos
- Se actualiza automáticamente con cada operación

### Consola de Ejecución (Derecha)

- Muestra cada paso de la operación
- Explica comparaciones y decisiones
- Navega con botones "Anterior" y "Siguiente"
- Haz clic en cualquier paso para verlo

## 📝 Ejemplos de Uso

### Ejemplo 1: Crear un árbol simple

```
1. Agregar 50
2. Agregar 30
3. Agregar 70
4. Agregar 20
5. Agregar 40
6. Agregar 60
7. Agregar 80
```

Resultado: Un árbol balanceado

### Ejemplo 2: Buscar un valor

```
1. Buscar 40
   Pasos mostrados:
   - Comparar 40 con 50 → 40 < 50, ir izquierda
   - Comparar 40 con 30 → 40 > 30, ir derecha
   - Comparar 40 con 40 → ¡Encontrado!
```

### Ejemplo 3: Recorrido Inorden

```
1. Inorden
   Resultado: 20, 30, 40, 50, 60, 70, 80
   (Orden ascendente)
```

### Ejemplo 4: Eliminar un nodo

```
1. Eliminar 30
   Pasos mostrados:
   - Buscar 30
   - Encontrado con dos hijos
   - Buscar sucesor (40)
   - Reemplazar 30 con 40
   - Eliminar 40 del subárbol derecho
```

## 🐛 Solución de Problemas

### La aplicación no inicia

```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Puerto 5173 ya está en uso

```bash
# Usar un puerto diferente
npm run dev -- --port 3000
```

### Errores de TypeScript

```bash
# Limpiar y reconstruir
npm run build
```

## 📦 Estructura de Archivos

```
bst-visualizer/
├── src/
│   ├── BSTVisualizer.ts          # Lógica del árbol
│   ├── TreeVisualization.tsx     # Visualización
│   ├── ExecutionConsole.tsx      # Consola
│   ├── ControlPanel.tsx          # Controles
│   ├── App.tsx                   # Aplicación principal
│   ├── App.css
│   ├── TreeVisualization.css
│   ├── ExecutionConsole.css
│   ├── ControlPanel.css
│   ├── index.css
│   └── main.tsx
├── public/                        # Archivos estáticos
├── dist/                          # Compilado (después de build)
├── node_modules/                  # Dependencias
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README_APP.md                  # Documentación de la app
```

## 🔄 Conversión a Electron (Escritorio)

Para convertir esta aplicación web a una aplicación de escritorio:

### Paso 1: Instalar Electron

```bash
npm install --save-dev electron electron-builder
```

### Paso 2: Crear archivo main.ts

Crear `electron/main.ts`:

```typescript
import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const isDev = process.env.NODE_ENV === 'development';
  const url = isDev 
    ? 'http://localhost:5173' 
    : `file://${path.join(__dirname, '../dist/index.html')}`;

  mainWindow.loadURL(url);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
```

### Paso 3: Actualizar package.json

```json
{
  "main": "electron/main.ts",
  "scripts": {
    "dev": "vite",
    "dev:electron": "electron .",
    "build": "tsc -b && vite build",
    "build:electron": "npm run build && electron-builder"
  }
}
```

### Paso 4: Ejecutar como Electron

```bash
npm run dev:electron
```

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev)
- [Documentación de TypeScript](https://www.typescriptlang.org)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de Electron](https://www.electronjs.org)

## ✅ Checklist de Verificación

- [ ] Node.js instalado
- [ ] npm funcionando
- [ ] Proyecto descargado/descomprimido
- [ ] `npm install` completado
- [ ] `npm run dev` ejecutándose
- [ ] Navegador abierto en localhost:5173
- [ ] Interfaz visible con 3 paneles
- [ ] Botones respondiendo a clics
- [ ] Árbol visualizándose correctamente

## 🆘 Soporte

Si encuentras problemas:

1. Verifica que Node.js esté actualizado
2. Intenta limpiar caché: `npm cache clean --force`
3. Reinstala dependencias: `rm -rf node_modules && npm install`
4. Revisa la consola del navegador (F12) para errores

---

**¡Listo para explorar Árboles Binarios de Búsqueda!** 🌳
