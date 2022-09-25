function existepropiedad(objeto,propiedad){
    if (typeof objeto === "object" && 
    typeof propiedad === "string" &&
    objeto.hasOwnProperty(propiedad)
    ){
        return true;

    }
    return false;
}
let user = {
    nombre:"Diego",
    apellido:"Romero"
};
console.log(existepropiedad(user,"nombre"));