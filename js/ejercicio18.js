const inputNuevoElemento = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const listaElementos = document.getElementById('lista');

function agregarElemento() {
    const texto = inputNuevoElemento.value.trim();

    if (texto === '') {
        alert('Por favor, escribe algo para agregar a la lista.');  
        return;
    }
  
    const itemLista = document.createElement('li');
    itemLista.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');

    botonEliminar.addEventListener('click', function () {
        eliminarElemento(itemLista);
    });

    itemLista.appendChild(spanTexto);
    itemLista.appendChild(botonEliminar);
    listaElementos.appendChild(itemLista);
    inputNuevoElemento.value = '';
    inputNuevoElemento.focus();
}

function eliminarElemento(elementoAEliminar) {
    elementoAEliminar.remove();
}

botonAgregar.addEventListener('click', agregarElemento);

inputNuevoElemento.addEventListener('keypress', function (evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});