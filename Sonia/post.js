"use strict"

// EJERCICIO PARTE 2
// Generador de Perfiles de Usuario

const generadorUsuarios = async () =>{
    const url = await fetch(`https://randomuser.me/api/`)
    const data = await url.json()
    const usuario = data.results[0]

    try {
        console.log(`Nombre: ${usuario.name.title}`)
        console.log(`Correo: ${usuario.email}`)
        console.log
        (`URL imagen perfil: ${usuario.picture}`)
    } catch (error) {
        console.log(error)
    }
}

generadorUsuarios()