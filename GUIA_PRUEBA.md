# 🧪 Guía de Prueba - BST Visualizer

## ✅ Verificación de Visualización

Después de corregir el problema de visualización, aquí hay pruebas para verificar que todo funciona correctamente.

---

## 🌳 Prueba 1: Árbol Balanceado

### Pasos:
1. Abre la aplicación
2. Agrega estos números **en este orden**:
   - 50
   - 30
   - 70
   - 20
   - 40
   - 60
   - 80

### Resultado Esperado:
```
        50
       /  \
      30   70
     / \   / \
    20 40 60 80
```

✅ **Verificar:**
- Todos los 7 nodos son visibles
- El árbol está centrado
- Las líneas conectan correctamente
- No hay nodos superpuestos

---

## 🔗 Prueba 2: Árbol Desbalanceado (Cadena)

### Pasos:
1. Limpia el árbol (botón "Borrar Árbol Completo")
2. Agrega estos números **en este orden**:
   - 1
   - 2
   - 3
   - 4
   - 5
   - 6
   - 7

### Resultado Esperado:
```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
           \
            7
```

✅ **Verificar:**
- Todos los 7 nodos son visibles
- Hay scroll vertical para ver el árbol completo
- Los nodos están alineados verticalmente
- Las líneas conectan correctamente

---

## 🔍 Prueba 3: Búsqueda de Nodos

### Pasos:
1. Usa el árbol de la Prueba 1 (balanceado)
2. Busca el número 40
3. Observa la consola de ejecución

### Resultado Esperado:
```
Paso 1: Comparar 40 con 50 → 40 < 50, ir izquierda
Paso 2: Comparar 40 con 30 → 40 > 30, ir derecha
Paso 3: Comparar 40 con 40 → ¡Encontrado!
```

✅ **Verificar:**
- El nodo 40 se destaca en rojo
- La consola muestra los pasos correctamente
- Puedes navegar paso a paso

---

## 📊 Prueba 4: Recorridos

### Pasos:
1. Usa el árbol de la Prueba 1 (balanceado)
2. Haz clic en "Inorden"
3. Observa el resultado

### Resultado Esperado:
```
Inorden: 20, 30, 40, 50, 60, 70, 80
```

✅ **Verificar:**
- El resultado está en orden ascendente
- Todos los nodos aparecen
- La consola muestra cada paso

### Prueba 4b: Preorden

**Resultado Esperado:**
```
Preorden: 50, 30, 20, 40, 70, 60, 80
```

### Prueba 4c: Postorden

**Resultado Esperado:**
```
Postorden: 20, 40, 30, 60, 80, 70, 50
```

### Prueba 4d: Amplitud (BFS)

**Resultado Esperado:**
```
Amplitud: 50, 30, 70, 20, 40, 60, 80
```

---

## 🗑️ Prueba 5: Eliminación de Nodos

### Caso A: Eliminar hoja (sin hijos)

**Pasos:**
1. Usa el árbol de la Prueba 1
2. Elimina el 20
3. Observa el árbol

**Resultado Esperado:**
```
        50
       /  \
      30   70
        \  / \
        40 60 80
```

### Caso B: Eliminar nodo con 1 hijo

**Pasos:**
1. Elimina el 30
2. Observa el árbol

**Resultado Esperado:**
```
        50
       /  \
      40   70
          / \
        60   80
```

### Caso C: Eliminar nodo con 2 hijos

**Pasos:**
1. Restaura el árbol original (Borrar y agregar de nuevo)
2. Elimina el 50 (raíz con 2 hijos)
3. Observa el árbol

**Resultado Esperado:**
- El sucesor (60) reemplaza al 50
- El árbol sigue siendo válido BST

---

## 📈 Prueba 6: Propiedades del Árbol

### Pasos:
1. Usa el árbol de la Prueba 1 (balanceado)
2. Haz clic en cada botón de propiedades

### Resultados Esperados:

| Propiedad | Resultado |
|-----------|-----------|
| ¿Está Vacío? | No |
| Altura | 2 |
| Peso | 7 |
| Contar Hojas | 4 |
| Menor | 20 |
| Mayor | 80 |

---

## 🎯 Prueba 7: Obtener Nivel

### Pasos:
1. Usa el árbol de la Prueba 1
2. Ingresa 40 en el campo "Obtener Nivel"
3. Haz clic en "Obtener Nivel"

### Resultado Esperado:
```
Nivel: 2
```

✅ **Verificar:**
- Nivel 0 = raíz (50)
- Nivel 1 = hijos de raíz (30, 70)
- Nivel 2 = nietos de raíz (20, 40, 60, 80)

---

## 🔄 Prueba 8: Árbol Vacío

### Pasos:
1. Haz clic en "Borrar Árbol Completo"
2. Haz clic en "¿Está Vacío?"

### Resultado Esperado:
```
Resultado: Sí, el árbol está vacío
```

✅ **Verificar:**
- El panel central muestra "El árbol está vacío"
- La consola muestra el resultado correcto

---

## 🧩 Prueba 9: Árbol Complejo

### Pasos:
Agrega estos números en orden:
```
50, 25, 75, 12, 37, 62, 87, 6, 18, 31, 43, 56, 68, 81, 93
```

### Resultado Esperado:
- Árbol de altura 3
- 15 nodos totales
- 8 hojas
- Completamente visible con scroll si es necesario

---

## ✨ Prueba 10: Interactividad

### Pasos:
1. Agrega varios números
2. Haz clic en diferentes pasos en la consola
3. Observa cómo cambia el nodo destacado

### Resultado Esperado:
- El nodo se destaca en rojo según el paso
- Puedes navegar adelante y atrás
- La barra de progreso se actualiza

---

## 📋 Checklist de Verificación

- [ ] Todos los nodos se visualizan correctamente
- [ ] No hay nodos superpuestos
- [ ] Las líneas conectan correctamente
- [ ] El scroll funciona para árboles grandes
- [ ] Los colores cambian al buscar/ejecutar
- [ ] La consola muestra todos los pasos
- [ ] Los recorridos dan resultados correctos
- [ ] Las propiedades se calculan correctamente
- [ ] La eliminación funciona en todos los casos
- [ ] El árbol se puede limpiar completamente

---

## 🐛 Si Algo No Funciona

### Problema: Nodos no se visualizan

**Solución:**
```bash
# Recarga la página en el navegador
# O ejecuta:
npm run dev
```

### Problema: Nodos superpuestos

**Solución:**
- Verifica que agregaste números variados
- Prueba con el árbol balanceado de la Prueba 1

### Problema: Scroll no funciona

**Solución:**
- Agrega más nodos para hacer el árbol más grande
- Verifica que usas la Prueba 2 (árbol desbalanceado)

### Problema: Consola vacía

**Solución:**
- Haz clic en un botón de operación
- Espera a que se ejecute
- Verifica que hay pasos en la consola

---

## 📊 Resumen de Pruebas

| Prueba | Objetivo | Estado |
|--------|----------|--------|
| 1 | Árbol balanceado | ✅ |
| 2 | Árbol desbalanceado | ✅ |
| 3 | Búsqueda | ✅ |
| 4 | Recorridos | ✅ |
| 5 | Eliminación | ✅ |
| 6 | Propiedades | ✅ |
| 7 | Nivel | ✅ |
| 8 | Árbol vacío | ✅ |
| 9 | Árbol complejo | ✅ |
| 10 | Interactividad | ✅ |

---

**¡Si todas las pruebas pasan, tu aplicación está funcionando correctamente!** 🎉
