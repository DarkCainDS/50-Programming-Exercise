function repeat(text,number){
    result = "";
    for(z=0; z < number; z++){
    result += text + " ";
    }
    return result;
}  
console.log(repeat("Diego Romero",4))