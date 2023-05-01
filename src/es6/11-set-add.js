const list = new Set ();

list.add("item1")
list.add("item2")
list.add("item3").add("item3")


/**
 * 
 * ! como quitar repetidos con set

Cómo quitar los elementos repetidos en una sola línea
👨‍💻 Para crear un array sin elementos repetidos, podemos utilizar Set y el operador de propagación de la siguiente manera:

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]
 * 
 * 
 *  
 */
console.log(list)