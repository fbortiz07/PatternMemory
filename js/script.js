(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";


function Creacuadro(Aux) {

    var cuadro = "<table>";
    var id = 0;

    for (var i = 0; i < Aux; i++) {
        cuadro += "<tr>";

        for (var j = 0; j < Aux; j++) {
            cuadro += "<td id='" + id + "'>";
            cuadro += "</td>";
            id++;
        };
        cuadro += "</tr>";
    }

    cuadro += "</table>";

    $("#cuadro").html(cuadro);

    var Aux1 = 0;
    var Aux2 = 0;
    //añadir evento clic al cuadro

    var _loop = function _loop(i) {
        document.getElementById(i).addEventListener('click', function (event) {
            Aux1 = Comprobar(i, Aux2);
            if (Aux1 == 1) {
                Aux2++;
            };

            if (Aux2 == Aux) {
                alert("Felicitaciones ha ganado");
                location.reload();
            };
        });
    };

    for (var i = 0; i < id; i++) {
        _loop(i);
    };

    puntuacion(Aux);
}

function Comprobar(id, Aux) {
    var Contador = 0;
    if ($("#" + id).attr("acerto")) {
        $("#" + id).addClass("Hace_click");
        Contador++;
    } else {
        $("#" + id).addClass("error");
        setTimeout(function () {
            $("#" + id).removeClass("error");
        }, 500);
    }
    return Contador;
}

function puntuacion(Aux) {
    var valorMaximo = 15;
    var random = [];

    for (var i = 0; i < Aux; i++) {
        //obtener random de 0 a  15  sin repetir
        if (i == 0) {
            random[i] = Math.floor(Math.random() * valorMaximo);
        } else {
            var nuevorandom = Math.floor(Math.random() * valorMaximo);
            var tiempo = false;

            for (var j = 0; j < random.length; j++) {
                if (random[j] == nuevorandom) {
                    tiempo = true;
                }
            }

            if (tiempo) {
                i--;
            } else {
                random[i] = nuevorandom;
            }
        }
    }

    for (var _j = 0; _j < random.length; _j++) {
        $("#" + random[_j]).addClass("Hace_click");
        $("#" + random[_j]).attr("acerto", true);
    }

    setTimeout(OcultarPuntos, Aux * 1000, random);
}

function OcultarPuntos(Puntos) {
    for (var j = 0; j < Puntos.length; j++) {
        $("#" + Puntos[j]).removeClass("Hace_click");
    }
}

$(document).ready(function () {

    Creacuadro(3);
});

$('#Boton').click(function () {
    location.reload();
});

},{}]},{},[1]);
