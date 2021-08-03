# MusicApp


Prueba Técnica.
Con el objetivo de llevar a cabo una prueba referente a sus conocimientos en Angular, se plantea la
necesidad de una aplicación sencilla que posea como mínimo los siguientes componentes:
1. Página Principal
2. Home
3. Lista Álbumes
La página principal consistirá en una pantalla que pida el nombre del usuario que ingresó a la
aplicación, seguida de un botón de "Entrar".
Debe existir un segundo componente, Home, que no debe cargar inmediatamente junto al resto de la
aplicación, sino hasta que el usuario ingrese su nombre y presione el botón "Entrar" antes descrito.
Home debe mostrar el mensaje "Bienvenido, ", junto al nombre del usuario, seguido de un botón de "Mis
Canciones Favoritas".
Guarde el archivo .json anexado a este correo como data de prueba, e invóquelo cuando cliquee el
botón antes descrito.
Tras esta acción Home deberá mostrar:
1. Listado de artistas y total de álbumes del mismo.
2. Al seleccionar uno de los artistas, deberá mostrar el listado de álbumes de éste (Nombre y año). Esta
información debe mostrarse en otro componente.
3. Al seleccionar uno de los álbumes, deberán listarse sus canciones.
4. Finalmente, al seleccionar una canción, bajo el mensaje de Bienvenida al usuario, se deberá mostrar
el mensaje "Escuchando..." junto al nombre de la canción seleccionada.
Los datos no deben ser guardados en LocalStorage, SessionStorage o similares, haga uso únicamente de
las estrategias de Angular para compartir datos entre componentes. El diseño de las pantallas y la
estructura general del proyecto es libre, pero se valorará orden y seguimiento de estándares de
Angular/Typescript. Asimismo, el diseño elegido debe ser responsive (puede hacerse uso de bootstrap),
se tomará en cuenta la coherencia entre los diseños elegidos.
No existe límite de tiempo, realice la aplicación a su propio ritmo y reenvíela