function coincidencias(phrase, search){
    let text_clean = phrase.toLowerCase().replace(/["!¡,.-_"]/g,' ');
    let result = 0;

    if(text_clean.includes(search)){
        let words = text_clean.split(" ");
        let map= {};
        for(let word of words){

            if(map[word]){
                map[word]++;
            }else{
                map[word]= 1
            }

        }
        result=map[search];
        console.log(words)
        console.log(map)
        
    }else{
        result= 0;
    }
    return result;
}


console.log("Numero de coincidencias en la frase", coincidencias("hola , que tal, soy Diego Romero. diego.diego",""));