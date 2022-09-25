function odd(number1,number2){

    let count = 0;

    while(number1 < number2){

        if(number1%2 !== 0) count++;

        number1++;


    }
    return count;
}
console.log("Numeros impares:",odd(1,1000));