console.log("Map and WeakMap Example");
console.log("-------------------------")
console.log("Map")
console.log("-------------------------")

let m1=new Map();

let k1={a:1};
let k2={b:2};
let k3={c:3};

m1.set(k1,"hiii");
m1.set(k2,"hello");
m1.set(k3,"welcome");
k3=null;
//loop
m1.forEach((key,value)=>
{
    console.log(""+key+"-"+value)

});
console.log("-------------------------")
console.log("Weak Map")
console.log("-------------------------")
var w1 = new WeakMap();

let val1={value:"101",name:"gayu"};
let key1={c:1};

let val2={value:"102",name:"keethu"};
let key2={d:2};

w1.set(key1,val1);
w1.set(key2,val2);

key2= null;

console.log(w1.get(key1));
console.log(w1.get(key2));