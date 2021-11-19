const tarea = document.getElementById("Tarea");
const agregar = document.getElementById("agregar");
const list_pen = document.getElementById("pendientes");
const list_end = document.getElementById("end");

// var nuevaTarea = new Trabajo ('des' ,new Date(), false)
// list_pen.appendChild(getCard(nuevaTarea.detalle, true))

var tareas = []

agregar.onclick = () => {
  var valor = tarea.valude
  var nuevaT = new Trabajo (valor)
  saveTrabajo(nuevaT)

  //var valor = tarea.valude  
  list_pen.appendChild(getCard(nuevaT, true))
  addListeners()
  
}
function saveTrabajo(tareaN){
  tareas.push(tareaN)
}

//function getCard(valor, opcion){

//}

const addListeners = () => {

}

agregar.onclick = () => {
  var valor = tarea.value;
  list_pen.appendChild(getCard(valor, true));
};

function getCard(valor, opcion) {
  let card = document.createElement("div");
  let tareas = document.createElement("p");
  let agregar = document.createElement("button");
  let eliminar = document.createElement("button");

  tareas.innerHTML = valor.detalle
  agregar.innerHTML = "&#128077;&#127995;";
  tareas.classList = "tarea";
  eliminar.innerHTML = "&#128078;&#127995";

  card.classList = "card card-two card-black";
  tareas.classList = "tareas";
  agregar.classList = "agregar";
  eliminar.classList = "eliminar";

  card.appendChild(tareas);
  if (opcion) {
    card.appendChild(agregar);
    card.appendChild(eliminar);

    agregar.onclick = () => {
      list_end.appendChild(getCard(valor, false));
    };
  }

  return card;
}
