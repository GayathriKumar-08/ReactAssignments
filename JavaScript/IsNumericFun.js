//2
function isNumeric(num) {
    return !isNaN(num)
}
console.log(isNumeric("23.33"));
console.log(isNumeric("hello"));
console.log(isNumeric("2"));
console.log(isNumeric("hi"));