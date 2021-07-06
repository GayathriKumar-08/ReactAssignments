import React, { useState } from 'react';
//import Student from './components/Student.js';
import StudentDetails from './StudentDetails';
import ErrorMessage from './ErrorMessage';

export default function StudentExample(props) {
    const [stud, setStud] = useState(
        {
            studroll: 0,
            studname: " ",
            science: 0,
            maths: 0,
            social: 0,
            english: 0,
            lang: 0,
            langdrop: -1,
            studresult: " ",
            total: 0,
            result:" "

        }
    );
    const langdrop = [

        { id: 1, name: "Tamil" },
        { id: 2, name: "Hindi" },
    ]
   
    const [formErrors, setformErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleOnchange = (event) => {
        const { name, value } = event.target;

        setStud((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });

    }

    const handleOnsubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(stud));

        // let sroll = setStud.studroll;
        // let sname = setStud.studname;
        // let sres = setStud.studresult;
        // let math = setStud.maths;
        // let sci = setStud.science;
        // let ss = setStud.social;
        // let lan = setStud.lang;
        // let land = setStud.langdrop;
        // let eng = setStud.english;
        // let tot = setStud.total;
      

        console.log(stud);

        // setStud((prev) => {
        //     return {
        //         ...prev,
        //         studroll: prev.studroll,
        //         studname: prev.studname,
        //         maths: prev.maths,
        //         science: prev.science,
        //         social: prev.social,
        //         lang: prev.lang,
        //         langdrop: prev.langdrop,
        //         eng: prev.english,
        //         sres: prev.studresult,
        //         tot: prev.total
        //     }
        // });


        console.log(stud);

        console.log("===" + Object.entries(formErrors).length)

       // setSubmitted(true);
        // if (Object.entries(formErrors).length == 0) {
        //     setSubmitted(true);
        // } else setSubmitted(false);
        // props.onUserAdd(stud);

        
    }


    const validate = (values) => {
        // let sroll = setStud.studroll;
        // let sname = setStud.studname;
        // let sres = setStud.studresult;
        // let tot = setStud.total;
        // let math = stud.maths;
        // let sci = stud.science;
        // let ss = stud.social;

        // let eng = stud.english;

        let err = {};

        console.log(values);


        if (!values.studroll) {
            err.studroll = "*Student roll-no reqired";
        }else if(isNaN(values.studroll)){
            err.studroll = "*roll-no can contain only diigts";
        }
    
       if(values.studname==" ")
       {
           err.studname="*Student name is required"
       }

        if (!values.maths)
            err.maths = "*Student Maths mark reqired";

        if (!values.science)
            err.science = "*Student science mark reqired";

        if (!values.social)
            err.social = "*Student social mark reqired";

        if (!values.english)
            err.english = "*Student englist mark reqired";

        if (!values.lang)
            err.lang= "*Student language mark reqired";

        if (values.langdrop < 0) {
            err.langdrop = "*Please Select any one language";
        }
         if (values.total > 500)
            err.total = "*Student max range of total marks is 500 ";

           

        const math = parseInt(stud.maths);
        const sci = parseInt(stud.science);
        const ss = parseInt(stud.social)
        const lan = parseInt(stud.lang);
        const eng = parseInt(stud.english);

        const sum =math + sci + ss + lan + eng;
        let tot=parseInt(stud.total);
        let studres=parseInt(stud.total);
        
        if(studres < 200 || math<50 || sci<50 || ss<50 || eng<50 || lan<50)
        {
            studres="Fail";
        }
        else
        {
            studres="Pass";
        }
        console.log(sum);
        setStud((prev) => {
            return {
                ...prev,
                total: sum,
                studresult:studres
            }
        })
        return err;
    }

    return (
        <div>
           {(Object.entries(formErrors).length == 0) && submitted && <h3 style={{textAlig:'center'}}>Forms submitted successfully....</h3>}
            <div className="input">
                <form className="box2" onSubmit={handleOnsubmit} noValidate>
                   
                    <table>
                        <tr>
                            <td><label>Student Roll-No:</label></td>
                            <td> <input type="text" name="studroll" value={stud.studroll} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}>
                                <ErrorMessage message={formErrors.studroll}/>
                                
                            </td>
                        </tr><br />

                        <tr>
                            <td><label>Student Name:</label></td>
                            <td><input type="text" name="studname" value={stud.studname} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}> <ErrorMessage message={formErrors.studname}/></td>
                        </tr><br />

                        <tr>
                            <td><label>Maths</label></td>
                            <td><input type="number" name="maths" value={stud.maths} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}><ErrorMessage message= {formErrors.maths}/></td>
                        </tr><br />

                        <tr>
                            <td><label>Science</label></td>
                            <td><input type="number" name="science" value={stud.science} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}> {formErrors.science}</td>
                        </tr><br />

                        <tr>
                            <td><label>Social</label></td>
                            <td><input type="number" name="social" value={stud.social} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}><ErrorMessage message={formErrors.social}/></td>
                        </tr><br />

                        <tr>
                            <td><label>English</label></td>
                            <td><input type="number" name="english" value={stud.english} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}> <ErrorMessage message={formErrors.english}/></td>
                        </tr><br />

                        <tr>
                            <td><label>choose language:</label></td>
                            <td><select className="drop" name="langdrop" onChange={handleOnchange} value={stud.langdrop} >
                            <option value="-1">Please Select the city</option>
                                    {langdrop.map(x => {
                                        return <option value={x.id}>{x.name}</option>
                                    })
                                    }
                            </select>
                            </td>
                            <td>
                                <td style={{ color: "red" }}> <ErrorMessage message={formErrors.langdrop}/></td>
                            </td>
                        </tr><br />

                        <tr>
                            <td><label>Language:</label></td>
                            <td><input type="number" name="lang" value={stud.lang} onChange={handleOnchange} /></td>
                            <td>
                                <td style={{ color: "red" }}><ErrorMessage message={formErrors.lang}/></td>
                            </td>
                        </tr><br />

                        <tr>
                            <td><label>Student Total Marks:</label></td>
                            <td><input type="number" name="total" value={stud.total} onChange={handleOnchange} /></td>
                            {/* <td className="inpbx"><button className="btn1" onClick={handleOnclick}>Get Total</button></td> */}
                        </tr ><br />
                        <tr>
                            <td></td>
                        <td style={{ color: "red" }}><ErrorMessage message={formErrors.total}/></td>
                        </tr>
                        
                        <tr>
                            <td><label>Student Result:</label></td>
                            <td> <input type="text" name="studresult" value={stud.studresult} onChange={handleOnchange} /></td>
                            {/* <td style={{ color: "red" }}> {formErrors.s}</td> */}
                        </tr><br />

                    </table>

                    <button type="submit" className="btn">click me</button>
                </form>
                 {/* <Student studname={stud.studname} studroll={stud.studroll}/>   */}
                <StudentDetails studname={stud.studname} studroll={stud.studroll} total={stud.total} studresult={stud.studresult}
                    maths={stud.maths} science={stud.science} english={stud.english} social={stud.social} lang={stud.lang}
                    langdrop={stud.langdrop} />
            </div>
        </div>
    )
}
