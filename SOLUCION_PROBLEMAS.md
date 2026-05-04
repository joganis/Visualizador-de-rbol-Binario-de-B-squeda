# 🔧 Solución de Problemas - BST Visualizer

## ❌ Error: "Vite requires Node.js version 20.19+ or 22.12+"

### Síntomas
```
You are using Node.js 20.16.0. Vite requires Node.js version 20.19+ or 22.12+
```

### Causa
Tu versión de Node.js es demasiado antigua.

### ✅ Solución Rápida (SIN DESCARGAR NADA)

Modifica el archivo `package.json` en la raíz del proyecto:

**Busca esta sección:**
```json
"devDependencies": {
  "vite": "^8.0.10",
  "@vitejs/plugin-react": "^6.0.1",
  ...
}
```

**Cámbiala por:**
```json
"devDependencies": {
  "vite": "^5.0.0",
  "@vitejs/plugin-react": "^4.0.0",
  "typescript": "^5.0.0",
  "eslint": "^8.50.0",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "@types/node": "^20.0.0"
}
```

**Luego ejecuta:**
```bash
# Limpiar instalación anterior
rm -rf node_modules package-lock.json

# Reinstalar con versiones compatibles
npm install

# Ejecutar
npm run dev
```

### ⚠️ Nota Importante
Esta solución usa versiones más antiguas pero **estables y completamente funcionales** para tu aplicación.

---

## ❌ Error: "Cannot find native binding"

### Síntomas
```
Error: Cannot find native binding. npm has a bug related to optional dependencies
Cannot find module '@rolldown/binding-win32-x64-msvc'
```

### Causa
Problema con dependencias opcionales de Rolldown (compilador de Vite).

### ✅ Soluciones

**Opción 1: Limpiar e reinstalar (RECOMENDADO)**
```bash
# En la carpeta del proyecto
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Opción 2: Usar versión anterior de Vite**
```bash
# Editar package.json (ver sección anterior)
# Cambiar vite a versión 5.x
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Opción 3: Forzar reinstalación de npm**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

---

## ❌ Error: "Cannot find module"

### Síntomas
```
Module not found: Can't resolve './BSTVisualizer'
```

### Causa
Archivos TypeScript no compilados o rutas incorrectas.

### ✅ Solución
```bash
# Verificar que los archivos existen
ls -la src/

# Limpiar y reconstruir
npm run build

# O ejecutar en desarrollo
npm run dev
```

---

## ❌ Error: "Port 5173 already in use"

### Síntomas
```
Port 5173 is already in use
```

### Causa
Otro proceso está usando el puerto 5173.

### ✅ Soluciones

**Opción 1: Usar otro puerto**
```bash
npm run dev -- --port 3000
```

**Opción 2: Matar el proceso anterior**

**En Windows (PowerShell):**
```powershell
netstat -ano | findstr :5173
taskkill /PID <PID> /F
npm run dev
```

**En Mac/Linux:**
```bash
lsof -i :5173
kill -9 <PID>
npm run dev
```

---

## ❌ Error: "EACCES: permission denied"

### Síntomas
```
EACCES: permission denied, open '/path/to/file'
```

### Causa
Problemas de permisos en la carpeta del proyecto.

### ✅ Solución

**En Mac/Linux:**
```bash
# Cambiar permisos
chmod -R 755 bst-visualizer

# Reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**En Windows:**
- Ejecuta PowerShell como Administrador
- Navega a la carpeta del proyecto
- Ejecuta `npm install` nuevamente

---

## ❌ Error: "TypeScript compilation failed"

### Síntomas
```
error TS1484: 'ExecutionStep' is a type and must be imported using a type-only import
```

### Causa
Importes de tipos incorrectos en TypeScript.

### ✅ Solución
Verifica que los archivos usen `import type` para tipos:

```typescript
// ❌ INCORRECTO
import { ExecutionStep } from './BSTVisualizer';

// ✅ CORRECTO
import type { ExecutionStep } from './BSTVisualizer';
```

Si ves este error, ejecuta:
```bash
npm run build
```

---

## ❌ Error: "npm ERR! code ERESOLVE"

### Síntomas
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

### Causa
Conflicto entre versiones de dependencias.

### ✅ Soluciones

**Opción 1: Forzar instalación**
```bash
npm install --legacy-peer-deps
```

**Opción 2: Limpiar caché**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Opción 3: Usar versión anterior de Vite**
Ver la sección "Error: Vite requires Node.js version..."

---

## ✅ Checklist de Diagnóstico

Antes de reportar un problema, verifica:

- [ ] Node.js versión: `node --version` (debe ser 16+)
- [ ] npm versión: `npm --version` (debe ser 8+)
- [ ] Carpeta correcta: `cd bst-visualizer`
- [ ] Archivos existen: `ls -la src/`
- [ ] node_modules existe: `ls -la node_modules | head`
- [ ] package.json válido: `cat package.json | head -20`

---

## 🆘 Si Nada Funciona

**Reinstalación completa:**

```bash
# 1. Limpiar todo
rm -rf node_modules package-lock.json dist

# 2. Limpiar caché de npm
npm cache clean --force

# 3. Reinstalar desde cero
npm install

# 4. Verificar que compila
npm run build

# 5. Ejecutar
npm run dev
```

Si aún así no funciona, verifica:
- Que Node.js está instalado correctamente
- Que tienes permisos de escritura en la carpeta
- Que no hay antivirus bloqueando npm
- Que tienes conexión a internet (para descargar paquetes)

---

## 📞 Soporte Rápido

| Problema | Solución Rápida |
|----------|-----------------|
| Puerto en uso | `npm run dev -- --port 3000` |
| Módulo no encontrado | `rm -rf node_modules && npm install` |
| TypeScript error | `npm run build` |
| Dependencias conflictivas | `npm install --legacy-peer-deps` |
| Todo roto | `npm cache clean --force && npm install` |

---

**¡Espero que esto resuelva tu problema! 🚀**
