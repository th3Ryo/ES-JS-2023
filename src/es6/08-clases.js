/**  
 * ! //declarando
class USer {
 * ! //bloque
}
* ! //instancia
const newUser = new User () */

class User {
    greeting ()  {
        return "entro";
    };
};

const gndx = new User ();
console.log(gndx.greeting())

const bebeloper = new User ();
console.log(bebeloper.greeting())

class User1 {
    //constructor
    constructor () {
        console.log("Nuevo Usuario")
    }
    greeting ()  {
        return "entro";
    };
};

const david = new User1()

/**
 * ! this
 */

class User2 {
    constructor (name) {
        this.name = name ;
    }
    //metodos

    speak () {
        return "hola";
    }

    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new User2 ("Ana")
//     constante - metodo
console.log(ana.greeting())


//SETERS GETTERS

class User3 {
    constructor(name,age){

        this.name = name;
        this.age = age;
    }
    speak () {
        return "hola";
    }

    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get uAge() {
        return this.age
    }

    set uAge(n) {
        this.age = n;

    }

}

const class3 = new User3 ("FABIAN", 31);
// valor pro defecto establecido en la linea superior
console.log(class3.uAge);
// establecio un nuevo valor para este caso 20
console.log(class3.uAge = 20);

// ejemplo en comentarios 

class Player {
    constructor(nombre, colorSombrero){
        //atributos con su contexto
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;
    }
    //Metodos
    saludar(){
        return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
    }
}
//Creacion de jugadores (Objetos)

let player1 = new Player('Mario','Rojo');
let player2 = new Player('Luigi', 'Verde');

console.log(player1);//Player {nombre: 'Mario', colorSombrero: 'Rojo'}
console.log(player2);//Player {nombre: 'Luigi', colorSombrero: 'Verde'}

//Llamar metodos de los jugadores (Objetos)

console.log(player1.saludar()); // Hola soy Mario y mi sombrero es Rojo

//Los metodos Get y Set nos permiten tener acceso a leer o modificar el atributo de un objeto. Siendo Get, para mostrar el nombre del atributo y Set, para modificar ese atributo.En el ejemplo del juego:



/* class Player2 {
    constructor(nombre, colorSombrero){
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;
    }
    //Metodos
    saludar(){
        return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(name){
        this.nombre = name;
    }
}

let player3 = new Player2('Mario','Rojo');
//GET
console.log(player3.nombre); // Mario
//SET 
player3.nombre = 'Alberto';
console.log(player3.nombre);//Alberto */ 