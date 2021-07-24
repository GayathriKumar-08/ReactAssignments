//21 
console.log("Spread operator in objects");
let sciencestudent=
        {
            studname1:"gayu",
            rollno1:"48",
            mark1:99
        };
        

let artsstudent=
    {
        studname2:"keethu",
        rollno2:"48",
        mark2:98
    };

let students=
{
    ...sciencestudent,
   ...artsstudent
}

students.rollno2="84";
console.log(students);