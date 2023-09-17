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

 

 

  const objetivosRespuestas={
    perder_peso: "Para perder peso, recomendamos una rutina de ejercicios aeróbicos como correr o nadar, acompañada de una dieta equilibrada.",
    
    ganar_masa_muscular:"Para ganar masa muscular, recomendamos un programa de entrenamiento de fuerza con levantamiento de pesas y una ingesta adecuada de proteínas.",
    
    ambos:"Si deseas perder peso y ganar masa muscular al mismo tiempo, te recomendamos un enfoque que combine ejercicios aeróbicos y entrenamiento de fuerza, junto con una dieta controlada.",

    adelgazar:"Para adelgazar, te recomendamos una combinación de ejercicios cardiovasculares y una dieta baja en calorías.",
    
  }

  const estadoFisicoRespuestas={
    bueno:"Metele pata",

    regular:"Cagaste",

    malo:"En el horno",
  }

  recomendacion += objetivosRespuestas[objetivos] + '<br>'+ estadoFisicoRespuestas[estadoFisico];
  
  
 


// rutinas

class RutinaControlador {

  constructor(nombre, orientado) {

    this.nombre = nombre;

    this.orientado = orientado;

    this.ejercicios = [];

  }

  agregarEjercicio(nombre, duracionEnMin, repeticiones) {

    this.ejercicios.push({

      nombre: nombre,

      duracionEnMin: duracionEnMin,

      repeticiones: repeticiones,

    });

  }

}

const rutinaBoxeo = new RutinaControlador('Rutina1', 'boxeo');

const rutinaSpinning = new RutinaControlador('Rutina de spinning', 'spinning');

const rutinaFuncional = new RutinaControlador ('Rutina de Funcional', 'funcional');

 

rutinaBoxeo.agregarEjercicio('flexiones', 2, 10);
rutinaBoxeo.agregarEjercicio('burpees', 10, 50);
rutinaSpinning.agregarEjercicio('cardio', 23, 6); 
rutinaSpinning.agregarEjercicio('cardio', 23, 6); 


console.log(rutinaBoxeo);

const rutinas = [rutinaBoxeo, rutinaSpinning, rutinaFuncional];


const rutinaSeleccionada = rutinas.find(rutina => rutina.orientado==gustos
)

let rutinasHTML = ''

    const renderizarEjercicios = (ejercicios) =>{

        let resultHTML = ''

        ejercicios.forEach(ejercicio =>{
          console.log(ejercicio)

            resultHTML += `

                <div>

                    <h3>${ejercicio.nombre}</h3>

                    <span>Repeticiones: ${ejercicio.repeticiones} x ${ejercicio.duracionEnMin} cada uno</span>

                    <hr>

                </div>

            `

        })

        return resultHTML

    }

    rutinasHTML = `

       <h2>${rutinaSeleccionada.nombre}</h2>


        <span>Orientado a: ${rutinaSeleccionada.orientado}</span>

        <div>

            ${renderizarEjercicios(rutinaSeleccionada.ejercicios)}

        <div>

    `

    recomendacion += rutinasHTML

  

  
  if (isNaN(edad) || edad <= 0) {
    alert("Por favor, ingrese una edad válida.");
    return;
  }
  divRecomendacion.innerHTML = recomendacion;
  formulario.append(divRecomendacion);
}