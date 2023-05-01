function newUser (name,age, country) {
    var name =  name || "fabian"
    var age = age || 31
    var country = country || "colombia"
    console.log(name,age,country)
}

newUser()
newUser("jose", 30, "mx")

//ec06 sin hacer uso del or

function newAdmin (name="oscar",age = 32, country ="CL") {
    console.log(name,age,country);
}

newAdmin()
newAdmin("ana", 28, "peru")
