let students=[
    {studentId:101,studentName:"veve", address:"xyz", city:"tuticorin", marks:"460"},
    {studentId:104,studentName:"gayu", address:"zyx", city:"chennai", marks:"460"},
    {studentId:102,studentName:"Arya", address:"abc", city:"banglore", marks:"480"},
    {studentId:103,studentName:"Daisy", address:"zyx", city:"mysore", marks:"480"},
];

const newstud=students.filter((C)=>{
       if(C.city=="chennai"||C.city=="banglore")
       {
           return C;
       }
     }
    );
    console.log(newstud);
    