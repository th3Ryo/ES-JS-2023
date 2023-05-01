// se usa para cargar por partes

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./module-06-dynamic-import.js");
    console.log(module);
    module.hello();
})