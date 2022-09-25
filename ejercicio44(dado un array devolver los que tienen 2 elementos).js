function twoWords(elemento){
    let new_elements = [];
    for (words of elemento){

        if(words.split(" ").length >= 2){
            new_elements.push(words);
        }
    }
    return new_elements;
}
console.log(twoWords(["hola","Dark Cain","G T A", "iron man","victor robles","Diego"]));