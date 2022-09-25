function divideArray(arrangement,number_element){
    let arrangement1 = [];

    for(let element of arrangement){
        let lastArray = arrangement1[arrangement1.length -1];
        if(!lastArray || lastArray.length === number_element){
            arrangement1.push([element]);

        }else{
            lastArray.push(element);
        }
    }
    
        return arrangement1;
}
console.log(divideArray([7,8,9,10,5,4,3], 3));