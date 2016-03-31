console.log ("Inicio de programa");

var usuario = prompt("Ingrese un numero del 1 al 10:  ");
var numero = 7;
if (parseInt(usuario) === numero)
{
adivinoCorrectamente = true;
} 
else if ((parseInt(usuario) > numero))
{
alert("Te equivocaste amigo");
var nuevoIntento = prompt("Intenta de nuevo, ingresa otro numero de 1 a 10:  ");
if((parseInt(nuevoIntento) === numero))
{
adivinoCorrectamente = true;
}
else
{
adivinoCorrectamente = false;
}
}
else if ((parseInt(usuario) < numero))
{
alert("Felicidades...!!!");
var nuevoIntento = prompt("Ingresa otro numero: ");
if ((parseInt(nuevoIntento)=== numero))
{
adivinoCorrectamente = true;
}
else
{
adivinoCorrectamente = false;
}
}


if (adivinoCorrectamente)
{
document.write("<p> Adivinaste!!!!</p>");

}
else
{
document.write("<p>NO Adivinaste!!!!</p>");
}
console.log("Programa comnpleto");


/* var dado = Math.floor(Math.random()  *6)  + 1;
alert("Dado dice:"  + dado);*/
/*document.write("<h1> Hola Mundo JS </h1>");
alert("Gracias por  visitar");
/*console.log ("Fin de Programa");
console.log ("La longitud de la clave es:" + clave.length);*/

/*var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1> <p>Hay " segundosPorDia    +" en un dia</p>");*/

/*console.log ("Inicio de programa")
var peliculasVistas = prompt("Cuantas peliculas haz visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla =  parseInt (peliculasVistas) + parseInt (seriesVistas);
alert('Wow! Has visto ' + tiempoPantalla + " veces minimo la pantalla.");
console.log ("Programa completado")*/