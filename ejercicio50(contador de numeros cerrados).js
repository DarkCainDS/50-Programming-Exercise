function bucles(numero){
    let arrayNumeros = numero.toString().split('');
    let bucle = 0;
    for(numero of arrayNumeros){

        numero = parseInt(numero);

        if(numero === 0 || numero === 6 || numero === 9){
            bucle++;
        }else if(numero === 8){
            bucle += 2;
        }
    }
    return bucle;
}
console.log(bucles(288));