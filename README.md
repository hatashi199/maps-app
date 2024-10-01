# MapsApp

## Dev

1. Clonar el proyecto.
2. Ejecutar `npm install`.
3. Levantar backend `npm run backend`.
4. Ejecutar la app `npm start` o `ng serve -o`

## Envs

1. Definir como variable de entorno en un fichero .env tu ApiKey de **MapTiler**
2. Generar la carpeta environments con la línea de comandos `ng g environments`, dentro del proyecto.
3. También se puede crear manualmente, pero los nombres de los ficheros deben ser `environment.development.ts` y `environment.ts`.
4. Si lo hace de forma manual debes actualizar el angular.json, colocando dentro de development lo siguiente (Siempre y cuando lances la app en modo desarrollo).

```json
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.development.ts"
                }
              ]
```
