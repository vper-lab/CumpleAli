# Alicia · 38

Una web de cumpleaños de Victor para su hermana Alicia. Dos experiencias, páginas propias, nota personal, lienzo de práctica, pausa de respiración y celebración con confeti.

## Probar

Necesitas Node.js. No hay dependencias que instalar.

```sh
npm run dev
```

Abre http://localhost:4173. Para generar los archivos de publicación: `npm run build`.

## GitHub y Vercel

Sube el contenido de esta carpeta a tu repositorio. En Vercel importa el repositorio y selecciona **Other** como framework. El comando de construcción es `npm run build` y la carpeta de salida es `dist`; están definidos en `vercel.json`. No necesitas variables de entorno ni base de datos.

La navegación usa rutas con `#` para funcionar también en un alojamiento estático sin reglas de redirección. Las tipografías se cargan desde Google Fonts; si no hay conexión, se usan fuentes del sistema. El resto funciona sin servicios externos.

## Personalizar

- Dedicatoria, nombre y firma: `index.html`.
- Textos, experiencias y centros: `app.js`, especialmente `names` y `venues`.
- Colores y estilo: variables iniciales de `styles.css`.

La elección se guarda con la clave `alicia38-experiencia` en el navegador. No se envía a Victor, no se comparte entre dispositivos y no realiza reservas. Se puede cambiar volviendo a las experiencias y seleccionando otra. Si el almacenamiento está bloqueado, se mantiene durante la sesión y la web lo indica. El regalo mostrado es simbólico y no constituye un bono de los centros.

Incluye navegación por teclado, diálogo que se cierra con Escape, opción de movimiento reducido y controles de color accesibles. El lienzo se puede usar con ratón/dedo o mediante el botón de añadir color.

La etiqueta `noindex` pide a los buscadores que no la indexen; no convierte la web en privada.

## Fuentes consultadas · 9 de octubre de 2026

- Flotexperience: https://flotexperience.es/ — Campo de la Estrella, 7, **Las Tablas**, según su web oficial (no Montecarmelo). https://flotexperience.es/flotacion/ describe los flotarios abiertos y las opciones de ambiente; https://flotexperience.es/productos/flotacion/ indica 50 minutos de flotación y 75 minutos totales; https://flotexperience.es/preguntas-y-respuestas/ explica que el bañador no es necesario en la sala privada.
- City Yoga: https://www.city-yoga.com/tanque-de-flotacion-madrid.html — Artistas, 43, y detalles de la sesión.
- SOHO ART MADRID: https://www.sohoartmadrid.com/sipandpaint y https://www.sohoartmadrid.com/calendario/alyezcr4j6f5kp5-3flrn-ndyh6-4stp5-jtk99-g2d57-pfm9l-2r6fr-k6psm-e835f-t33y9-pawbl-cehkj-zhf4j-c7twh-b9fkt-wxp9e-9k4sg-w5mfa-bshgd — Don Pedro, 20.
- Tinto y Tinta: https://tintoytinta.es/ — local de Delicias en Tomás Borrás, 2.

Conviene confirmar condiciones, disponibilidad y duración al reservar. No se incluyen precios ni promesas médicas.
