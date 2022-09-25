function pares(numero){
    return {
        pares:numero.filter(num => num % 2 === 0),
        impares:numero.filter(num => num % 2 !== 0)
    }
}
console.log(pares([1,2,5,7,8,9,12,30,15,60,63,66]));