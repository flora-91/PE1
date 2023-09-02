// referencia al formulario
const formulario = document.getElementById("form");
let divRecomendacion = document.getElementById("recomendacion");
formulario.id = "registroForm";

// agrego el formulario al contenedor
const formularioContainer = document.getElementById("formularioContainer");

function generar() {
  event.preventDefault();

  // obtengo los valores del formulario y realizo el procesamiento
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value, 10);
  const objetivos = document.getElementById("objetivos").value;
  const gustosElement = document.getElementById("gustos").selectedOptions;
  let gustos = [];
  for (let i = 0; i < gustosElement.length; i++) {
    gustos.push(gustosElement[i].value);
  }
  const estadoFisico = document.querySelector(
    'input[name="estado_fisico"]:checked'
  ).value;
  console.log(estadoFisico);
  const condicionesSalud = document.getElementById("condiciones_salud").value;

  //  procesamiento principal 
  let recomendacion = "Recomendación de rutina:\n";

 
  switch (objetivos) {
    case "perder_peso":
      recomendacion +=
        "Para perder peso, recomendamos una rutina de ejercicios aeróbicos como correr o nadar, acompañada de una dieta equilibrada.";
      break;
    case "ganar_masa_muscular":
      recomendacion +=
        "Para ganar masa muscular, recomendamos un programa de entrenamiento de fuerza con levantamiento de pesas y una ingesta adecuada de proteínas.";
      break;
    case "ambos":
      recomendacion +=
        "Si deseas perder peso y ganar masa muscular al mismo tiempo, te recomendamos un enfoque que combine ejercicios aeróbicos y entrenamiento de fuerza, junto con una dieta controlada.";
      break;
    case "adelgazar":
      recomendacion +=
        "Para adelgazar, te recomendamos una combinación de ejercicios cardiovasculares y una dieta baja en calorías.";
      break;
  }

  recomendacion+= '<br>';
  
  switch (estadoFisico) {
    case "bueno":
      recomendacion +=
        "Metele pata";
      break;
    case "regular":
      recomendacion +=
        "Cagaste";
      break;
    case "malo":
      recomendacion +=
        "En el horno";
      break;
  }

  gustos.forEach(gusto => {
    recomendacion+='<br>';
    recomendacion+= gusto+' x50mil repeticiones';
  });

  
  if (isNaN(edad) || edad <= 0) {
    alert("Por favor, ingrese una edad válida.");
    return;
  }
  divRecomendacion.innerHTML = recomendacion;
  formulario.append(divRecomendacion);
}