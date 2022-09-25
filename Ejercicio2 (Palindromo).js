function palindromo(texto){
    let invertido = texto.split('').reverse().join('');
    
    return (invertido  ===  texto);
   
}

console.log("¿Es un palindromo?" + palindromo("otto"));