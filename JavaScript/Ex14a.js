let students=[
    {studentId:101,studentName:"veve", address:"xyz", city:"tuticorin", marks:98},
    {studentId:104,studentName:"gayu", address:"zyx", city:"chennai", marks:94},
    {studentId:102,studentName:"Arya", address:"abc", city:"banglore", marks:96},
    {studentId:103,studentName:"Daisy", address:"zyx", city:"mysore", marks:99},
];
let stud=students.map((x)=>
{
      let mar=x.marks+20;
      console.log(`NAME: ${x.studentName} Student id: ${x.studentId} Mark: ${mar} City: ${x.city} Address:${x.address}`);
      return x;
})
//console.log(stud);