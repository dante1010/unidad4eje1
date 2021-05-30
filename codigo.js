var metros;
metros=prompt ( " Ingrese los metros", "")
if(metros <0){
    document.write (" el valor ingresado tiene que ser igual o mayor a 0")
}
else if( metros <=1000){
    document.write(" Ir a pie ")
}
else if ( metros <=10000){
document.write(" Ir en bicicleta")
}
else if (metros <=30000){
    document.write( " Ir en colectivo")
}
else if (metros <=100000){
    document.write (" Ir en auto ")
}
else if ( metros >100000){
    document.write ( " Ir en avion" )
}