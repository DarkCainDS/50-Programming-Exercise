function cualEsMayor(number1,number2){
    result = "";
    if(number1 > number2){
        result = `El numero MAYOR es:${number1}\n`;
        result += `El numero MENOR ES:${number2}`;
    }else if(number1 < number2){
        result = `El numero MAYOR es:${number2}\n`;
        result += `El numero MENOR ES:${number1}`;

    }else if(number1 === number2){
        result = "Los numeros son iguales";
    }else{
        result = "introduce numeros no texto";
    }
    return result;
}
console.log(
    cualEsMayor("hola",99)
);