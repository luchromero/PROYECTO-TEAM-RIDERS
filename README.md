# PROYECTO TEAM RIDERS

Este proyecto consiste en un sitio web dedicado a presentar el equipo de riders de la marca, incluyendo atletas de surf y skate. La estructura del sitio se compone de una pagina principal con una grilla de imagenes y un acordeon interactivo con la informacion resumida de cada atleta, ademas de paginas individuales para cada uno de ellos con detalles mas especificos, logros y galerias de fotos.

## Contenido del Proyecto

### Pagina Principal
- **index.html**: Archivo principal que contiene la estructura de la pagina de inicio, incluyendo el encabezado, la grilla de imagenes inicial y la seccion interactiva de los riders.

### Paginas de Riders
Archivos HTML individuales para cada miembro del equipo, que contienen su biografia, ficha tecnica, titulos obtenidos y una galeria de imagenes personal:
- **delfi-morosini.html**
- **ines-beisso.html**
- **lucas-raineri.html**
- **luisma-iturria.html**
- **meghan-mccubbin.html**
- **nicolas-laprida.html**
- **pedro-canal.html**
- **roberto-camblor.html**
- **santiago-medeiro.html**

### Estilos (CSS)
Carpeta `css/` que contiene las hojas de estilo:
- **team.css**: Estilos generales para la pagina principal, la grilla y el acordeon.
- **team-member.css**: Estilos especificos para las fichas individuales de cada rider, incluyendo layout, tipografia y galerias.

### Scripts (JS)
Carpeta `js/` con la logica del sitio:
- **riders-data.js**: Contiene un array de objetos con la informacion base de cada rider (nombre, foto de perfil, descripcion corta) utilizada para generar el acordeon dinamicamente.
- **team.js**: Script encargado de la generacion dinamica del HTML de los riders en la pagina principal y la funcionalidad del acordeon interactivo.

### Imagenes
Carpeta `images/` organizada en subdirectorios:
- **Grilla/**: Contiene las imagenes utilizadas en la cuadricula de la pagina de inicio.
- **Fotos riders/**: Directorio principal de imagenes de los atletas, que a su vez contiene:
  - **banners/**: Imagenes de portada para las fichas individuales.
  - Subcarpetas por rider (ej. `fotosDelfi`, `fotosLuisma`): Contienen las fotos especificas para las galerias de cada atleta.
