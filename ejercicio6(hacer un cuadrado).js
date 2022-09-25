function topside(number){
 let top = "";
 for( let x = 0; x < number; x++){
     top += "*";
 }
 return top;
}

function square(number){
    //lado de arriba
    let draw = topside(number) + "\n";
    //filas
    for (let w=0; w < number-2; w++){
        content = "*";
        //relleno
        for( a=0;a < number-2;a++){
            content +=" "
        }
        content +="*";
        //en caso de pintar el cuadrado entero.
        /*for(a=0; a<number;a++){
            content+="*"
        }*/
        //añadir fila al dibujo
        draw += content + "\n"
    }
    //lado de abajo
    draw += topside(number);


    return draw;
}
console.log(square(10));