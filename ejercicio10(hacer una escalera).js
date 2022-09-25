function ladder(number){
    let step = "" ;
    for ( z = 1; z < number; z++){
        step += "[-]" + "\n";
        for( w = 0; w < z; w++){
            step += "[-]"  ;
        }
       
    }
    step += "[-]"
     return step;
}


console.log(ladder(6));