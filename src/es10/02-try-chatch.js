try {
    hello ();
} catch (error) {
    console.log(error);;
}
//directamente entrar a el error

try {
    onotherFn();
} catch {
    console.log("esto es un error")
}



/*

esplicacion 
try {
    // Manejar el código
  } catch (err) {
    // Se utiliza el parámetro `err`
  }
  
  try {
    // Manejar el código
  } catch {
    // Manejar el error sin el parámetro.
  } */