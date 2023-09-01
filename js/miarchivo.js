// Obtener referencia al formulario
const formulario = document.createElement("form");
formulario.id = "registroForm";

// Crear y agregar campos y etiquetas al formulario
formulario.innerHTML = `
    <label for="nombre">Nombre y apellido:</label>
    <input type="text" id="nombre" name="nombre" required><br>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" required><br>

    <label for="objetivos">Objetivos:</label>
    <select id="objetivos" name="objetivos" required>
        <option value="perder_peso">Perder Peso</option>
        <option value="ganar_masa_muscular">Ganar Masa Muscular</option>
        <option value="ambos">Ambos (Perder Peso y Ganar Masa Muscular)</option>
        <option value="adelgazar">Adelgazar</option>
    </select><br>

    <label for="gustos">Gustos en Actividades Físicas:</label>
    <select id="gustos[]" multiple size="3" name="gustos" multiple required>
        <option value="danza">Danza</option>
        <option value="entrenamiento_peso">Entrenamiento con Pesas</option>
        <option value="spinning">Spinning</option>
        <option value="running">Running</option>
        <option value="bodypump">Bodypump</option>
        <option value="boxeo">Boxeo</option>
        <option value="funcional">Funcional</option>
        <option value="localizada">Localizada</option>
        <option value="yoga">Yoga</option>
        <option value="pilates">Pilates</option>

    </select><br>

    <label for="estado_fisico">Estado Físico:</label>
    <input type="radio" id="bueno" name="estado_fisico" value="bueno" required>
    <label for="bueno">Bueno</label>
    <input type="radio" id="regular" name="estado_fisico" value="regular">
    <label for="regular">Regular</label>
    <input type="radio" id="malo" name="estado_fisico" value="malo">
    <label for="malo">Malo</label><br>



    <label for="condiciones_salud">Condiciones de Salud Previas:</label>
    <textarea id="condiciones_salud" name="condiciones_salud" rows="4" cols="50"></textarea><br>

    <label for="salud_limitante">Que tan limitante para entrenar es?</label>
    <select id="salud_limitante[]"  name="salud_limitante">
    <option value="no_limita">No limita</option>
    <option value="moderado">Moderado</option>
    <option value="comprometido">Comprometido</option>
    <option value="no_aplica">No aplica</option>
   

    <input type="submit" value="Enviar">
`;

// Agregar el formulario al contenedor
const formularioContainer = document.getElementById("formularioContainer");
formularioContainer.appendChild(formulario);

// Agregar un evento de escucha para el envío del formulario
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario y realizar el procesamiento
    const nombre = formulario.elements["nombre"].value;
    const edad = parseInt(formulario.elements["edad"].value, 10);
    const objetivos = formulario.elements["objetivos"].value;
    const gustos = Array.from(formulario.elements["gustos"].selectedOptions).map(option => option.value);
    const estadoFisico = formulario.elements["estado_fisico"].value;
    const condicionesSalud = formulario.elements["condiciones_salud"].value;

    // Realizar el procesamiento principal aquí, como validación de datos
    let recomendacion = "Recomendación de rutina:\n";

    // Lógica para generar recomendaciones basadas en los objetivos
    if (objetivos === "perder_peso") {
        recomendacion += "Para perder peso, recomendamos una rutina de ejercicios aeróbicos como correr o nadar, acompañada de una dieta equilibrada.";
    } else if (objetivos === "ganar_masa_muscular") {
        recomendacion += "Para ganar masa muscular, recomendamos un programa de entrenamiento de fuerza con levantamiento de pesas y una ingesta adecuada de proteínas.";
    } else if (objetivos === "ambos") {
        recomendacion += "Si deseas perder peso y ganar masa muscular al mismo tiempo, te recomendamos un enfoque que combine ejercicios aeróbicos y entrenamiento de fuerza, junto con una dieta controlada.";
    } else if (objetivos === "adelgazar") {
        recomendacion += "Para adelgazar, te recomendamos una combinación de ejercicios cardiovasculares y una dieta baja en calorías.";
    }

    // Ejemplo: Validar la edad (debe ser un número mayor que cero)
    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    // Ejemplo: Mostrar un mensaje de éxito y reiniciar el formulario
    alert(`Gracias, ${nombre}! Formulario enviado correctamente.`);
    formulario.reset();
});