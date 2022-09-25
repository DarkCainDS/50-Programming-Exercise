function checkEmail(email){
    return  /^\w+@\w+\.+\w+$/gi.test(email);

}
console.log(checkEmail("Diegoromeros@hotmail.com"))