const objeto = {
    nombre: "Andres",
    age: 23,
  }

  
  
  const usuario = {
      ...objeto,
      plataforma: "Platzi"
  }

  //profesor

  const user = { username: "gndx", age: 34, coutry: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);