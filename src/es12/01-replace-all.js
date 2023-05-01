/* Aca el profe debia explicarnos sobre el metodo .replaceAll() y en su lugar no explico .replace() la diferencia entre ellos es que:

.replace(): solo hace el reemplazo en la primera coincidencia con el texto indicado.
.replaceAll(): como su nombre lo indica, hace el reemplazo a todos las coincidenas dentro del string.
Si quisieras reemplazar todo en un string
Dejo ejemplo: */

const string = "JavaScript es un maravilloso lenguaje de  programacion";

const replacedString = string.replace("JavaScript", "TypeScript");

console.log(replacedString);