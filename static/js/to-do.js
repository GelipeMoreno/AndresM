const tarea = document.getElementById("Tarea");
const agregar = document.getElementById("agregar");
const list_pen = document.getElementById("pendientes");
const list_end = document.getElementById("end");

//var nuevaTarea = new Trabajo ('Hola mundo' ,new Date(), false)
//list_pen.appendChild(getCard(nuevaTarea.detalle, true))

var fechas = []

agregar.onclick = () => {
  var valor = tarea.valude
  var nuevaT = new Trabajo (valor)
  saveTrabajo(nuevaT)

  //var valor = tarea.valude  
  list_pen.appendChild(getCard(nuevaT, true))
  addListeners()
  
}
function saveTrabajo(tareaN){
  fechas.push(tareaN)
}

const addListeners = () => {

}
function getCard(valor, opcion) {
  let card = document.createElement("div");
  let tareas = document.createElement("p");
  let agregar = document.createElement("button");
  let eliminar = document.createElement("button");

  tareas.innerHTML = valor.detalle
  agregar.innerHTML = "&#128077;&#127995;";
  tareas.classList = "tarea";
  eliminar.innerHTML = "&#128078;&#127995";

  card.classList = "card card-two card-black card-white";
  tareas.classList = "tareas";
  agregar.classList = "agregar";
  eliminar.classList = "eliminar";

  card.appendChild(tareas);
  if (opcion) {
    card.appendChild(agregar);
    card.appendChild(eliminar);

    //agregar.onclick = () => {
    //  list_end.appendChild(getCard(valor, false));
    //}
  }

  return card;
}

const AddListeners = () => {

    
  list_pen.childNodes.forEach((card) => {
      if(card.childNodes.length == 3 && card.getAttribute('data') == "0"){
          card.childNodes.forEach((element) => {
              element.addEventListener('click', cardAction, false)
              card.setAttribute('data', "1") 
          })
      }
      card.addEventListener('click',(event)=>{
          
          if (event.target.childNodes.length >2){
            event.target.classList.toggle('card-white')
            event.target.classList.toggle('card-checked')
            console.log(event.target);
              
          //}else if(event.target.className == 'tarea'){
          //addRemoveClass(event.target.parentNode, 'card-white', 'card-checked')
          }
      })   
})
//
//  function addRemoveClass(element, propert1, propert2){
//      element.classList.toggle(propert1)
//      element.classList.toggle(propert2)
//  }
//  function cardAction(e){
//      var div = e.target.parentNode
//      var tempTarea = tareas[div.getAttribute('index')]
//      switch(e.target.className){
//          case "fin":
//              tempTarea.status = !tempTarea.status
//              tempTarea.final = new Date()
//              div.childNodes.forEach((element)=>{
//                  if(element.type == "submit")
//                      element.setAttribute('hidden','hidden')
//                  else if(element.tagName == 'P')
//                      element.innerHTML = tempTarea.detalle
//
//              })
//              list_fin.appendChild(div)
//              
//              //list_pen.removeChild(e.target.parentNode)
//              break;
//          case "eliminar":
//              list_pen.removeChild(div)
//              tareas.splice(div.getAttribute('index'), 1)
//              break;
//      }
//      saveLocal()
//
//      
//  }
//
//  // agregar.onclick= ()=>{
//  //     list_fin.appendChild(getCard(valor, false))
//  // }
//
}
