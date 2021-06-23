//8 & 9
let names1 = ["a", "b", "c", "d", "e", "f"];
const newarr = names1.map((ele, idx) => {
    if (idx % 2 == 0) {
        return `Er.${ele}`;
    }
    else {
        return `Dr.${ele}`;
    }
}).map((x)=>{
    if(x.startsWith("Dr."))
    {
        return `${x}-San`;
    }
    else{
        return x;
    }
});
console.log(newarr);
//console.log("----------------------------------------")

