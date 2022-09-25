function failPass(alumnos){
    let fail = 0, pass = 0;
    for (alumnos of alumnos){
        if(alumnos[1] >=4){
            pass++
        }else{
            fail++
        }
    }
    return {
        "pass":pass,
        "fail":fail
    };
}
console.log(failPass([
    ["Diego", 4],
    ["fabiola",6],
    ["sebastian",3],
    ["saumon",5],
    ["macarena",6],
    ["deya",2]
]))