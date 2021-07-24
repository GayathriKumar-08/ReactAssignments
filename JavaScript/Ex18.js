console.log("HOC EXAMPLE");

functionex=(v)=>"Ans="+ v + 3;

const hocex=(data1,fun)=>{
    let v=data1 *10;
    return fun(v) ;
}

let resultex=hocex(8,functionex);
console.log(resultex);

