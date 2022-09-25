function calculoDias(number){
    let years = Math.floor(number/365);
    let days_left = (number%365);
    console.log(days_left);
    let month = Math.floor(days_left/30);
    console.log(month);
    days_left = days_left%30;
    console.log(days_left);
    return `Equivale a ${years} años, ${month} meses y ${days_left} dias.`
}
console.log(calculoDias(1920));