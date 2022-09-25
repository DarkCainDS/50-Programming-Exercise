function reverseNumber(number){
    let reverseNumber = number;
    reverseNumber = reverseNumber.toString().split('').reverse().join('');
    reverseNumber = parseInt(reverseNumber);

    console.log(typeof reverseNumber);

    return reverseNumber;
}
console.log("El numero invertido es",reverseNumber(56789));