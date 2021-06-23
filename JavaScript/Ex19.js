console.log("Destructuring")
let x,y,z;
let fruits=["apple","mango","pineapple","grapes","kiwi"];
console.log("------------------------");
console.log("Before destructuring");
console.log("------------------------");
[x,y,z]=fruits;
console.log(x);
console.log(y);
console.log(z);
console.log("------------------------");
console.log("after destructuring");
console.log("------------------------");
[x,y,...z]=fruits;
console.log(x);
console.log(y);
console.log(z);

