# Ultima Actividad Primer Corte: Pattern Memory 

El juego esta compuesto por cuatro partes: estilos, index, script y logica

#Estilos
En este archivo maneje css para darle estetica a cada uno de los elementos que componen el juego para darle un buen aspecto, de modo que cree un estilo especifco para el boton reiniciar, tambien estan los diseños de la matriz y los cuadros sobre los que se desarrolla el juego

#index
Basicamente es la pagina html mediante la cual se ejecutan los estilos y los escripts correspondientes al juego.

#Script y Logica
En estos archivos loq eu hice fue crear las correspondientes validaciones tanto para dibujar la matriz como para saber a que elemento o cuadro del juego se le esta haciendo click, en estos archivos se encuentran funciones como:
creacuadro
comprobar
puntuacion
 y la funcion basica para que cada vez que se oprima el boton se reinicie el juego a conformidad del usuario:

    $('#Boton').click(function () {
        location.reload();
    });

##Desarrollado con ES6 y Jquery
###William Fabian Ortiz Mahecha 461213125
