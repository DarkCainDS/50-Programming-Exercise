function soloUnaVez(text){
    //definir variables
    let contadores = {}, 
    resultado = []
    letras = text.split('').filter(letra => letra.trim().length >= 1)
    ;

    //Generar contadores
    for(letra of letras){
        if(!contadores[letra]){
            contadores[letra] = 1;
        }else{
            contadores[letra]++;
        }
    }
    //Eliminar las letras que se repitan
    for (letra in contadores){
        if(contadores[letra] >= 2){
            delete contadores[letra];
        }else{
            resultado.push(letra);
        }
    }


    return [resultado,resultado[0]];
}

console.log(soloUnaVez("Hola mi nombre es DarkCain"));