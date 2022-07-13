### Features

-   El siguiente proyecto propone una solución para el Valhalla Frontend Challenge de PENTA.
-   Al iniciar el proyecto se mostrarán el top de 250 películas según IMDB. Para la navegación se dispone de un paginador.
-   El proyecto hace uso de la API pública de IMDB.
-   El proyecto tiene una APIkey configurada la cual vence luego de ser usada 100 veces en el día; por lo cual, de suceder lo descrito, deberá obtener una nueva y reemplazarla en el archivo .src/constants/config.js --> VITE_API_KEY_IMBD. Clic aquí para obtener una nueva: [https://imdb-api.com/](https://imdb-api.com/).

## Scripts disponibles

En el directorio del proyecto, puede ejecutar:

### `yarn start`

Ejecuta la aplicación en el modo de desarrollo.
Abra [http://localhost:3000](http://localhost:3000) para ver el proyecto en su navegador.

### `yarn test`

Inicia las pruebas unitarias para componentes, helpers, hooks y pages.

### `yarn build`

Construye la aplicación para producción en la carpeta build.

Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para ser implementada!
