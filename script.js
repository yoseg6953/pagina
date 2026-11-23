
// MENÚ RESPONSIVO
const menuBoton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

if (menuBoton && menu) {
    menuBoton.addEventListener("click", function () {
        menu.classList.toggle("abierto");

        if (menu.classList.contains("abierto")) {
            menuBoton.textContent = "✕";
            menuBoton.setAttribute("aria-label", "Cerrar menú");
        } else {
            menuBoton.textContent = "☰";
            menuBoton.setAttribute("aria-label", "Abrir menú");
        }
    });

    document.querySelectorAll(".menu a").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            menu.classList.remove("abierto");
            menuBoton.textContent = "☰";
            menuBoton.setAttribute("aria-label", "Abrir menú");
        });
    });
}

// AUTOEVALUACIÓN DE BIENESTAR
const guardarEvaluacion = document.getElementById("guardarEvaluacion");

if (guardarEvaluacion) {
    guardarEvaluacion.addEventListener("click", function () {
        const campos = [
            document.getElementById("descanso"),
            document.getElementById("actividad"),
            document.getElementById("emociones"),
            document.getElementById("estres")
        ];

        const resultado = document.getElementById("resultadoEvaluacion");

        const incompleto = campos.some(function (campo) {
            return campo.value === "";
        });

        if (incompleto) {
            resultado.textContent = "Completa todos los apartados para guardar tu escaneo.";
            return;
        }

        resultado.textContent =
            "¡Escaneo completado! Has identificado tus hábitos físicos y emocionales.";

        localStorage.setItem("escaneoBienestar", JSON.stringify(
            campos.map(function (campo) {
                return campo.value;
            })
        ));
    });
}

// GUARDAR COMPROMISO PERSONAL
const guardarCompromiso = document.getElementById("guardarCompromiso");

if (guardarCompromiso) {
    guardarCompromiso.addEventListener("click", function () {
        const compromiso = document.getElementById("miCompromiso").value.trim();
        const resultado = document.getElementById("resultadoCompromiso");

        if (compromiso === "") {
            resultado.textContent = "Escribe tu compromiso antes de guardarlo.";
            return;
        }

        localStorage.setItem("compromisoPersonal", compromiso);

        resultado.textContent = "¡Tu compromiso se guardó correctamente!";
    });
}

// RECUPERAR EL COMPROMISO GUARDADO
const miCompromiso = document.getElementById("miCompromiso");

if (miCompromiso) {
    const compromisoGuardado = localStorage.getItem("compromisoPersonal");

    if (compromisoGuardado) {
        miCompromiso.value = compromisoGuardado;
    }
}

// MENSAJE DE BIENVENIDA EN CONSOLA
console.log("CÓDIGO HUMANO: Programando rutas de paz para mi bienestar integral.");
