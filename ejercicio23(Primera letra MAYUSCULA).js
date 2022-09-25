function uppercase(text){
    let result = "";
    for (letter in text){
        console.log(text[letter])
        if(text[letter - 1] === " " || parseInt(letter) === 0){
            result += text[letter].toUpperCase();
        }else{
            result += text[letter];
        }
    }
    return result;
}
console.log(
    uppercase("Hola mi nombre es DarkCain, nice to meet you")
);