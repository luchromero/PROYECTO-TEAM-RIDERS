# Team Riders - Página de Equipo

Página de Team / Riders inspirada en Rip Curl con acordeón interactivo.

## Estructura del Proyecto

```
PROYECTO TEAM RIDERS/
├── index.html         # Página principal
├── css/
│   └── team.css       # Estilos de la página
├── js/
│   ├── riders-data.js # Datos de los riders (array de objetos)
│   └── team.js        # Lógica del acordeón
└── images/            # Carpeta para las fotos de los riders
```

## Cómo usar

1. Abre `index.html` en tu navegador.

2. **Agregar fotos de los riders:**
   - Coloca las imágenes en la carpeta `images/`
   - Actualiza las rutas en `js/riders-data.js` con los nombres reales de las imágenes
   - Formato recomendado: JPG o PNG, proporción horizontal

3. **Editar información de los riders:**
   - Abre `js/riders-data.js`
   - Modifica los campos `shortDescription` y `longDescription` de cada rider
   - Los textos actuales son placeholders (lorem ipsum)

## Características

- ✅ Acordeón interactivo (solo un rider abierto a la vez)
- ✅ Diseño responsive (se adapta a móviles y tablets)
- ✅ Transiciones suaves
- ✅ Fondo negro para la sección expandida
- ✅ Foto a la izquierda, información a la derecha
- ✅ Botón "Ver más" en cada rider

## Riders incluidos

- Luisma Iturria
- Delfi Morosini
- Nicolás Laprida
- Roberto Camblor
- Meghan Mc Cubbin
- Inés Beisso
- Lucas Raineri
- Santiago Medeiro
- Pedro Cañal

## Personalización

### Abrir un rider por defecto

En `js/team.js`, descomenta las últimas líneas del archivo para que el primer rider esté abierto al cargar la página.

### Cambiar colores

Los colores principales están en `css/team.css`:
- Fondo del bloque de información: `#000` (negro)
- Color del texto: `#fff` (blanco)
- Color de los bordes: `#e0e0e0` (gris claro)

