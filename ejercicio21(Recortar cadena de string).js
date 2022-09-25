function cut(text,end){
    let result = "";
    if(typeof text === 'string' && typeof end === "number"){
        result = text.substring(0,end);
    }else{
        result = "Introduce correctamente los datos";
    }
    return result;
}
console.log(
    cut("Hola mi nombre es DarkCain, is nice to meet you",100)
);