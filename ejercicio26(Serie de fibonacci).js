function fibonacci(number){
    let result = "";
    let start = [0,1];
    for (z =2; z <= number; z++){
        start.push(start[z - 1] + start[ z - 2]);
        
    }
    return [start,start[number]];

}
console.log("fibonacci, serie completa",fibonacci(10)[0]);
console.log("resultado serie fibonacci",fibonacci(10)[1] )