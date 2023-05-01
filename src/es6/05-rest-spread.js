// arrays destrugturing

let fruits = ["apple", "banana"]
let [a,b] = fruits;
console.log(a,fruits[1])

//objet destructuring

let user = { name:"oscar",age: 32}
let { name , age } = user;
console.log(name , age)
console.log(name , user.age)//otra forma

// spread operator

let persona = {name:"oscar",age: 32};
let pais = "mx";

let data = {...persona , pais} //desestructuracion de objeto
console.log(data) // es decir convertir un objeto en un array

// parametro rest
//aplica cuando el objeto tiene muchos datos


function sum(num, ...value) {
    console.log(value);
    console.log(num+value[0]);
    return num+value[0];
}

sum(1,1,2,3)