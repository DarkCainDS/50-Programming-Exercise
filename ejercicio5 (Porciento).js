function percentage(percent,number){
    let operacion = number* percent /100;
    let result = `El ${percent} % de ${number} es ${operacion}`;

    return result;
}


console.log(percentage(50,200000))