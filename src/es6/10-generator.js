//tiene un * despues de n de funtion
function* iterate(array){
    for (let value of array) {
        //yield detiene el valorde la funcion
        yield value;
    }
}

const it = iterate (["ana","luis","pedro","pablo"]);
console.log(it.next().value)//ana
console.log(it.next().value)// luis 
console.log(it.next().value)//pedro
console.log(it.next().value)//pablo 
console.log(it.next().value)//undefined
console.log(it.next().value)//undefined