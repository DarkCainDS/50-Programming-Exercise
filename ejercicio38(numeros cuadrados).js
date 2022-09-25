function square ( number){
    return number*number;
}
function show(number){
    for (z =1 ; z <= number; z++){
        console.log(square(z));
    }
}
show(5);