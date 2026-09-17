document.getElementById('verificarBtn').addEventListener('click', function () {
  const inputCampo = document.getElementById('edadInput').value.trim();
  const outputCampo = document.getElementById('resultadoOutput');

  // Validación: verificar si el campo está vacío
  if (inputCampo === '') {
    alert('Error: El campo de edad no puede estar vacío.');
    outputCampo.value = '';
    return;
  }

  const edad = Number(inputCampo);

  // Validación: verificar que sea un número entero y positivo
  if (isNaN(edad) || edad < 0 || !Number.isInteger(edad)) {
    alert('Error: Por favor ingresa un número entero positivo válido.');
    outputCampo.value = '';
    return;
  }

  // Evaluación de la condición para votar
  if (edad >= 18) {
    outputCampo.value = 'Puedes votar';
  } else {
    outputCampo.value = 'No puedes votar';
  }
});