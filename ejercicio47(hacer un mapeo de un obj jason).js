function aficiones(arrObj){
    let mapeo = {};

   for (objeto of arrObj){
        for (aficion of objeto.aficiones){
            if (!mapeo[aficion]){
                mapeo[aficion] = 1;
            }else{
                mapeo[aficion]++;
            }
    }
   }
     return mapeo;   
  
}


const user = [
    {nombre:"Diego",aficiones:["infromatica","cine","videojuegos"]},
    {nombre:"deya",aficiones:["surf","deporte","videojuegos"]},
    {nombre:"Nacha",aficiones:["tv","cine","videojuegos"]},
    {nombre:"Jorge",aficiones:["tv","cine","surf"]},
    {nombre:"Maca",aficiones:["infromatica","surf","videojuegos"]},
    {nombre:"Paul",aficiones:["infromatica","deporte","tv"]},
    {nombre:"Simon",aficiones:["surf","cine","deporte"]},
]
console.log(aficiones(user));