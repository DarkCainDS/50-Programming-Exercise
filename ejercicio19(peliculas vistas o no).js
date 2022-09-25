
function misMovies(peliculas){
    for (p of peliculas){
        console.log(p);
        let show = `${peliculas.title} de ${peliculas.directed}`;
        if(p.see){
            console.log("ya has visto:",show);
        }else{
            console.log("Te falta por ver",show);
        }
    }
    return peliculas;

}

const coleccion_peliculas =[
        {
            title:"The Lord of the Ring",
            directed: "Peter Jackson",
            see: true
        },
        {
            title:"Avenger Endgame",
            directed: "joe Russo",
            see: true
        },
        {
            title:"Justice League",
            directed: "Zack Snyder",
            see: false
        }
    ];

    misMovies(coleccion_peliculas);