//1. Capturar el H1, mediante un ID, en una variable llamada "titulo". 
const $titulo = document.getElementById("h1_datos")

// 2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del 
//título por el de esta variable.

const tituloPrincipal = "Frutas"

$titulo.innerHTML = tituloPrincipal
$titulo.className += "font-bold text-xl"

//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. 

const $header_Footer = document.getElementsByClassName("cabeza_pie")

console.log([$header_Footer])

$header_Footer[0].className += " bg-orange-500"
$header_Footer[1].className += " bg-orange-500"

//4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 

const $pDeFooter = document.querySelector("footer > p")

console.log($pDeFooter)

$pDeFooter.innerText += "Orlando Marcelo Conci FS053JAVA"

//5. Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 

document.querySelector("main").appendChild(document.createElement("div"))

document.querySelector("main > div").id = "contenedor"

const $div_main = document.getElementById("contenedor")

$div_main.className = "flex flex-wrap gap-5 justify-center place-content-around bg-slate-500 border rounded-2xl py-8 my-8"

console.log($div_main)

/*6. Crear una función que devuelva la estructura de una card. La función debe devolver un 
string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos:
     nombre, foto y descripción). */

function agregaContenido(objeto) {
    let card = `<img class="imagen_card w-72 h-52 object-contain" src="${objeto.foto}" alt= "Una imágen ilustrativa de un/a ${objeto.nombre}" >
    <h2 class=font-bold>${objeto.nombre}</h2>
    <p>${objeto.descripcion}</p>`
    return card
}

/*7. Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards
 con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse
     en otra función y recibir el array por parámetro).*/

function recorrerArray(array_frutas) {
    const fragment = document.createDocumentFragment()
    for (objeto of array_frutas) {
        let card = document.createElement("div")
        card.innerHTML = agregaContenido(objeto)
        card.className += "flex flex-col items-center bg-white gap-8 p-5 border rounded-2xl w-1/6 min-w-72 overflow-hidden;"
        fragment.appendChild(card)
    }
    return fragment
}

//8. Mostrar las cards con los datos pedidos en el div "#contenedor". 
$div_main.appendChild(recorrerArray(frutas))

/* 9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. 
Agregar al div el título "Frutas Dulces". */

const otroDiv = document.createElement("div")
document.querySelector("main").appendChild(otroDiv)
otroDiv.id = "lista"

const $listaDulces = document.getElementById("lista")
$listaDulces.innerHTML += "<h2 class='font-bold text-xl'>Frutas Dulces</h2>"
$listaDulces.className += "my-8"

/*10. Crear una función que reciba un array y devuelva una lista desordenada 
utilizando nodos (createElement). Cada elemento de la lista será el nombre
 de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea 
 true. */

function crearElementoLi(objeto) {
    const $li = document.createElement('li')
    $li.innerText = objeto.nombre
    //$li.classList.add("text-2xl", "text-red-600")
    return $li
}

function crearLista(array_frutas, etiqueta) {
    etiqueta.innerHTML = ""
    const fragment = document.createDocumentFragment()
    for (let fruta of array_frutas) {
        if (fruta.esDulce) {
            const listaHijo = crearElementoLi(fruta)
            fragment.appendChild(listaHijo)
        }
    }
    etiqueta.appendChild(fragment)
}

//11. Mostrar la lista de frutas dulces en el div "#lista". 
const $listaPadre = document.createElement("ul")
$listaPadre.className += "list-disc list-inside mt-6"
$listaDulces.appendChild($listaPadre)
crearLista(frutas, $listaPadre)

// Fin
