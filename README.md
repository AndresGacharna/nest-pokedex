<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Made by Andrés Gacharna | Nest: Desarrollo backend escalable con Node

# Ejecutar en desarrollo

1. Clonar repositorio
2. Ejecutar

```
yarn install
```
3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```
4. levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombrar la copia como ```.env```
6. llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en dev:
```
yarn start:dev
```
8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest