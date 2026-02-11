// Importar fetch desde node-fetch
import fetch from 'node-fetch';

// Función asíncrona usando Arrow Function
const generarPerfilUsuario = async () => {
    try {
        
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error("Error en la solicitud a la API");
        }

        const data = await response.json();

        const usuario = data.results[0];

        const nombreCompleto = `${usuario.name.first} ${usuario.name.last}`;
        const email = usuario.email;
        const imagenPerfil = usuario.picture.large;

        console.log("Nombre completo:", nombreCompleto);
        console.log("Correo electrónico:", email);
        console.log("Imagen de perfil:", imagenPerfil);

    } catch (error) {
        
        console.error("Ocurrió un error:", error.message);
    }
};


generarPerfilUsuario();

