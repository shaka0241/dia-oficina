// Generador de Perfiles de Usuario - RandomUser API

// Función asincrónica para obtener un perfil aleatorio
const obtenerPerfilAleatorio = async () => {
    try {
        // Realizar petición a la API
        const respuesta = await fetch('https://randomuser.me/api/');
        
        // Validar que la respuesta sea exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }
        
        // Parsear la respuesta a JSON
        const datos = await respuesta.json();
        
        // Extraer la información del usuario
        const usuario = datos.results[0];
        
        // Extraer y concatenar nombre y apellido
        const nombre = `${usuario.name.first} ${usuario.name.last}`;
        
        // Extraer correo electrónico
        const correo = usuario.email;
        
        // Extraer URL de la imagen de perfil
        const imagenPerfil = usuario.picture.large;
        
        // Mostrar los datos en consola
        console.log('=== Perfil de Usuario Generado ===');
        console.log(`Nombre: ${nombre}`);
        console.log(`Correo: ${correo}`);
        console.log(`Imagen de perfil: ${imagenPerfil}`);
        console.log('====================================');
        
        // Retornar los datos para posible uso posterior
        return {
            nombre,
            correo,
            imagenPerfil
        };
        
    } catch (error) {
        // Manejo de errores
        console.error('Error al obtener el perfil:', error.message);
        return null;
    }
};

// Ejecutar la función al cargar el script
obtenerPerfilAleatorio();

// Opcional: Generar un nuevo perfil cada vez que se presiona una tecla
document.addEventListener('keypress', (evento) => {
    if (evento.key === ' ') { // Al presionar la barra espaciadora
        console.log('\n--- Generando nuevo perfil ---\n');
        obtenerPerfilAleatorio();
    }
});
