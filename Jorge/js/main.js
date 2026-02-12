'use strict'

const perfilUsuario = async () => {
    try {
        const url = 'https://randomuser.me/api/'
        const api = await fetch(url)
        const json = await api.json()


        // console.log(json)

        const data = json.results[0]

        console.log(`El nombre y apellidos son: ${data.name.title} ${data.name.first} ${data.name.last}`)
        console.log(`El correro electrónico: ${data.email}`)
        console.log(`Foto: ${data.picture.medium}`)
    } catch (error) {
        console.error('No se pudo acceder')
    }
}

perfilUsuario()