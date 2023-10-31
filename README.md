# Taller 8 AREP - Daniel Sebastian Ochoa Urrego - Wilmer Arley Rodriguez Ropero

En este taller implementaremos una arquitectura enfocada en microservicios que simulara una version escalada de Twitter que nos permitira postear tweets, ver el historial de estos y hacer un login seguro con JWT usando AWS Cognito.

## Iniciando

Estas instrucciones te ayudarán a tener una copia de este proyecto corriendo en tu máquina local, en donde podras hacer pruebas o desarrollar sobre él

### Prerrequisitos

* Git
* Java
* Maven

Si aún no tienes instaladas estas tecnologias, los siguientes tutoriales te pueden ayudar

* Git: https://www.youtube.com/watch?v=4xqVv2lTo40
* Java: https://www.youtube.com/watch?v=BG2OSaxWX4E
* Maven: https://www.youtube.com/watch?v=1QfiyR_PWxU

### Instalando el proyecto

Para hacer una copia local del proyecto, debes abrir tu terminal, dirigirte al directorio donde quieras que este el proyecto y usar el siguiente comando

```
git clone https://github.com/DanielOchoa1214/Lab8-AREP.git
```

Luego muevete al directorio creado y desde ahi ejecuta los siguientes comandos

```
mvn package
mvn quarkus:dev
```

Si todo salio bien, deberias ver en consola lo siguiente

<img width="1540" alt="Screenshot 2023-10-31 at 1 44 47 PM" src="https://github.com/DanielOchoa1214/Lab8-AREP/assets/77862016/3342e761-d824-4d2a-9aae-df1a2c27007a">

Luego abre el archivo login.html con tu navegador y deberias ver lo siguiente

<img width="462" alt="Screenshot 2023-10-31 at 1 45 07 PM" src="https://github.com/DanielOchoa1214/Lab8-AREP/assets/77862016/8b6473b5-37f4-4300-967f-3c9be1db4a4f">

## Corriendo los tests

### Test de integración

Para probar que el desarrollo de la aplicación fuera correcto sé probo cada funcionalidad en ella corriendo, para ello revisamos cada funcionalidad con la aplicacion desplegada en la nube de AWS, primero revisamos que los archivos fueran correctamente enviados con S3

<img width="1677" alt="Screenshot 2023-10-31 at 1 28 02 PM" src="https://github.com/DanielOchoa1214/Lab8-AREP/assets/77862016/b462f10d-ea7e-4d2f-a095-65c57d01a69a">

Luego probamos que el login funcionara correctamente con Cognito

<img width="1373" alt="Screenshot 2023-10-31 at 1 32 15 PM" src="https://github.com/DanielOchoa1214/Lab8-AREP/assets/77862016/68d4b5a7-d9b1-4844-93a3-1993754e003a">

Y por ultimo probamos que los Tweets se postearan correctamente

<img width="1461" alt="Screenshot 2023-10-31 at 1 33 04 PM" src="https://github.com/DanielOchoa1214/Lab8-AREP/assets/77862016/1b1b957b-0d0c-42da-bfa0-566965351e33">

## Documentacion

Para visualizar la documentación del proyecto solo debes correr el siguiente comando desde el directorio raiz del proyecto

```
mvn javadoc:javadoc
```

Y en la siguiente ruta encontrarás el archivo index.html en donde si lo abres desde el navegador podras ver toda la documentación

```
./target/site/apidocs
```

## Construido con

* Amor
* [Maven](https://maven.apache.org/) - Administrador de dependencias
* [IntelliJ IDEA](https://www.jetbrains.com/es-es/idea/) - IDE de desarrollo

## Version

1.0-SNAPSHOT

## Autores

Daniel Sebastián Ochoa Urrego - [DanielOchoa1214](https://github.com/DanielOchoa1214)

## Licencia

GNU General Public License family

## Diseño

Para simular desde un mismo proyecto la arquitectura propuesta se separaron por paquetes los componentes, un componente aparte, que representa todo el front de la aplicacion, y dentro del back se separaron las 3 entidades del taller en 4 componentes, "Controller" que son las clases de las 3 entidades encargadas de escuchar los endpoints, "Service" que es donde esta toda la logica de negocio, "Persistence" que es donde estan las clases encargadas de hacer la conexion con la base de datos, y "Model" que es donde estan las clases encargadas de representar los datros de la BD en objetos java faciles de manejar.

## Arquitectura

La arquitectura de este taller es presentada con el siguiente diagrama

![photo1698684098](https://github.com/DanielOchoa1214/Lab8-AREP/assets/77862016/4255246e-8e8d-4eb7-95cd-71745b3ad459)

En donde se tienen los siguientes componentes:

Client: Representa al cliente
S3: Representa el servicio S3 de AWS, con el que dejaremos alojados todos los archivos relacionados con el FrontEnd de nuestra aplicacion
AWS Cognito: Es el servicio de AWS con el que autenticaremos a nuestros usuarios
EC2: Se tienen 3 instancias EC2 las cuales seran encargadas de procesar peticiones de los 3 microservicios presentados requeridos User, Tweet y Stream
Mongo DB: La base de daatos montada en la nube de Mongo

### Despliegue

Y hay un videito para que me creas que lo desplegue en AWS, esta en el root del proyecto ;) (Era muy pesado para poner en el readme 😣)

Por cuestiones de que AWS requiere certificados autorizados para usar cognito, se desplego localmente el redireccionamiento de cognito, es decir, la pagina de tweets. Esto se realizo de esta manera porque se necesita pedir a AWS certificados y estos se demoran en ser entregados, por esta misma cuestión decidimos hacer esa parte localmente y mostrar el funcionamiento de la aplicación total.

## Agradecimientos

* A nuestro querido profesor de Arquitecturas empresariales Daniel Benavides
* Jorge, el mejor monitor
* Figo, mi hermoso perrito

