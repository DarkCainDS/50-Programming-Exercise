function subString(word){

    let substring = [];

    for (palabra in word){

        let start = parseInt(palabra);

        for(z=0; z <= word.length -start ; z++){
            let final = parseInt(z) +parseInt(start);
            substring.push(word.substring(start,final))
        }

    }
    return substring.filter(elemento => elemento.length >= 1);
}
console.log(subString("DarkCain"));