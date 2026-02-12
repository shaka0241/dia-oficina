# Parte Uno

El objetivo de esta actividad es construir tu primera página web personal utilizando HTML5 (para la estructura) y CSS3 (para el diseño). Esta página funcionará como tu "tarjeta de presentación digital", donde mostrarás quién eres, tus intereses y tus habilidades técnicas.

## 1. Requisitos de Contenido (HTML)

Tu archivo `index.html` debe estar organizado de forma semántica y contener las siguientes secciones:

- **Header (Encabezado)**: Tu nombre como título principal (`<h1>`).

- **Sección "Sobre mí"**: Una breve biografía. ¿Quién eres? ¿Qué te motiva?

- **Sección "Mis Pasiones"**: Una lista (ordenada o desordenada) de al menos 3 hobbies o intereses.

- **Sección de Habilidades**: Una tabla o lista que muestre lo que estás aprendiendo (ej. git, Lógica de programación).

- **Multimedia**: Debes incluir al menos una imagen (una foto tuya o algo que te represente) con su respectivo texto alternativo (`alt`).

- **Footer (Pie de página)**: Información de contacto y enlaces a redes sociales.

## 2. Requisitos de Diseño (CSS)

Crea un archivo llamado `style.css` y conéctalo a tu HTML. Debes aplicar los siguientes estilos:

- **Personalización de fuentes**: Cambia la tipografía por defecto (puedes usar `@import` de Google Fonts).

- **Paleta de colores**: Define colores específicos para el fondo, los títulos y el cuerpo del texto.

- **Caja de contenido (Box Model)**: Aplica `margin`, `padding` y `border` a las secciones para que el contenido no esté pegado a los bordes.

- **Efectos visuales**: Añade un efecto `:hover` a los enlaces o botones para que cambien de color al pasar el ratón.

- **Alineación**: Centra el contenido principal del sitio para una mejor lectura.


---

# Parte Dos

## El Reto: "Generador de Perfiles de Usuario"

Debes crear un script que consulte la API de RandomUser para generar un perfil de usuario aleatorio. El objetivo es obtener los datos, filtrarlos y mostrarlos de forma limpia.

## Requisitos Técnicos

- **Sintaxis Moderna**: Utiliza Arrow Functions para definir tu lógica.

- **Asincronismo**: Implementa el consumo de la API utilizando la palabra clave `await` dentro de una función `async`.

- **Manejo de Errores**: Envuelve la petición en un bloque `try...catch` para gestionar errores.

- **Extracción de Datos**: De la respuesta recibida, debes extraer y mostrar (vía `console.log`):
  - Nombre y Apellido (concatenados).
  - Correo electrónico.
  - La URL de la imagen de perfil (cualquiera).

**API Endpoint**: 

- https://randomuser.me/api/

- https://randomuser.me/documentation

---

# Ambas actividades deben cumplir con:

## Git & Colaboración

- Clonar el repositorio del docente para realizar ambas actividades.
- Crear una rama local con el formato: `feat/nombre-apellido`.
- Subir los cambios únicamente a esa rama.