


const obtenerUsuarioAleatorio = async () => {
    
    const url = 'https://randomuser.me/api/';

    try {
  
        const respuesta = await fetch(url);
        
      
        if (!respuesta.ok) {
            throw new Error('No se pudo conectar con el servidor');
        }

        const datos = await respuesta.json();

       
        const usuario = datos.results[0];

        
        const nombreCompleto = `${usuario.name.first} ${usuario.name.last}`;
        const email = usuario.email;
        const imagenUrl = usuario.picture.large;

     
        console.log("========================================");
        console.log("   NUEVO PERFIL GENERADO CON ÉXITO");
        console.log("========================================");
        console.log(`👤 Nombre: ${nombreCompleto}`);
        console.log(`📧 Correo: ${email}`);
        console.log(`🖼️  Imagen: ${imagenUrl}`);
        console.log("========================================");

    } catch (error) {
        
        console.error("Ocurrió un error al obtener el perfil:", error.message);
    }
};


obtenerUsuarioAleatorio();