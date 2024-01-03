console.log(beers)

/*1. Convierta la siguiente función con nombre en una función de flecha :*/

let imprimirMensaje = mensaje => console.log(mensaje)

// 2. Convierta la siguiente función con nombre en una función de flecha :

let crearmultiplicación = (número1, número2) => número1 * número2

/*3. Partiendo de una matriz: const array = [ 1,2,3,4,5,6,7,8,9 ], aplique un mapa a esa matriz y 
pase como argumento la función nombrada que se muestra en el ejercicio anterior. . Mostrar por 
consola el nuevo array obtenido. */

const array = [ 1,2,3,4,5,6,7,8,9 ]

const numerosMultiplicados = array.map(crearmultiplicación)
imprimirMensaje(numerosMultiplicados)

/*4. Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array 
con las 10 cervezas con mayor alcohol.*/

function mayoresCervezas(beers) {
    let beersOrdenados = beers.toSorted((cerveza1, cerveza2) =>  cerveza2.abv - cerveza1.abv)
    return beersOrdenados.slice(0, 10)
}

console.log(mayoresCervezas(beers))

/*5. Generar una función que reciba como parámetro un array de cervezas 
y devuelva un nuevo array con las 10 cervezas menos amargas. */

function menosAmargas(beers) {
    let beersOrdenados = beers.toSorted((cerveza1, cerveza2) =>  cerveza1.ibu - cerveza2.ibu)
    return beersOrdenados.slice(0, 10)
}

console.log(menosAmargas(beers))

/*6. Generar una función que reciba como parámetros un array de cervezas y un nombre
 de cerveza. La función debe devolver el objeto completo que coincida con el nombre 
 ingresado.*/

function buscarPorNombre(beers, beerName) {
    return(beers.find( cerveza => cerveza.name == beerName ))
}

console.log(buscarPorNombre(beers, "Misspent Youth"))

/* 7. Generar una función que reciba como parámetro un array de cervezas, 
un valor y que devuelva el primer objeto cuya propiedad ibu sea igual al valor ingresado,
 en caso de no haber cerveza con ese ibu que muestre un mensaje en la consola que dice 
 "No hay cerveza con un ibu de (valor ingresado)".*/

function buscarPorValorIbu(beers, valorIbu) {
    let existe = beers.find( cerveza => cerveza.ibu == valorIbu)
    if (existe) {
        return existe
    } else {
        return `No hay cerveza con un ibu de ${valorIbu}.`
    }
}

console.log(buscarPorValorIbu(beers, "48"))

/*8. Generar una función que reciba como parámetro el nombre de una cerveza y devuelva la
 posición en el array de esa cerveza. Si no se encuentra la cerveza, se debe imprimir un
  mensaje a través de la consola que diga “(Nombre de la cerveza ingresada) no existe”.*/

function buscarIndiceCerveza(beers, nombreCerveza) {
    let existe = beers.findIndex((cerveza) => cerveza.name == nombreCerveza)
    if(existe != -1) {
        return existe
    } else {
        return `${nombreCerveza} no existe.`
    }
}

console.log(buscarIndiceCerveza(beers, "Storm"))

/*9. Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol.
 La función debe devolver un nuevo array con las cervezas que no superan el nivel de alcohol.
  Cada elemento del nuevo array debe ser un objeto que tenga las propiedades nombre, alcohol 
  (abv) y "amargura" (ibu) */

function buscarPorValorDeAlcohol(beers, valorAlcohol) {
    let nuevoArray = []
    beers.forEach((cerveza) => {
        if (cerveza.abv <= valorAlcohol) {
            nuevoArray.push({nombre: cerveza.name, alcohol: cerveza.abv, amargura: cerveza.ibu})
        }
    })
    return nuevoArray
}

console.log(buscarPorValorDeAlcohol(beers, "15"))

/*10. Generar una función que reciba como parámetros un array de cervezas, un nombre de
 propiedad y un valor booleano. Debería devolver una nueva matriz con 10 cervezas ordenadas
  por la propiedad ingresada como segundo argumento, ascendente si el tercero es verdadero
   o descendente si es falso. */

function buscarConCondiciones(beers, propiedad, bandera) {
    let nuevaMatriz = beers.filter(cerveza => cerveza[propiedad]).toSorted( (cerveza1, cerveza2) => {
        if( cerveza1[propiedad] < cerveza2[propiedad] ){
            return - 1
        }else if( cerveza1[propiedad] > cerveza2[propiedad] ){
            return 1
        }
        return 0
    } )

    if (bandera) {
        return nuevaMatriz.slice(0, 10)
    } else {
        return nuevaMatriz.reverse().slice(0, 10)
    }
}

console.log(buscarConCondiciones(beers, "abv", true))

/*11. Generar una función que reciba como parámetro un array de cervezas y un id de un
 elemento HTML donde se imprimirá la tabla. La función debe renderizar (renderizar, 
    dibujar, pintar, rellenar, etc.) en un archivo html una tabla que contenga las columnas
     "Nombre", "ABV", "IBU" y una fila por cada elemento del array. Cada fila debe tener
      los datos solicitados para cada una de las cervezas. */

const $tabla = document.getElementById("tabla")

function armarFila(objeto) {
    const $tr = document.createElement("tr")
    $tr.innerHTML += `
                    <td>${objeto.name}</td>
                    <td>${objeto.abv}</td>
                    <td>${objeto.ibu}</td> `
    return $tr
}

function crearTabla(beers, idElemento) {
    const $thead = document.createElement("thead")
    $thead.innerHTML += `<tr>
                            <th>"Nombre"</th>
                            <th>"Abv"</th>
                            <th>"Ibu"</th>
                        </tr>`
    idElemento.appendChild($thead)

    const fragment = document.createDocumentFragment()
    beers.forEach(cerveza => {fragment.appendChild(armarFila(cerveza))})
    const $tbody = document.createElement("tbody")
    $tbody.appendChild(fragment)
    idElemento.appendChild($tbody)
}

crearTabla(beers, $tabla)

// fin
