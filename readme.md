# Ultima Actividad Primer Corte Pattern Memory William Fabian Ortiz Mahecha 



# Estilos
El primer paso para el desarrollo del juego fue crear los distintos estilos y el archivo index.html para darle estetica a cada uno de los componentes del juego. Como por ejemplo, la matriz tiene un estilo especifico tal como lo tiene el boton de reiniciar.

# Logica
Basicamente dentro del archivo Logica.js lo que se hizo fue desarrollar unas funciones tales como la que le aplica la accion al hacer click a cada uno de los cuadros, tambien estan las funciones que pintan la matriz o cuadro (creacuadro), la funcion que comprueba si se hace click sobre el cuadro corrrecto (comprobar) y la funcion mediante la cual se generan los colores de forma aleatoria en este caso llamada Puntuacion. 

#Boton
Tambien se puede observar un boton mediante el cual se reinicia el juego, esto si el jugador lo desea, de modo que se llama una funcion muy simple al hacer click como la siguiente:

    $('#Boton').click(function () {
        location.reload();
    });

##Desarrollado con ES6 y Jquery

###William Fabian Ortiz Mahecha 461213125


