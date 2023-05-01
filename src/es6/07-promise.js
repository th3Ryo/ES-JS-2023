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
    });

//si fuera false

const otrafuncion1 = () => {
    return new Promise((resolve,reject) => {
        if (false) { //aka esta el false
            resolve('entro la promesa')
        } else {
            reject('rechazo la promesa')
        }
    })
} 

otrafuncion1 ()
    .then(response => {
        console.log(response)
    }).catch(err => {
        console.log(err)
    });