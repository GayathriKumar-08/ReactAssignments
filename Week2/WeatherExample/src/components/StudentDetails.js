import React,{useState} from 'react';
import StudentExample from './StudentExample';
import './Student.css';


export default function StudentDetails() {
    const [stud, setStud] = useState(
        {
            studroll: 0,
            studname: " ",
            science: 0,
            maths: 0,
            social: 0,
            english: 0,
            lang: 0,
            langdrop: "",
            studresult: " ",
            total: 0,
            result:" "

        }
    );

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
       

        setStud((prev) => {
            return {
                ...prev,
                sroll: prev.studroll,
                sname: prev.studname,
                math: prev.maths,
                sci: prev.science,
                ss: prev.social,
                lan: prev.lang,
                land: prev.langdrop,
                eng: prev.english,
                sres: prev.studresult,
                tot: prev.total
            }
        });


        console.log(stud);

        setSubmitted(true);

        // console.log("===" + Object.entries(formErrors).length)

        // setSubmitted(true);
        // if (Object.entries(formErrors).length == 0) {
        //     setSubmitted(true);
        // } else setSubmitted(false);  
    }

    const handleOnclick = (event) => {
        event.preventDefault();

        const math = stud.maths;
        const sci = stud.science;
        const ss = stud.social;
        const lan = stud.lang;
        const eng = stud.english;

        const sum = math + sci + ss + lan + eng;

        let tot=stud.total;

        let studres=stud.total;

        if(studres< 200||math< 50||sci< 50||ss< 50||eng< 50||lan< 50)
        {
            studres="fail";
        }
        else{
            studres="pass";
        }
        
        console.log(sum);
        setStud((prev) => {
            return {
                ...prev,
                total: sum,
                studresult:studres
            }
        })
    }

    return (
        <div>
             <div className="input">
                <form className="box2" onSubmit={handleOnsubmit} noValidate>
                    <table>
                        <tr>
                            <td><label>Student Roll-No:</label></td>
                            <td> <input type="text" name="studroll" value={stud.studroll} onChange={handleOnchange} /></td>
                        </tr><br />

                        <tr>
                            <td><label>Student Name:</label></td>
                            <td><input type="text" name="studname" value={stud.studname} onChange={handleOnchange} /></td>
                        </tr><br />

                        <tr>
                            <td><label>Maths</label></td>
                            <td><input type="number" name="maths" value={stud.maths} onChange={handleOnchange} /></td>
                        </tr><br />

                        <tr>
                            <td><label>Science</label></td>
                            <td><input type="number" name="science" value={stud.science} onChange={handleOnchange} /></td>
                        </tr><br />

                        <tr>
                            <td><label>Social</label></td>
                            <td><input type="number" name="social" value={stud.social} onChange={handleOnchange} /></td>
                        </tr><br />

                        <tr>
                            <td><label>English</label></td>
                            <td><input type="number" name="english" value={stud.english} onChange={handleOnchange} /></td>
                        </tr><br />

                        <tr>
                            <td><label>choose language:</label></td>
                            <td><select className="drop" name="langdrop" onChange={handleOnchange} value={stud.langdrop} >
                                <option value="select">--Select--</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                            </td>
                        </tr><br />

                        <tr>
                            <td><label>Language:</label></td>
                            <td><input type="number" name="lang" value={stud.lang} onChange={handleOnchange} /></td>
                        </tr><br />

                        <tr>
                            <td><label>Student Total Marks:</label></td>
                            <td><input type="number" name="total" value={stud.total} onChange={handleOnchange} /></td>
                            <td className="inpbx"><button className="btn1" onClick={handleOnclick}>Get Total</button></td>
                        </tr><br />
                        
                        <tr>
                            <td><label>Student Result:</label></td>
                            <td> <input type="text" name="studresult" value={stud.studresult} onChange={handleOnchange} /></td>
                        </tr><br />

                    </table>

                    <button type="submit" className="btn">click me</button>
                </form>
                
                <StudentExample studname={stud.sname} studroll={stud.sroll} total={stud.total} studresult={stud.studresult}
                    maths={stud.maths} science={stud.science} english={stud.english} social={stud.social} lang={stud.lang}
                    langdrop={stud.langdrop} />
            </div>
        </div>
    )
}
