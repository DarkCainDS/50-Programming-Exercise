function buzz(number){
    let multiplo = "";
    if( number % 3 === 0 && number % 5 ===0 ){
        multiplo = "BuzzLightyear";
    }else if(number % 3 === 0){
        multiplo = "Buzz";

    }else if (number % 5 === 0){
        multiplo ="Lightyear";
    }else{
        return number;
    }
    return multiplo;
}

function showNumber(number){
    for(z=1; z<number; z++){
        console.log(buzz(z));
    }
}
showNumber(100);