function laMedia(array){
    let result = array.reduce((valorAcumulado,numeroActual)=>{
    return valorAcumulado + numeroActual;
    })
       let media = result / array.length;
       return media;
    }
    

console.log(laMedia([1,2,3,4,5,6,20,50]));