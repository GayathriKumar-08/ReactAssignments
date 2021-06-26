let students=[
    {studentId:101,studentName:"veve", address:"xyz pincode:600023", city:"tuticorin", marks:98},
    {studentId:104,studentName:"gayu", address:"zyx", city:"chennai", marks:94},
    {studentId:102,studentName:"Arya", address:"abc pincode:600023", city:"banglore", marks:96},
    {studentId:103,studentName:"Daisy", address:"zyx", city:"mysore", marks:99},
];
let stud=students.map((x)=>
{
    let mark= x.marks+20;
    x.marks=mark;
    console.log(`NAME: ${x.studentName} Student id: ${x.studentId} Mark: ${mark} City: ${x.city} Address:${x.address}`);
    return x;
}).map((e)=>
    {
        if(e.address.endsWith("pincode:600023"))
        {
            let mar=e.marks+15;
            console.log("------------------------------------------------------------------------------------------------")
            console.log(`NAME: ${e.studentName} Student id: ${e.studentId} Mark: ${mar} City: ${e.city} Address:${e.address}`);
           return e;
        }
});

/*let mark= x.marks+20;
     if(x.address.endsWith("pincode:600023"))
     {
        mark+=15;
     }
    console.log(`NAME: ${x.studentName} Student id: ${x.studentId} Mark: ${mark} City: ${x.city} Address:${x.address}`);
    return x;
    */