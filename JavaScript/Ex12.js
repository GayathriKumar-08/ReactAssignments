let students=[
    {studentId:101,studentName:"veve", address:"xyz", city:"tutTuticorin", marks:"460"},
    {studentId:104,studentName:"gayu", address:"zyx", city:"chennai", marks:"460"},
    {studentId:102,studentName:"arya", address:"abc", city:"banglore", marks:"480"},
    {studentId:103,studentName:"Daisy", address:"zyx", city:"mysore", marks:"480"},
];

let stud=students.sort((a,b)=>
{    
    if((a.studentName < b.studentName) && (a.city < b.city))
    {
        return -1;
    }
    else if((a.studentName > b.studentName) && (a.city > b.city))
    {
        return 1;
    }
    return 0;
});
console.log(stud);