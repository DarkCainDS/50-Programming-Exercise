function findInArray(arr1,arr2){
    const filter = arr1.filter(word => {
        return arr2.includes(word);
    });
    return filter;

}
console.log(findInArray([4,5,6,7],[7,8,9,7,5]));
console.log(findInArray(["diego", "paco","pepe"],["ale","diego","sonia", "pepe"]));
