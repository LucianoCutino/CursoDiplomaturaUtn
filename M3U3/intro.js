// var nombre="carlos;"
// nombre = prompt("ingresa tu nombre");
// console.log(nombre);
// document.write(nombre);
// alert(nombre);
// esto nos manda una alerta en pantalla



var distancia = prompt(
    "ingrese una distancia"
)

if(distancia >=0 && distancia <=1000){
    document.write ("debes ir a pie");
}
else if(distancia >=1000 && distancia <=10000){
    document.write ("debes ir en bicicleta");
    
}
else if(distancia >=10000 && distancia <=30000){
    document.write ("debes ir en colectivo");
    
}
else if(distancia >=30000 && distancia <=100000){
    document.write ("debes ir en auto");
    
}
else if(distancia >=100000 ){
    document.write ("debes ir avión");
    
}
