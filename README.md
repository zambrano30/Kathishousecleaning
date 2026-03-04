# Kathy's House Cleaning

Sitio web profesional para servicios de limpieza residencial y comercial.

## Tecnologías

- **Tailwind CSS 3.x** - Framework CSS utility-first
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografías Playfair Display y DM Sans

## Configuración y Desarrollo

### Instalación

```bash
npm install
```

### Compilar CSS

Para compilar el CSS una sola vez:

```bash
npm run build:css
```

### Modo Watch

Para compilar automáticamente mientras desarrollas:

```bash
npm run watch:css
```

Esto observará los cambios en `src/input.css` y en el HTML, recompilando automáticamente el CSS en `src/output.css`.

## Estructura del Proyecto

```
kathys-cleaning/
├── index.html              # Página principal
├── src/
│   ├── input.css          # Estilos fuente con directivas Tailwind
│   └── output.css         # CSS compilado (no editar manualmente)
├── images/                # Imágenes del sitio
├── tailwind.config.js     # Configuración de Tailwind
├── package.json           # Dependencias y scripts
└── README.md             # Este archivo
```

## Personalización

Los estilos personalizados se encuentran en `src/input.css` organizados en capas de Tailwind:

- `@layer base` - Estilos base globales
- `@layer components` - Componentes reutilizables
- `@layer utilities` - Utilidades y animaciones personalizadas

## Deploy

Para producción, asegúrate de:

1. Ejecutar `npm run build:css` para generar la última versión del CSS
2. Subir todos los archivos excepto `node_modules/`
3. El archivo `src/output.css` debe estar incluido

## Contacto

- **Email:** cathymybusiness01@gmail.com
- **Teléfono:** (206) 852-5970
- **WhatsApp:** (206) 852-5970
- **Dirección:** 18534 139th Pl Renton WA 98058, Seattle, WA
