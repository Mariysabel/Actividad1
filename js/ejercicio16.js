const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error";

function calcularOperacion(operacion) {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (numero1 === "" || numero2 === "") {
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, ingresa los dos números."
        });
        return;
    }

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Dato inválido",
            text: "Los valores ingresados deben ser números."
        });
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);
    let resultado;

    if (operacion === "suma") {
        resultado = sumar(numero1, numero2);

    } else if (operacion === "resta") {
        resultado = restar(numero1, numero2);

    } else if (operacion === "multiplicacion") {
        resultado = multiplicar(numero1, numero2);

    } else if (operacion === "division") {
        if (numero2 === 0) {
            Swal.fire({
                icon: "error",
                title: "Operación no válida",
                text: "No se puede dividir entre cero."
            });
            return;
        }

        resultado = dividir(numero1, numero2);
    }
    document.getElementById("resultado").value = resultado;
}