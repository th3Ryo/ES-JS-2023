const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
//normamente
console.log(users?.gndx.country);
/* //mostraria age no existe
console.log(users?.gndx.age); */
//prueba con objeto que no existe por lo cual se agrega el signo de pregunta
// lo muestra como undefined

console.log(users?.bebeloper?.country);
// otra forma
console.log(users?.usuarioInventado?.country || 'No existe esa información en la base de datos')

