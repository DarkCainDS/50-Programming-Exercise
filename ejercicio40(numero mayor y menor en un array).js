function lowHigh(array){
    array_ordenado = array.sort();
    let number = [];
    number.push(array [0], array[array.length -1]);
    return {
        "Menor":number[0],
        "Mayor":number[1]
    };
}
console.log(lowHigh([4,6,3,5,8,9,7,2]));

//solucion victor robles

function altoBajo(numeros){
    let ordenados = numeros.sort((a,b) => a-b);
    return {
        bajo:ordenados[0],
        alto:ordenados[ordenados.length -1]
    }
}
console.log(altoBajo([88,100,200,150,600,12,20,900]))