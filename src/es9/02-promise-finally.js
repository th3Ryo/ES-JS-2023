const otrafuncion = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            resolve('entro la promesa')
        } else {
            reject('rechazo la promesa')
        }
    })
} 

otrafuncion ()
    .then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    })
    .finally (()=> console.log("finally"));