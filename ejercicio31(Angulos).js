function angulos(number){
    let result = "";
    if( number === 180){
        result = `Con un angulo de ${number} seria un Angulo Llano`;
    }else if( number === 360){
        result = `Con un angulo de ${number} seria un Angulo Completo`;
    }else if(number === 90){
        result = `Con un angulo de ${number} seria un Angulo Recto`;
    }else if(number < 90){
        result = `Con un angulo de ${number} seria un Angulo Agudo`;
    }else if(number > 90 && number < 180){
        result = `Con un angulo de ${number} seria un Angulo Obtuso`;
    }else if(number > 180 && number < 360 ){
        result = `Con un angulo de ${number} seria un Angulo Concavo`;
    }else if(number < 180 && number > 90){
        result = `Con un angulo de ${number} seria un Angulo Convexo`;
    }
    return result;
}
console.log(angulos(361));