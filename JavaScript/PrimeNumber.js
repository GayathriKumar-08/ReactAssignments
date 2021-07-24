
//10 
const arr = [1, , 3, 4, 5, 6, 7, 8, 9];
const isPrime = (n) => {
    if (n === 1) {
        return false;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x == 0) {
                return false;
            }
        }
        return true;
    };
};
const filterPrime = arr => {
    const filtered = arr.filter(el => isPrime(el));
    return filtered;
};
console.log(filterPrime(arr));

console.log("----------------------------------------")