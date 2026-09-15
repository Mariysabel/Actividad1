function calcular() {
    if (event) event.preventDefault();
    let celsius = document.getElementById("celsius").value.trim();
    if (celsius === "") {
        alert("Por favor, ingrese una temperatura.");
        return;
    }

    let valorCelsius = Number(celsius);
    let fahrenheit = (valorCelsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
}
