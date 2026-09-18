function verificar(){
  const inputCampo = document.getElementById('edad').value.trim();
  const outputCampo = document.getElementById('resultado');

  if (inputCampo === '') {
    alert('Ingresa una edad');
    outputCampo.value = '';
    return;
  }

  const edad = Number(inputCampo);

  if (isNaN(edad) || edad < 0 || !Number.isInteger(edad)) {
    alert('Por favor ingresa un número entero válido.');
    outputCampo.value = '';
    return;
  }

  if (edad >= 18) {
    outputCampo.value = 'Puedes votar';
  } else {
    outputCampo.value = 'No puedes votar';
  }
}