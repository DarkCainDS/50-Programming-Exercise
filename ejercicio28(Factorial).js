function factorial(number){
    let row = 1;
    for( z = 1; z <= number ; z++){
      row *= z;
    }
    return row;
}
console.log(factorial(3));