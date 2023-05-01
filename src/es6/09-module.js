import hello from "./module.js";

hello();

//para que pueda ser ejecutado tiene que agregar en el Json anexar lines  "type": "module"
/**
 * ! importante
 * puedes evitar la configuración del JSON usando la extención .mjs, esta le indica a JavaScript que es un módulo
 * ejemplo 09-module.mjs es decir cambiar el js por mjs
 * 
 * exportdefault myFunction;
    export {myFunction};

    import myFunction from"./myFunction"
    import {myFunction} from"./myFunction"

Default se usa cuando solo devuelves un elemento y no quieres restringir el nombre.
Export const restringe el nombre y ademas te permite devolver multiples funciones o constantes

 
 * */ 

