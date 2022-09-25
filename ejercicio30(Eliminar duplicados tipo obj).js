function duplicateDelete(element){
        element =element.filter(element => {
            return typeof element === "number";
        })
        let sin_duplicados = new Set(element);
         console.log(typeof sin_duplicados);
        return Array.from(sin_duplicados);
       
}
console.log(duplicateDelete(["uno","dos",1,2,3,2,3,3,1,4,4,5,"hola"]));