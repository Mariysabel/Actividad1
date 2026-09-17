function convertir(){
    let kilometros = document.getElementById("kilometros").value;

    if (kilometros === "") {
        alert("Por favor, ingresa una distancia en kilómetros.");
        return;
    }

    if (isNaN(kilometros)) {
        alert("El valor ingresado debe ser numérico.");
        return;
    }

    kilometros = Number(kilometros);
    let millas = kilometros * 0.621371;
    document.getElementById("millas").value = millas.toFixed(5);
}