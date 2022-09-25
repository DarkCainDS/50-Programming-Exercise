function elQueMasAparece (datos){
    let mapeo = {} ,
        masFrecuente = "",
       mayorValor = 0;

    if( typeof datos === "string"){
        datos = datos.split(" ");
    }

    for (let elemento of datos){

        if(mapeo[elemento]){
            mapeo[elemento]++;
        }else{
            mapeo[elemento] = 1;
        }
        
       
    }
    for(let elemento in mapeo){
        if(mapeo[elemento] >mayorValor){
           mayorValor = mapeo[elemento];
            masFrecuente = elemento;
        }
    }
    return {
        "masFrecuente":masFrecuente,
        "mayorValor":mayorValor
    }
} 
console.log(elQueMasAparece("Hola mi mi nombre DarkCain mimi es DarkCain is DarkCain nice to meet you DarkCain "))
console.log(elQueMasAparece([1,2,3,4,5,6,7,4,2,6,5,2,2]))