function calcular() {
  const inputTexto = document.getElementById('numerosInput').value.trim();
  const mayorOutput = document.getElementById('mayorOutput');
  const menorOutput = document.getElementById('menorOutput');
  const promedioOutput = document.getElementById('promedioOutput');

  mayorOutput.value = '';
  menorOutput.value = '';
  promedioOutput.value = '';

  if (inputTexto === '') {
    alert('Debes ingresar valores para calcular');
    return;
  }

  const arregloCadenas = inputTexto.split(',');
  const numeros = arregloCadenas
    .map(item => item.trim())
    .filter(item => item !== '') 
    .map(Number);

  if (numeros.length === 0 || numeros.some(isNaN)) {
    alert('Solo puedes ingresar números');
    return;
  }

  const mayor = Math.max(...numeros);
  const menor = Math.min(...numeros);
  const suma = numeros.reduce((acc, valor) => acc + valor, 0);
  const promedio = suma / numeros.length;
  mayorOutput.value = mayor;
  menorOutput.value = menor;
  promedioOutput.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
}