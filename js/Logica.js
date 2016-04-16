

function Creacuadro(Aux)
{

    let cuadro = "<table>";
    let id = 0;

    for (let i = 0; i < Aux ; i++)
    {
        cuadro += "<tr>";

        for (let j = 0; j < Aux ; j++) {
            cuadro += "<td id='"+id+"'>";
            cuadro += "</td>";
            id++;
        };
        cuadro += "</tr>";
    }

    cuadro += "</table>";

    $("#cuadro").html(cuadro);
    let Aux1 = 0;
    let Aux2 = 0;

    for (let i = 0; i < id; i++)
    {
        document.getElementById(i).addEventListener('click', event =>
        {
            Aux1 = Comprobar(i, Aux2);
            if (Aux1 == 1)
            {
                Aux2++;
            };

            if (Aux2 == Aux)
            {
                alert("Felicitaciones Ha ganado");
                location.reload();
            };

        });
    };

    puntuacion(Aux);
}

function Comprobar(id, Aux)
{
    let Contador = 0;
    if( $("#"+id).attr( "acerto" ) )
    {
        $("#"+id).addClass("Hace_click");
        Contador++;
    }else
    {
        $("#"+id).addClass("error");
        setTimeout(function()
        {
          $("#"+id).removeClass("error")
        }, 500);
    }
    return Contador;
}

function puntuacion(Aux)
{
    let valorMaximo = 20;
    let random = [];

    for (let i = 0; i < Aux; i++)
    {
        if (i == 0)
        {
            random[i] = Math.floor(Math.random() * valorMaximo);
        }
        else
        {
            let nuevorandom = Math.floor(Math.random() * valorMaximo);
            let tiempo = false;

            for (let j = 0; j < random.length; j++)
            {
                if (random[j] == nuevorandom)
                {
                    tiempo = true;
                }
            }

            if (tiempo)
            {
                i--;
            }else
            {
              random[i] = nuevorandom;
            }
        }
    }


    for (let j = 0; j < random.length; j++)
    {
        $("#"+random[j]).addClass("Hace_click");
        $("#"+random[j]).attr("acerto", true)
    }


    setTimeout(contar, (Aux*1000), random);
}

function contar(Puntos)
{
    for (let j = 0; j < Puntos.length; j++)
    {
        $("#"+Puntos[j]).removeClass("Hace_click");
    }
}

$( document ).ready(function() {

    Creacuadro(3);
});

$('#Boton').click(function()
{
    location.reload();
});
