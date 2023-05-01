var segundoNombre = "fabian";
segundoNombre = "fabiou";
console.log(segundoNombre)

let Apellido = "bonilla";
Apellido = "guzman";
console.log(Apellido)

const animal = "perro"
animal = "gato";
console.log(animal)

const fruits = () => {
    if (true) {    
        var fruit1 = "manzana"; //  funtion scope
        let fruit2 = "pera"; // muestra error block scope
        const fruit3 = "banano"; // muestra error block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();