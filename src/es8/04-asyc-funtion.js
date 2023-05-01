const fnAsync = () => {
    return new Promise ((resolve, reject) => {
        // if ternario se llama consultar mas
        (true)
        ? setTimeout (() => resolve('Asinc'),2000)
        : reject(new error('error'));
    })
}

const anotherFN = async () => {
    const something = await fnAsync()
    console.log(something)
    console.log("something")
    
}

console.log("before")
anotherFN()
console.log("after")

//quitando el async
const fnAsync1 = () => {
    return new Promise ((resolve, reject) => {
        // if ternario se llama consultar mas
        (true)
        ? setTimeout (() => resolve('Asinc'),2000)
        : reject(new error('error'));
    })
}

const anotherFN1 = () => {
    const something = fnAsync1()
    console.log(something)
    console.log("something")
    
}

console.log("before")
anotherFN1()
console.log("after")
