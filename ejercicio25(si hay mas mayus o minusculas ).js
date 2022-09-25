function mayusMinus(text){
    let result = "";
    let mayus = 0;
    let minus = 0;
    for (letter of text){
        if(/[A-Z]/.test(letter)){
            mayus++;
        }else{
            minus++;
        }
    }
    if(mayus > minus){
        result =text.toUpperCase();
    }else if (minus > mayus){
        result = text.toLowerCase();
    }
    return result;
}
console.log(mayusMinus("Hola mi nombre es DarkCain,nice TO meet you"));