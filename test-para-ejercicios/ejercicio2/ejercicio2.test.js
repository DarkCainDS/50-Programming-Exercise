const palindromo = require("./ejercicio2");

test("comprobar si la funcion palindromo esta definida", () => {
expect(palindromo).toBeDefined();    
})

test("Es un palindromo", () => {
    expect(palindromo("otto")).toEqual(true)
});
test("no es un palindromo", () => {
    expect(palindromo("Diego Romero")).toBe(false);
})