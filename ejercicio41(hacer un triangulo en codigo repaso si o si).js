function triangulo(number){
    let mitad = Math.floor(number- 1);
    let result = "";
    for(let fila = 0; fila < number; fila++){

    let nivel = "";
    //bucle para pintar asteriscos y espacios
    for (columna =0; columna < 2 *  number - 1; columna++){
        
        if(mitad - fila <= columna && mitad + fila >= columna){
            nivel +="*";
        }else{
            nivel +=" ";
        }
        
    }
    result += nivel + "\n";
    }
    return result;
}
console.log(triangulo(5));