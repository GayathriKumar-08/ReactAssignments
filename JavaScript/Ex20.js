console.log("Spread operator example");
let names=["a","b","c"];
let numbers=[1,2,3,4];

let all=[1,"a",...names,...numbers];
console.log(all);

//20 
function addition(...data)
{
    let sum=0;
    for(let i=0;i<data.length;i++)
    {
        sum+=data[i];
    }
    return sum;
}
console.log("addition of all the numbers: "+addition(10,20,30,40,50));