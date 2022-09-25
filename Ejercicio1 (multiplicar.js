function tablaMultiplicar(numero){

    /*let resultado = "# tabla del " + numero + "#"; */
    let resultado =`# tabla del ${numero} #\n` ;

    for(let z= 1; z <= 10; z++){

    let multiplicacion = (z*numero);

    resultado += ` ${z} x ${numero} = ${multiplicacion}\n`;
    
    }
    return resultado;
}
console.log(tablaMultiplicar(143))
