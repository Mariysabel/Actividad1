const manejarTareas = (() => {
    let tareas = [];

    const obtenerTareas = () => {
        let datos = localStorage.getItem("tareas");
        if (datos !== null) {
            tareas = JSON.parse(datos);
        }
        return tareas;
    };

    const guardarTareas = () => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    };

    const agregar = (texto) => {
        tareas.push(texto);
        guardarTareas();
    };

    const eliminar = (indice) => {
        tareas.splice(indice, 1);
        guardarTareas();
    };

    return {
        obtenerTareas,
        agregar,
        eliminar
    };

})();

function cargarTareas() {
    manejarTareas.obtenerTareas();
    renderizarTareas();
}

function agregarTarea() {
    let tarea = document.getElementById("tarea").value;
    if (tarea === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Escribe una tarea antes de agregarla."
        });
        return;
    }

    manejarTareas.agregar(tarea);
    document.getElementById("tarea").value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {

    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "Esta tarea se eliminará de la lista.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
            Swal.fire({
                icon: "success",
                title: "Tarea eliminada",
                text: "La tarea se eliminó correctamente."
            });
        }
    });
}

function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    let tareas = manejarTareas.obtenerTareas();
    lista.innerHTML = "";

    if (tareas.length === 0) {

        lista.innerHTML = "<p>No hay tareas pendientes.</p>";

        return;
    }

    tareas.forEach((tarea, indice) => {
        let elemento = document.createElement("div");
        elemento.className = "tarea";
        let texto = document.createElement("span");
        texto.textContent = tarea;
        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.className = "botonEliminar";

        boton.onclick = function() {
            eliminarTarea(indice);
        };

        elemento.appendChild(texto);
        elemento.appendChild(boton);
        lista.appendChild(elemento);
    });
}

cargarTareas();