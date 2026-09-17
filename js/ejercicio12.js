const TASA_DE_CAMBIO = 0.055;
function convertir(){
  const inputCampo = document.getElementById('mxn').value.trim();
  const outputCampo = document.getElementById('usd');

  if (inputCampo === '') {
    alert('Por favor, ingresa un valor');
    outputCampo.value = '';
    return;
  }

  const mxn = parseFloat(inputCampo);

  if (isNaN(mxn) || mxn <= 0) {
    alert('Sólo pudedes ingresar números');
    outputCampo.value = '';
    return;
  }

  const usd = mxn * TASA_DE_CAMBIO;
  outputCampo.value = `${usd.toFixed(2)} USD`;
}