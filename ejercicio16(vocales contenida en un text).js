function vocals(text){
    let coincidence = text.match(/[a,e,i,o,u]/gi);
    return  coincidence ? coincidence.length : 0;
}
console.log("Numero de vocales",vocals("Hl m nmbr s dg rmr"));