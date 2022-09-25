function alCuadrado(numeros){
    let numeros_cuadrados= numeros
    .filter(numero => typeof numero === "number")
    .map(numero => Math.pow(numero,2))
    ;
    return numeros_cuadrados;
}
console.log(alCuadrado([7,8,9,"hola",false,[6,5]]));