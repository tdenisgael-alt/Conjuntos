function obtenerConjunto(id) {

    const texto = document.getElementById(id).value.trim();

    if (texto === "") {
        return [];
    }

    return texto
        .split(",")
        .map(numero => Number(numero.trim()))
        .filter(numero => !isNaN(numero));
}


function esPrimo(numero) {

    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {

        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}


function procesarConjuntos() {

    const conjunto1 = obtenerConjunto("conjunto1");
    const conjunto2 = obtenerConjunto("conjunto2");
    const conjunto3 = obtenerConjunto("conjunto3");

    const todos = [
        ...conjunto1,
        ...conjunto2,
        ...conjunto3
    ];

    if (todos.length === 0) {
        alert("Debe ingresar números en los conjuntos.");
        return;
    }

    const impares = todos.filter(numero => numero % 2 !== 0);

    const pares = todos.filter(numero => numero % 2 === 0);

    const primos = todos.filter(numero => esPrimo(numero));

    const ordenados = [...todos].sort((a, b) => a - b);

    document.getElementById("impares").textContent =
        `{ ${impares.join(", ")} }`;

    document.getElementById("pares").textContent =
        `{ ${pares.join(", ")} }`;

    document.getElementById("primos").textContent =
        `{ ${primos.join(", ")} }`;

    document.getElementById("ordenados").textContent =
        `{ ${ordenados.join(", ")} }`;
}