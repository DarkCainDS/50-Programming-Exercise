function vocalesYConsonantes (text){
    let vocales = 0;
    let consonantes = 0;
    text_clean = "";
    text_clean = text.split("").filter(letter => /[áéíóú\w]/gi.test(letter) && isNaN(letter)).join("");
     for (letra of text_clean){
         if(/[áéíóúaeiou]/gi.test(letra)){
             vocales++
         }else{
             consonantes++
         }
     }           
     return [vocales,consonantes];
}
console.log(vocalesYConsonantes("victorroblesweb.es"));