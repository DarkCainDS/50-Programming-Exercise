function censored(text=false, search=false){
    let result= "";

    if(!text && !search){
        result = "No puedes leer el texto y la busqueda";
    }else if(!text && search){
        result = "No puedes leer el texo";
    }else if(text && !search){
        result = "No puedes hacer la busqueda";
    }else if(text && search){
        result = text.replace(new RegExp(search, 'gi'), "[-CENSORED-]");
    }

    return result;
}
console.log(censored("son of a bitch","bitch"))