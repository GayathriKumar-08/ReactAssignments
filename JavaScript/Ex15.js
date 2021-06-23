//15
console.log("Search and delete");
var fruits = ['apple','mango','orange','kiwi','goa']; // Test
var search_term = 'kiwi';

for (var i=fruits.length-1; i>=0; i--) {
    if (fruits[i] === search_term) {
        fruits.splice(i, 1);
        console.log(fruits);    
    }
}
