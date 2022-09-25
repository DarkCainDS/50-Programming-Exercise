function permutacion(secuencia,numero){

    for(z=0; z < numero;z++){
       if(secuencia.indexOf( z + 1 ) < 0){
        return false;
       }
    }
    return true;
}
console.log(permutacion([1,2,3,4,5],5));
console.log(permutacion([1,2,3,5],5));