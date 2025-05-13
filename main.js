const prompt = require('prompt-sync')();

let numero1 = 10;
let numero2 = 5;
let operacionActual = "suma";

function realizarOperacion(num1, num2, operacion) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Ingrese números válidos";
    }

    switch (operacion.toLowerCase()) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            if (num2 === 0) {
                return "Error: No se puede dividir por cero";
            }
            return num1 / num2;
        default:
            return "Error: Operación no válida. Use: suma, resta, multiplicacion o division";
    }
}

function iniciarCalculadora() {
    let continuar = true;

    console.log("Bienvenido a la Calculadora Básica");
    console.log("Ingrese 'salir' como operación para terminar\n");

    while (continuar) {
        const input1 = prompt("Ingrese el primer número: ");
        if (input1 === null || input1.toLowerCase() === "salir") break;

        const input2 = prompt("Ingrese el segundo número: ");
        if (input2 === null || input2.toLowerCase() === "salir") break;

        const operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division): ");
        if (operacion === null || operacion.toLowerCase() === "salir") break;

        const resultado = realizarOperacion(input1, input2, operacion);
        console.log(`El resultado es: ${resultado}`);

        const respuesta = prompt("¿Desea realizar otra operación? (si/no) ");
        continuar = respuesta && respuesta.toLowerCase() === "si";
    }

    console.log("Gracias por usar la calculadora. ¡Hasta pronto!");
}

iniciarCalculadora();
