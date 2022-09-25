function divide(number, diviser){
    if(number % diviser === 0){
        return diviser;
    }
    return 0;
}
function showDivide(number){
    for( z =1; z <=number ; z++){
     let esDivisor = divide(number,z);
    if(esDivisor)console.log(esDivisor);
    }
 
}
showDivide(10)