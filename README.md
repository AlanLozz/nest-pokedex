<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Iniciar el proyecto en modo desarrollo
1. Instalación del proyecto
```
$ npm install
```

2. Asegurate de tener nest cli instalado
```
npm i -g @nestjs/cli
```

3. Correr la BD con docker-compose
```
docker-compose up -d
```

4. Iniciar el proyecto en ambiente de desarrollo
```
npm run start:dev
```

5. Inicializar la seed para pruebas en la BD local
Para este paso tienes que ejecutar con formato GET el siguiente endpoint
```
http://localhost:5000/api/seed
```