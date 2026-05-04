// Interfaz para los pasos de ejecución
export interface ExecutionStep {
  action: string;
  description: string;
  nodeValue?: number;
  currentNode?: number;
  comparison?: string;
  result?: string;
  treeState?: BSTNode | null;
}

// Nodo del árbol
export interface BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;
}

// Clase del Árbol Binario de Búsqueda
export class BinarySearchTree {
  root: BSTNode | null = null;
  steps: ExecutionStep[] = [];

  // Método: estaVacio
  estaVacio(): boolean {
    this.steps = [];
    this.steps.push({
      action: "estaVacio",
      description: "Verificando si el árbol está vacío",
      result: this.root === null ? "Sí, el árbol está vacío" : "No, el árbol tiene nodos",
    });
    return this.root === null;
  }

  // Método: Agregar dato
  agregar(valor: number): void {
    this.steps = [];
    this.steps.push({
      action: "agregar",
      description: `Iniciando inserción del valor ${valor}`,
      nodeValue: valor,
    });

    if (this.root === null) {
      this.steps.push({
        action: "agregar",
        description: `El árbol está vacío. Creando raíz con valor ${valor}`,
        nodeValue: valor,
      });
      this.root = { value: valor, left: null, right: null };
      this.steps.push({
        action: "agregar",
        description: `Valor ${valor} insertado como raíz`,
        nodeValue: valor,
        result: "Éxito",
        treeState: this.root,
      });
    } else {
      this.insertarRecursivo(this.root, valor);
    }
  }

  private insertarRecursivo(nodo: BSTNode, valor: number): void {
    this.steps.push({
      action: "agregar",
      description: `Comparando ${valor} con nodo actual ${nodo.value}`,
      nodeValue: valor,
      currentNode: nodo.value,
    });

    if (valor < nodo.value) {
      this.steps.push({
        action: "agregar",
        description: `${valor} < ${nodo.value}, ir a la izquierda`,
        comparison: `${valor} < ${nodo.value}`,
      });

      if (nodo.left === null) {
        this.steps.push({
          action: "agregar",
          description: `Subárbol izquierdo vacío. Insertando ${valor} a la izquierda`,
          nodeValue: valor,
        });
        nodo.left = { value: valor, left: null, right: null };
        this.steps.push({
          action: "agregar",
          description: `Valor ${valor} insertado exitosamente`,
          result: "Éxito",
          treeState: this.root,
        });
      } else {
        this.insertarRecursivo(nodo.left, valor);
      }
    } else if (valor > nodo.value) {
      this.steps.push({
        action: "agregar",
        description: `${valor} > ${nodo.value}, ir a la derecha`,
        comparison: `${valor} > ${nodo.value}`,
      });

      if (nodo.right === null) {
        this.steps.push({
          action: "agregar",
          description: `Subárbol derecho vacío. Insertando ${valor} a la derecha`,
          nodeValue: valor,
        });
        nodo.right = { value: valor, left: null, right: null };
        this.steps.push({
          action: "agregar",
          description: `Valor ${valor} insertado exitosamente`,
          result: "Éxito",
          treeState: this.root,
        });
      } else {
        this.insertarRecursivo(nodo.right, valor);
      }
    } else {
      this.steps.push({
        action: "agregar",
        description: `${valor} ya existe en el árbol. No se inserta`,
        result: "Duplicado - No insertado",
      });
    }
  }

  // Método: Existe dato
  existeDato(valor: number): boolean {
    this.steps = [];
    this.steps.push({
      action: "existeDato",
      description: `Buscando si el valor ${valor} existe en el árbol`,
      nodeValue: valor,
    });

    const resultado = this.buscarRecursivo(this.root, valor);
    this.steps.push({
      action: "existeDato",
      description: `Búsqueda completada`,
      result: resultado ? `Sí, ${valor} existe` : `No, ${valor} no existe`,
    });
    return resultado;
  }

  private buscarRecursivo(nodo: BSTNode | null, valor: number): boolean {
    if (nodo === null) {
      this.steps.push({
        action: "existeDato",
        description: `Nodo nulo alcanzado. ${valor} no existe`,
        nodeValue: valor,
      });
      return false;
    }

    this.steps.push({
      action: "existeDato",
      description: `Comparando ${valor} con nodo ${nodo.value}`,
      nodeValue: valor,
      currentNode: nodo.value,
    });

    if (valor === nodo.value) {
      this.steps.push({
        action: "existeDato",
        description: `¡Encontrado! ${valor} = ${nodo.value}`,
        comparison: `${valor} === ${nodo.value}`,
      });
      return true;
    } else if (valor < nodo.value) {
      this.steps.push({
        action: "existeDato",
        description: `${valor} < ${nodo.value}, buscando en subárbol izquierdo`,
        comparison: `${valor} < ${nodo.value}`,
      });
      return this.buscarRecursivo(nodo.left, valor);
    } else {
      this.steps.push({
        action: "existeDato",
        description: `${valor} > ${nodo.value}, buscando en subárbol derecho`,
        comparison: `${valor} > ${nodo.value}`,
      });
      return this.buscarRecursivo(nodo.right, valor);
    }
  }

  // Método: Recorridos
  recorridoInorden(): number[] {
    this.steps = [];
    this.steps.push({
      action: "recorridoInorden",
      description: "Iniciando recorrido Inorden (Izquierda-Raíz-Derecha)",
    });
    const resultado: number[] = [];
    this.inordenRecursivo(this.root, resultado);
    this.steps.push({
      action: "recorridoInorden",
      description: `Recorrido completado: ${resultado.join(", ")}`,
      result: resultado.join(", "),
    });
    return resultado;
  }

  private inordenRecursivo(nodo: BSTNode | null, resultado: number[]): void {
    if (nodo === null) return;

    this.inordenRecursivo(nodo.left, resultado);
    this.steps.push({
      action: "recorridoInorden",
      description: `Visitando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });
    resultado.push(nodo.value);
    this.inordenRecursivo(nodo.right, resultado);
  }

  recorridoPreorden(): number[] {
    this.steps = [];
    this.steps.push({
      action: "recorridoPreorden",
      description: "Iniciando recorrido Preorden (Raíz-Izquierda-Derecha)",
    });
    const resultado: number[] = [];
    this.preordenRecursivo(this.root, resultado);
    this.steps.push({
      action: "recorridoPreorden",
      description: `Recorrido completado: ${resultado.join(", ")}`,
      result: resultado.join(", "),
    });
    return resultado;
  }

  private preordenRecursivo(nodo: BSTNode | null, resultado: number[]): void {
    if (nodo === null) return;

    this.steps.push({
      action: "recorridoPreorden",
      description: `Visitando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });
    resultado.push(nodo.value);
    this.preordenRecursivo(nodo.left, resultado);
    this.preordenRecursivo(nodo.right, resultado);
  }

  recorridoPostorden(): number[] {
    this.steps = [];
    this.steps.push({
      action: "recorridoPostorden",
      description: "Iniciando recorrido Postorden (Izquierda-Derecha-Raíz)",
    });
    const resultado: number[] = [];
    this.postordenRecursivo(this.root, resultado);
    this.steps.push({
      action: "recorridoPostorden",
      description: `Recorrido completado: ${resultado.join(", ")}`,
      result: resultado.join(", "),
    });
    return resultado;
  }

  private postordenRecursivo(nodo: BSTNode | null, resultado: number[]): void {
    if (nodo === null) return;

    this.postordenRecursivo(nodo.left, resultado);
    this.postordenRecursivo(nodo.right, resultado);
    this.steps.push({
      action: "recorridoPostorden",
      description: `Visitando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });
    resultado.push(nodo.value);
  }

  // Método: Obtener peso (número de nodos)
  obtenerPeso(): number {
    this.steps = [];
    this.steps.push({
      action: "obtenerPeso",
      description: "Calculando el peso del árbol (número de nodos)",
    });
    const peso = this.pesoRecursivo(this.root);
    this.steps.push({
      action: "obtenerPeso",
      description: `Peso del árbol calculado`,
      result: `${peso} nodos`,
    });
    return peso;
  }

  private pesoRecursivo(nodo: BSTNode | null): number {
    if (nodo === null) {
      this.steps.push({
        action: "obtenerPeso",
        description: "Nodo nulo encontrado, retornando 0",
      });
      return 0;
    }

    this.steps.push({
      action: "obtenerPeso",
      description: `Contando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });

    const pesoIzq = this.pesoRecursivo(nodo.left);
    const pesoDer = this.pesoRecursivo(nodo.right);
    const pesTotal = 1 + pesoIzq + pesoDer;

    this.steps.push({
      action: "obtenerPeso",
      description: `Nodo ${nodo.value}: 1 + ${pesoIzq} (izq) + ${pesoDer} (der) = ${pesTotal}`,
      currentNode: nodo.value,
    });

    return pesTotal;
  }

  // Método: Obtener altura
  obtenerAltura(): number {
    this.steps = [];
    this.steps.push({
      action: "obtenerAltura",
      description: "Calculando la altura del árbol",
    });
    const altura = this.alturaRecursiva(this.root);
    this.steps.push({
      action: "obtenerAltura",
      description: `Altura del árbol calculada`,
      result: `Altura: ${altura}`,
    });
    return altura;
  }

  private alturaRecursiva(nodo: BSTNode | null): number {
    if (nodo === null) {
      this.steps.push({
        action: "obtenerAltura",
        description: "Nodo nulo encontrado, altura = -1",
      });
      return -1;
    }

    this.steps.push({
      action: "obtenerAltura",
      description: `Calculando altura del nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });

    const alturaIzq = this.alturaRecursiva(nodo.left);
    const alturaDer = this.alturaRecursiva(nodo.right);
    const alturaActual = 1 + Math.max(alturaIzq, alturaDer);

    this.steps.push({
      action: "obtenerAltura",
      description: `Nodo ${nodo.value}: 1 + max(${alturaIzq}, ${alturaDer}) = ${alturaActual}`,
      currentNode: nodo.value,
    });

    return alturaActual;
  }

  // Método: Obtener nivel de un nodo
  obtenerNivel(valor: number): number {
    this.steps = [];
    this.steps.push({
      action: "obtenerNivel",
      description: `Buscando el nivel del nodo con valor ${valor}`,
      nodeValue: valor,
    });
    const nivel = this.nivelRecursivo(this.root, valor, 0);
    this.steps.push({
      action: "obtenerNivel",
      description: `Búsqueda de nivel completada`,
      result: nivel === -1 ? `${valor} no existe` : `Nivel: ${nivel}`,
    });
    return nivel;
  }

  private nivelRecursivo(nodo: BSTNode | null, valor: number, nivel: number): number {
    if (nodo === null) {
      this.steps.push({
        action: "obtenerNivel",
        description: `Nodo nulo alcanzado. ${valor} no existe`,
        nodeValue: valor,
      });
      return -1;
    }

    this.steps.push({
      action: "obtenerNivel",
      description: `Comparando ${valor} con nodo ${nodo.value} en nivel ${nivel}`,
      nodeValue: valor,
      currentNode: nodo.value,
    });

    if (valor === nodo.value) {
      this.steps.push({
        action: "obtenerNivel",
        description: `¡Encontrado! ${valor} está en nivel ${nivel}`,
        comparison: `${valor} === ${nodo.value}`,
      });
      return nivel;
    } else if (valor < nodo.value) {
      this.steps.push({
        action: "obtenerNivel",
        description: `${valor} < ${nodo.value}, buscando en subárbol izquierdo`,
        comparison: `${valor} < ${nodo.value}`,
      });
      return this.nivelRecursivo(nodo.left, valor, nivel + 1);
    } else {
      this.steps.push({
        action: "obtenerNivel",
        description: `${valor} > ${nodo.value}, buscando en subárbol derecho`,
        comparison: `${valor} > ${nodo.value}`,
      });
      return this.nivelRecursivo(nodo.right, valor, nivel + 1);
    }
  }

  // Método: Contar hojas
  contarHojas(): number {
    this.steps = [];
    this.steps.push({
      action: "contarHojas",
      description: "Contando el número de hojas en el árbol",
    });
    const cantidad = this.contarHojasRecursivo(this.root);
    this.steps.push({
      action: "contarHojas",
      description: `Conteo de hojas completado`,
      result: `${cantidad} hojas encontradas`,
    });
    return cantidad;
  }

  private contarHojasRecursivo(nodo: BSTNode | null): number {
    if (nodo === null) {
      this.steps.push({
        action: "contarHojas",
        description: "Nodo nulo encontrado, retornando 0",
      });
      return 0;
    }

    if (nodo.left === null && nodo.right === null) {
      this.steps.push({
        action: "contarHojas",
        description: `Hoja encontrada: ${nodo.value}`,
        currentNode: nodo.value,
      });
      return 1;
    }

    this.steps.push({
      action: "contarHojas",
      description: `Nodo interno: ${nodo.value}, explorando subárboles`,
      currentNode: nodo.value,
    });

    const hojasIzq = this.contarHojasRecursivo(nodo.left);
    const hojasDer = this.contarHojasRecursivo(nodo.right);
    const total = hojasIzq + hojasDer;

    this.steps.push({
      action: "contarHojas",
      description: `Nodo ${nodo.value}: ${hojasIzq} (izq) + ${hojasDer} (der) = ${total}`,
      currentNode: nodo.value,
    });

    return total;
  }

  // Método: Obtener menor
  obtenerMenor(): number | null {
    this.steps = [];
    this.steps.push({
      action: "obtenerMenor",
      description: "Buscando el valor menor en el árbol",
    });

    if (this.root === null) {
      this.steps.push({
        action: "obtenerMenor",
        description: "El árbol está vacío",
        result: "No hay valor menor",
      });
      return null;
    }

    const menor = this.obtenerMenorRecursivo(this.root);
    this.steps.push({
      action: "obtenerMenor",
      description: `Valor menor encontrado`,
      result: `${menor}`,
    });
    return menor;
  }

  private obtenerMenorRecursivo(nodo: BSTNode): number {
    this.steps.push({
      action: "obtenerMenor",
      description: `Visitando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });

    if (nodo.left === null) {
      this.steps.push({
        action: "obtenerMenor",
        description: `No hay hijo izquierdo. ${nodo.value} es el menor`,
        currentNode: nodo.value,
      });
      return nodo.value;
    }

    this.steps.push({
      action: "obtenerMenor",
      description: `Hay hijo izquierdo, continuando búsqueda`,
      currentNode: nodo.value,
    });

    return this.obtenerMenorRecursivo(nodo.left);
  }

  // Método: Obtener nodo mayor
  obtenerNodoMayor(): BSTNode | null {
    this.steps = [];
    this.steps.push({
      action: "obtenerNodoMayor",
      description: "Buscando el nodo con mayor valor",
    });

    if (this.root === null) {
      this.steps.push({
        action: "obtenerNodoMayor",
        description: "El árbol está vacío",
        result: "No hay nodo mayor",
      });
      return null;
    }

    const nodo = this.obtenerNodoMayorRecursivo(this.root);
    this.steps.push({
      action: "obtenerNodoMayor",
      description: `Nodo mayor encontrado`,
      result: `Valor: ${nodo.value}`,
    });
    return nodo;
  }

  private obtenerNodoMayorRecursivo(nodo: BSTNode): BSTNode {
    this.steps.push({
      action: "obtenerNodoMayor",
      description: `Visitando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });

    if (nodo.right === null) {
      this.steps.push({
        action: "obtenerNodoMayor",
        description: `No hay hijo derecho. ${nodo.value} es el mayor`,
        currentNode: nodo.value,
      });
      return nodo;
    }

    this.steps.push({
      action: "obtenerNodoMayor",
      description: `Hay hijo derecho, continuando búsqueda`,
      currentNode: nodo.value,
    });

    return this.obtenerNodoMayorRecursivo(nodo.right);
  }

  // Método: Obtener nodo menor
  obtenerNodoMenor(): BSTNode | null {
    this.steps = [];
    this.steps.push({
      action: "obtenerNodoMenor",
      description: "Buscando el nodo con menor valor",
    });

    if (this.root === null) {
      this.steps.push({
        action: "obtenerNodoMenor",
        description: "El árbol está vacío",
        result: "No hay nodo menor",
      });
      return null;
    }

    const nodo = this.obtenerNodoMenorRecursivo(this.root);
    this.steps.push({
      action: "obtenerNodoMenor",
      description: `Nodo menor encontrado`,
      result: `Valor: ${nodo.value}`,
    });
    return nodo;
  }

  private obtenerNodoMenorRecursivo(nodo: BSTNode): BSTNode {
    this.steps.push({
      action: "obtenerNodoMenor",
      description: `Visitando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });

    if (nodo.left === null) {
      this.steps.push({
        action: "obtenerNodoMenor",
        description: `No hay hijo izquierdo. ${nodo.value} es el menor`,
        currentNode: nodo.value,
      });
      return nodo;
    }

    this.steps.push({
      action: "obtenerNodoMenor",
      description: `Hay hijo izquierdo, continuando búsqueda`,
      currentNode: nodo.value,
    });

    return this.obtenerNodoMenorRecursivo(nodo.left);
  }

  // Método: Imprimir amplitud (BFS)
  imprimirAmplitud(): number[] {
    this.steps = [];
    this.steps.push({
      action: "imprimirAmplitud",
      description: "Iniciando recorrido por amplitud (BFS)",
    });

    if (this.root === null) {
      this.steps.push({
        action: "imprimirAmplitud",
        description: "El árbol está vacío",
        result: "[]",
      });
      return [];
    }

    const resultado: number[] = [];
    const cola: BSTNode[] = [this.root];

    while (cola.length > 0) {
      const nodo = cola.shift()!;
      this.steps.push({
        action: "imprimirAmplitud",
        description: `Visitando nodo: ${nodo.value}`,
        currentNode: nodo.value,
      });
      resultado.push(nodo.value);

      if (nodo.left !== null) {
        this.steps.push({
          action: "imprimirAmplitud",
          description: `Agregando hijo izquierdo ${nodo.left.value} a la cola`,
          currentNode: nodo.left.value,
        });
        cola.push(nodo.left);
      }

      if (nodo.right !== null) {
        this.steps.push({
          action: "imprimirAmplitud",
          description: `Agregando hijo derecho ${nodo.right.value} a la cola`,
          currentNode: nodo.right.value,
        });
        cola.push(nodo.right);
      }
    }

    this.steps.push({
      action: "imprimirAmplitud",
      description: `Recorrido por amplitud completado: ${resultado.join(", ")}`,
      result: resultado.join(", "),
    });

    return resultado;
  }

  // Método: Eliminar dato
  eliminarDato(valor: number): boolean {
    this.steps = [];
    this.steps.push({
      action: "eliminarDato",
      description: `Iniciando eliminación del valor ${valor}`,
      nodeValue: valor,
    });

    const resultado = this.eliminarRecursivo(this.root, valor);
    if (resultado.nodo !== this.root) {
      this.root = resultado.nodo;
    }

    this.steps.push({
      action: "eliminarDato",
      description: `Eliminación completada`,
      result: resultado.eliminado ? `${valor} eliminado exitosamente` : `${valor} no encontrado`,
      treeState: this.root,
    });

    return resultado.eliminado;
  }

  private eliminarRecursivo(
    nodo: BSTNode | null,
    valor: number
  ): { nodo: BSTNode | null; eliminado: boolean } {
    if (nodo === null) {
      this.steps.push({
        action: "eliminarDato",
        description: `Nodo nulo alcanzado. ${valor} no existe`,
        nodeValue: valor,
      });
      return { nodo: null, eliminado: false };
    }

    this.steps.push({
      action: "eliminarDato",
      description: `Comparando ${valor} con nodo ${nodo.value}`,
      nodeValue: valor,
      currentNode: nodo.value,
    });

    if (valor < nodo.value) {
      this.steps.push({
        action: "eliminarDato",
        description: `${valor} < ${nodo.value}, buscando en subárbol izquierdo`,
        comparison: `${valor} < ${nodo.value}`,
      });
      const resultado = this.eliminarRecursivo(nodo.left, valor);
      nodo.left = resultado.nodo;
      return { nodo, eliminado: resultado.eliminado };
    } else if (valor > nodo.value) {
      this.steps.push({
        action: "eliminarDato",
        description: `${valor} > ${nodo.value}, buscando en subárbol derecho`,
        comparison: `${valor} > ${nodo.value}`,
      });
      const resultado = this.eliminarRecursivo(nodo.right, valor);
      nodo.right = resultado.nodo;
      return { nodo, eliminado: resultado.eliminado };
    } else {
      // Nodo encontrado
      this.steps.push({
        action: "eliminarDato",
        description: `¡Encontrado! ${valor} = ${nodo.value}. Procediendo a eliminar`,
        comparison: `${valor} === ${nodo.value}`,
      });

      // Caso 1: Nodo sin hijos (hoja)
      if (nodo.left === null && nodo.right === null) {
        this.steps.push({
          action: "eliminarDato",
          description: `${nodo.value} es una hoja (sin hijos). Eliminando directamente`,
          currentNode: nodo.value,
        });
        return { nodo: null, eliminado: true };
      }

      // Caso 2: Nodo con solo hijo derecho
      if (nodo.left === null) {
        this.steps.push({
          action: "eliminarDato",
          description: `${nodo.value} tiene solo hijo derecho. Reemplazando con hijo derecho`,
          currentNode: nodo.value,
        });
        return { nodo: nodo.right, eliminado: true };
      }

      // Caso 3: Nodo con solo hijo izquierdo
      if (nodo.right === null) {
        this.steps.push({
          action: "eliminarDato",
          description: `${nodo.value} tiene solo hijo izquierdo. Reemplazando con hijo izquierdo`,
          currentNode: nodo.value,
        });
        return { nodo: nodo.left, eliminado: true };
      }

      // Caso 4: Nodo con dos hijos
      this.steps.push({
        action: "eliminarDato",
        description: `${nodo.value} tiene dos hijos. Buscando sucesor (menor del subárbol derecho)`,
        currentNode: nodo.value,
      });

      const sucesor = this.obtenerNodoMenorRecursivoSilent(nodo.right);
      this.steps.push({
        action: "eliminarDato",
        description: `Sucesor encontrado: ${sucesor.value}. Reemplazando valor de ${nodo.value} con ${sucesor.value}`,
        currentNode: nodo.value,
      });

      nodo.value = sucesor.value;

      this.steps.push({
        action: "eliminarDato",
        description: `Eliminando el sucesor ${sucesor.value} del subárbol derecho`,
        currentNode: sucesor.value,
      });

      const resultado = this.eliminarRecursivo(nodo.right, sucesor.value);
      nodo.right = resultado.nodo;
      return { nodo, eliminado: true };
    }
  }

  private obtenerNodoMenorRecursivoSilent(nodo: BSTNode): BSTNode {
    if (nodo.left === null) {
      return nodo;
    }
    return this.obtenerNodoMenorRecursivoSilent(nodo.left);
  }

  // Método: Borrar el árbol
  borrarArbol(): void {
    this.steps = [];
    this.steps.push({
      action: "borrarArbol",
      description: "Iniciando eliminación de todos los nodos del árbol",
    });

    this.borrarArbolRecursivo(this.root);
    this.root = null;

    this.steps.push({
      action: "borrarArbol",
      description: "Árbol completamente eliminado",
      result: "Árbol vacío",
      treeState: null,
    });
  }

  private borrarArbolRecursivo(nodo: BSTNode | null): void {
    if (nodo === null) return;

    this.steps.push({
      action: "borrarArbol",
      description: `Eliminando nodo: ${nodo.value}`,
      currentNode: nodo.value,
    });

    this.borrarArbolRecursivo(nodo.left);
    this.borrarArbolRecursivo(nodo.right);
  }

  // Método auxiliar: Obtener todos los pasos
  getSteps(): ExecutionStep[] {
    return this.steps;
  }
}
