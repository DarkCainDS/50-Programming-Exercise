function capicua(number){
    let capicua = number;
    result = number.toString().split('').reverse().join('');
    result = parseInt(result);
    console.log(result);
    if(result === capicua){
        return true;
    }else{
        return false
    }
    return result;
}
console.log(capicua(2002));
console.log(capicua(2003));