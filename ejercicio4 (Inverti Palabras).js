function invertir(text){
    let reverse = "";
    for( let letter of text){
        reverse= letter + reverse;
    }
    return reverse;
}
console.log("La palabra invertida es",invertir("sevilla"))

function reverse(text){
    return text.split("").reverse().join("");
}
console.log("la palabra invertida es",reverse("mandrilo"))