function lessNumber(number){
    let result =  "---Del" + number + "al 0---\n" ;
    for(z = number; z > 0 ; z--){
    result += "- n°" + z  +  "\n";
    z-= 7;
        }   
    return result;
    }
    
console.log(lessNumber(300),"---THE END---" );