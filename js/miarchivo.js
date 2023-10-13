let modalContainer = document.getElementById("modal");


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
  let recomendacion = "     <button class='boton-cerrar' onclick='cerrarModal()'>x</button><h1>Recomendación de rutina:</h1>\n";





  const objetivosRespuestas = {
    perder_peso: "Una rutina de ejercicios efectiva para quemar grasa generalmente incluye una combinación de entrenamiento cardiovascular y entrenamiento de fuerza. Esto ayudará a aumentar tu metabolismo y a quemar calorías, lo que a su vez te ayudará a perder grasa. 3 veces por semana cardio + 2 veces por semana de musculación",

    ganar_masa_muscular: "Para ganar masa muscular, es importante realizar un programa de entrenamiento de fuerza efectivo y asegurarte de obtener suficientes nutrientes y descanso adecuado. Aquí tienes una rutina básica de entrenamiento de fuerza para ayudarte a aumentar la masa muscular. 5 veces por semana fuerza + 20 min de cardio después de cada entrenamiento. (2 dias de descanso).",

    ambos: "Quemar grasa y aumentar masa muscular al mismo tiempo puede ser un desafío, ya que a menudo requiere un enfoque más cuidadoso en la dieta y un equilibrio adecuado entre el entrenamiento cardiovascular y el entrenamiento de fuerza. Aquí tienes una rutina que combina ambos objetivos:4 veces por semana fuerza + 2 veces por semana cardio. (1 dia de descanso).",

    adelgazar: "Una rutina de ejercicios efectiva para quemar grasa generalmente incluye una combinación de entrenamiento cardiovascular y entrenamiento de fuerza. Esto ayudará a aumentar tu metabolismo y a quemar calorías, lo que a su vez te ayudará a perder grasa. 3 veces por semana cardio + 2 veces por semana de musculación.",

  }

  const gustosRespuestas = [
    
    { nombre: "danza" , descripcion: 'Sugerencias de clases: Zumba / Salsa / Bachata/ Dancehall / Reggaeton'},

    { nombre: "entrenamiento_peso" , descripcion: 'Sugerencias de clases: Levantamiento Olímpico / Powerlifting / Bodypump / Funcional'},

    { nombre: "spinning" , descripcion: 'Sugerencias de clases: clases de spinning o salir en bicicleta, (la cantidad de veces especificada antes)'},

    { nombre: "running" , descripcion: 'Sugerencias de clases: Spinning, HIIT, Cinta, Clases de Circuito, Elíptico'},

    { nombre: "bodypump" , descripcion: 'Sugerencias de clases: Bodypump / CXWORK / Pump FX / Powerlifting / Funcional / Crossfit'},

    { nombre: "boxeo" , descripcion: 'Sugerencias de clases: Aerobox / Aerocombat / Kickboxing / Boxeo / HIIT '},
    
    { nombre: "funcional" , descripcion: 'Sugerencias de clases: HIIT, Crossfit, Bootcamp, Circuito, Entrenamiento deportivo, TRX, Yoga funcional'},

    { nombre: "localizada" , descripcion: 'Sugerencias de clases: Pilates / Localizada / Local max / GAP'},

    { nombre: "yoga" , descripcion: 'Sugerencias de clases: Yoga / Tai-chi / Pilates / Yoga- Pilates fusión'},

    { nombre: "pilates" , descripcion: 'Sugerencias de clases: Pilates reformer/ Pilates mat / Pilates funcional / Yoga- Pilates fusión'},
  ]

  const estadoFisicoRespuestas = {
    bueno: "Seguí desafiando tus límites y descubrí hasta dónde podés llegar",

    regular: "Mantené la mirada en el horizonte y avanzá con determinación",

    malo: "Cada pequeño paso te acerca más a tu mejor versión.",
  }

  recomendacion += objetivosRespuestas[objetivos] + '<br>' + estadoFisicoRespuestas[estadoFisico];





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

  const rutinaBoxeo = new RutinaControlador('Nivel de dificultad : 3', 'bueno');

  const rutinaSpinning = new RutinaControlador('Nivel de dificultad : 6', 'regular');

  const rutinaFuncional = new RutinaControlador('Nivel de dificultad : 8', 'malo');



  rutinaBoxeo.agregarEjercicio('flexiones', 2, 10);
  rutinaBoxeo.agregarEjercicio('burpees', 10, 50);
  rutinaSpinning.agregarEjercicio('cardio', 23, 6);
  rutinaSpinning.agregarEjercicio('cardio', 23, 6);


  console.log(rutinaBoxeo);

  const rutinas = [rutinaBoxeo, rutinaSpinning, rutinaFuncional];
console.log(estadoFisico)

  const rutinaSeleccionada = rutinas.find(rutina => rutina.orientado == estadoFisico
  )

  let rutinasHTML = ''

  const renderizarEjercicios = (ejercicios) => {

    let resultHTML = ''

    ejercicios.forEach(ejercicio => {
      

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

  const renderizarGustos = (gustos) => {

    let resultHTML = ''

    gustos.forEach(gusto => {
     let res = gustosRespuestas.find(respuesta =>  respuesta.nombre === gusto)
 console.log(res)
      resultHTML += `

                <div class="recomendacion">

                    

                    <span><h2>Opciones de cardio:</h2>  ${res.descripcion}</span>

                    <hr>

                </div>

            `

    })

    return resultHTML

  }


  rutinasHTML = `

       <h2>${rutinaSeleccionada.nombre}</h2>


        <span>Estado actual: ${rutinaSeleccionada.orientado}</span>

        <div>

            ${renderizarEjercicios(rutinaSeleccionada.ejercicios)}

        <div>
        <div>

        ${renderizarGustos(gustos)}

    </div>
    `
    

  recomendacion += rutinasHTML




  if (isNaN(edad) || edad <= 0) {
    alert("Por favor, ingrese una edad válida.");
    return;
  }
  divRecomendacion.innerHTML = recomendacion;
  modalContainer.append(divRecomendacion);


modalContainer.classList.remove("ocultar");

}


function cerrarModal(){
  modalContainer.classList.add("ocultar");
}