const boton = document.querySelector("input")
const contenedorLista = document.querySelector("#lista-mensajes")

var listaMensajes = []

function cargaLocalStorage() {
    listaMensajes = JSON.parse(localStorage.getItem("mensajes")) || []
    listaMensajes.forEach(mensaje => {
        const li = document.createElement("li")
        li.innerHTML = 
        `
            ${mensaje}
            <a href="#" class="borrarFila" id="${listaMensajes.indexOf(mensaje)}">X</a>
        `
        contenedorLista.appendChild(li)
    })
}

cargaLocalStorage()

boton.addEventListener("click", () => {
    añadirHTML()
})

function añadirHTML() {
    const mensaje = document.querySelector("#mensaje").value
    limpiarHTML()
    listaMensajes.push(mensaje)
    localStorage.setItem("mensajes", JSON.stringify(listaMensajes))

    listaMensajes.forEach(mensaje => {
        const li = document.createElement("li")
        li.innerHTML = 
        `
            ${mensaje}
            <a href="#" class="borrarFila" id="${listaMensajes.indexOf(mensaje)}">X</a>
        `
        contenedorLista.appendChild(li)
    })

}

function limpiarHTML() {
    while (contenedorLista.firstChild) {
        contenedorLista.firstChild.remove()
    }
}

function actualizarHTML() {
    limpiarHTML()
    
    listaMensajes = JSON.parse(localStorage.getItem("mensajes"))

    listaMensajes.forEach(mensaje => {
        const li = document.createElement("li")
        li.innerHTML = 
        `
            ${mensaje}
            <a href="#" class="borrarFila" id="${listaMensajes.indexOf(mensaje)}">X</a>
        `
        contenedorLista.appendChild(li)
    })
}


contenedorLista.addEventListener("click", (e) => {
    e.preventDefault()
    const id = e.target.getAttribute("id")
    listaMensajes.splice(id, 1)
    localStorage.setItem("mensajes", JSON.stringify(listaMensajes))
    actualizarHTML()
})
