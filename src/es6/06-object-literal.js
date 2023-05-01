//mejora de objetos litera

//pasado

function newUser1 (name,age, country) {
    return {

         name:  name,
         age: age ,
         country: country ,
    }
}

function newUser (name,age, country, uID) {
    return {

         name,
         age,
         country,
         id: uID
    }
}

console.log(newUser("Ry0", 30, "CO,",1))