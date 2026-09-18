let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombre").value;
    let calificacion = document.getElementById("calificacion").value;
    
    if (nombre === "" || calificacion === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (isNaN(calificacion)) {
        alert("La calificación debe ser un número.");
        return;
    }

    calificacion = Number(calificacion);

    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);
    mostrarEstudiantes();
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function mostrarEstudiantes() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    estudiantes.forEach(function(estudiante) {
        let texto = document.createElement("p");
        texto.textContent =
            estudiante.nombre + " - " + estudiante.calificacion;
        lista.appendChild(texto);
    });
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("Agrega al menos un estudiante.");
        return;
    }

    let promedio = estudiantes.reduce(function(total, estudiante) {
        return total + estudiante.calificacion;
    }, 0) / estudiantes.length;

    let calificaciones = estudiantes.map(function(estudiante) {
        return estudiante.calificacion;
    });

    let calificacionMaxima = Math.max(...calificaciones);
    let calificacionMinima = Math.min(...calificaciones);
    let estudianteMayor = estudiantes.find(function(estudiante) {
        return estudiante.calificacion === calificacionMaxima;
    });

    let estudianteMenor = estudiantes.find(function(estudiante) {
        return estudiante.calificacion === calificacionMinima;
    });

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("mayor").value = estudianteMayor.nombre;
    document.getElementById("menor").value = estudianteMenor.nombre;
}