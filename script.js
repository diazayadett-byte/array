// Función principal para ejecutar los ejercicios
function ejecutarEjercicio(ejercicioNum) {
    let resultado = "";
    let titulo = `Ejercicio ${ejercicioNum}:\n`;

    switch (ejercicioNum) {
        case 1:
            resultado = ejercicio1();
            break;
        case 2:
            resultado = ejercicio2();
            break;
        case 3:
            resultado = ejercicio3();
            break;
        case 4:
            resultado = ejercicio4();
            break;
        case 5:
            resultado = ejercicio5();
            break;
        case 6:
            resultado = ejercicio6();
            break;
        default:
            resultado = "Ejercicio no encontrado.";
    }

    // Muestra el resultado en el recuadro
    const resultBox = document.getElementById('result-content');
    resultBox.innerHTML = `<h3>${titulo}</h3><pre>${resultado}</pre>`;
}

// --- EJERCICIO 1: Unir Arreglo (sugerencia: join()) ---
function ejercicio1() {
    let arr = ["This", "is", "a", "sentence."];
    
    // Usamos el método join() para unir los elementos con un espacio
    function printOutString(array) {
        return array.join(" ");
    }
    
    const resultado = printOutString(arr);
    return `Arreglo original: [${arr.join(', ')}]\nResultado: "${resultado}"`;
}

// --- EJERCICIO 2: Duplicar Valores (sugerencia: map()) ---
function ejercicio2() {
    // Obtener los números del input del HTML
    const inputElement = document.getElementById('input2');
    const inputVal = inputElement.value.trim();
    
    // Si no hay input, usar el ejemplo
    const rawArr = inputVal ? inputVal.split(',') : ['1', '2', '4', '5'];
    
    // Convertir a números
    const arr = rawArr.map(item => Number(item.trim())).filter(n => !isNaN(n));
    
    // Función para duplicar
    function doubleValues(numbers) {
        // Usamos map() para iterar y devolver un nuevo arreglo
        const doubled = numbers.map(number => number * 2);
        return doubled;
    }

    const newArr = doubleValues(arr);
    
    return `Arreglo original: [${arr.join(', ')}]\nArreglo duplicado: [${newArr.join(', ')}]`;
}

// --- EJERCICIO 3: Suma y Producto (sugerencia: reduce()) ---
function ejercicio3() {
    // Obtener los números del input del HTML
    const inputElement = document.getElementById('input3');
    const inputVal = inputElement.value.trim();
    
    // Si no hay input, usar el ejemplo
    const rawArr = inputVal ? inputVal.split(',') : ['1', '2', '3', '4'];
    
    // Convertir a números
    const arr = rawArr.map(item => Number(item.trim())).filter(n => !isNaN(n));

    // Calcular la suma usando reduce
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    // Calcular el producto usando reduce
    const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

    return `Arreglo original: [${arr.join(', ')}]\nSuma total: ${sum}\nProducto total: ${product}`;
}

// --- EJERCICIO 4: Cursos Comunes (sugerencia: filter() e includes()) ---
function ejercicio4() {
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    // Usamos filter() en el primer arreglo y dentro de la función de callback usamos includes() 
    // para verificar si el elemento existe en el segundo arreglo.
    const commonCourses = student1Courses.filter(course => student2Courses.includes(course));

    return `Cursos Estudiante 1: [${student1Courses.join(', ')}]\nCursos Estudiante 2: [${student2Courses.join(', ')}]\nCursos en común: [${commonCourses.join(', ')}]`;
}


// --- EJERCICIO 5: Manipulación de Arreglo de Personas ---
function ejercicio5() {
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    let steps = [];
    
    // 1. Escribe un comando que imprima todas las personas de la lista.
    steps.push(`1. Arreglo inicial: [${people.join(', ')}]`);

    // 2. Escribe el comando para remover "Dani" del arreglo.
    const daniIndex = people.indexOf("Dani");
    if (daniIndex > -1) {
        people.splice(daniIndex, 1);
    }
    steps.push(`2. Eliminar 'Dani': [${people.join(', ')}]`);

    // 3. Escribe el comando para remover "Juan" del arreglo.
    const juanIndex = people.indexOf("Juan");
    if (juanIndex > -1) {
        people.splice(juanIndex, 1);
    }
    steps.push(`3. Eliminar 'Juan': [${people.join(', ')}]`);
    
    // 4. Escribe el comando para mover "Luis" al frente del arreglo.
    const luisIndex = people.indexOf("Luis");
    if (luisIndex > -1) {
        const luis = people.splice(luisIndex, 1)[0]; // 1. Eliminar Luis
        people.unshift(luis); // 2. Añadir Luis al inicio
    }
    steps.push(`4. Mover 'Luis' al inicio: [${people.join(', ')}]`);
    
    // 5. Escribe el comando para añadir tu nombre al final del arreglo.
    const myName = "TuNombre"; // Reemplaza "TuNombre" por tu nombre real si quieres
    people.push(myName);
    steps.push(`5. Añadir '${myName}' al final: [${people.join(', ')}]`);

    // 6. Usando un ciclo, itera a través de este arreglo y después de console.log "Maria", sal del ciclo.
    let loopOutput = "6. Iteración (salir después de Maria): ";
    for (let i = 0; i < people.length; i++) {
        loopOutput += people[i] + (i < people.length - 1 ? ', ' : '');
        if (people[i] === "Maria") {
            break;
        }
    }
    steps.push(loopOutput);
    
    // 7. Escribe el comando que da el indexOf donde se encuentra "Maria".
    const mariaIndex = people.indexOf("Maria");
    steps.push(`7. Index de 'Maria': ${mariaIndex}`);
    
    // Al final del ejercicio, debe haber 4 personas en el arreglo.
    steps.push(`8. Arreglo final (Longitud: ${people.length}): [${people.join(', ')}]`);

    return steps.join('\n');
}

// --- EJERCICIO 6 (OPCIONAL): Algoritmo de la Burbuja ---
function ejercicio6() {
    // Obtener los números del input del HTML
    const inputElement = document.getElementById('input6');
    const inputVal = inputElement.value.trim();
    
    // Si no hay input, usar el ejemplo
    const rawArr = inputVal ? inputVal.split(',') : ['3', '6', '12', '5', '100', '1'];
    
    // Convertir a números
    let arr = rawArr.map(item => Number(item.trim())).filter(n => !isNaN(n));

    // Algoritmo de la Burbuja
    function bubbleSort(array) {
        const n = array.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                // Si el elemento actual es mayor que el siguiente
                if (array[i] > array[i + 1]) {
                    // Intercambiar elementos
                    [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    swapped = true;
                }
            }
        } while (swapped);
        return array;
    }

    const sortedArr = bubbleSort(arr.slice()); // Usar .slice() para no modificar el arreglo original
    
    return `Arreglo original: [${arr.join(', ')}]\nArreglo ordenado: [${sortedArr.join(', ')}]`;
}