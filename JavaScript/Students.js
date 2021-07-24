let students=[
    {studentId:101,studentName:"veve", address:"xyz", city:"Tuticorin", marks:"460"},
    {studentId:104,studentName:"gayu", address:"zyx", city:"chennai", marks:"460"},
    {studentId:102,studentName:"Arya", address:"abc", city:"banglore", marks:"480"},
    {studentId:103,studentName:"Daisy", address:"zyx", city:"mysore", marks:"480"},
];

let stud=students.sort((a,b)=>
{
    if(a.studentName < b.studentName)
    {
        return -1;
    }
    if(a.studentName > b.studentName) { 
        return 1; 
    }
    return 0;
});
students.forEach((e) => {
    console.log(`NAME: ${e.studentName} Student id: ${e.studentId} Mark: ${e.marks} City: ${e.city} Address:${e.address}`);
});
console.table(stud);