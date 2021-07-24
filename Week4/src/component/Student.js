import React, { useState, useEffect } from 'react'
import ErrorMessage from './ErrorMessage';
import { useHistory } from "react-router-dom";
//import StudentDetails from './StudentDetails';
import { Link } from "react-router-dom";
import './Student.css';
import Dashboard from './Dashboard';
// import { messageService } from '../services/MessageService';


export default function Student({ props }) {
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

        }
    );
    const history = useHistory();

    const handleOnClick=()=>
   {
     history.push("/dashboard");
    }
    // const langdrop = [

    //     { id: 1, name: "Tamil" },
    //     { id: 2, name: "Hindi" },
    //     { id: 3, name: "Sanskrit" },
    //     { id: 4, name: "French" },
    // ]
    const [langdrop, setLangdrop] = useState([]);
    const [formErrors, setformErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [btnclick, setBtnclick] = useState({});

    const [data, setData] = useState(0);

    const handleOnchange = (event) => {
        const { name, value } = event.target;

        setStud((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }
    useEffect(() => {
        fetch("http://localhost:3000/langrop").then(res => res.json()).then(stud => {
            console.log(stud);
            setLangdrop(stud);
        }).catch(e => {
            console.error("ERR in language selection");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }, [])

    const handleOnsubmit = (e) => {
        e.preventDefault();
        

        console.log(stud);

        if(setformErrors(validate(stud)))
        {
        setSubmitted(true);
        const math = parseInt(stud.maths);
        const sci = parseInt(stud.science);
        const ss = parseInt(stud.social)
        const lan = parseInt(stud.lang);
        const eng = parseInt(stud.english);

        const sum = math + sci + ss + lan + eng;
        let tot = parseInt(stud.total);
        let studres = parseInt(stud.total);

        if (studres < 200 || math < 50 || sci < 50 || ss < 50 || eng < 50 || lan < 50) {
            studres = "Fail";
        }
        else {
            studres = "Pass";
        }
        console.log(sum);
        setStud((prev) => {
            return {
                ...prev,
                total: sum,
                studresult: studres
            }
        })
    }
               
        const reqOptios = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(stud)
        };

        fetch("http://localhost:3000/Studentdata", reqOptios).then(res => res.json()).then(data => {
            console.log("saved");
            alert("successfully submitted");
            console.log(data.id);
            setData(data.id);
        })
    
        //add subject contents.... 
        // messageService.sendMessage(stud.studname);
       

        //   props.onUserAdd(stud);
    
    };

    const validate = (values) => {

        let err = {};

        console.log(values);


        if (!values.studroll) {
            err.studroll = "*Student roll-no reqired";
        } else if (isNaN(values.studroll)) {
            err.studroll = "*roll-no can contain only digits";
        }

        if (values.studname == " ") {
            err.studname = "*Student name is required"
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
            err.lang = "*Student language mark reqired";

        if (values.langdrop < 0) {
            err.langdrop = "*Please Select any one language";
        }
        if (values.total > 500)
            err.total = "*Student max range of total marks is 500 ";



        // const math = parseInt(stud.maths);
        // const sci = parseInt(stud.science);
        // const ss = parseInt(stud.social)
        // const lan = parseInt(stud.lang);
        // const eng = parseInt(stud.english);

        // const sum = math + sci + ss + lan + eng;
        // let tot = parseInt(stud.total);
        // let studres = parseInt(stud.total);

        // if (studres < 200 || math < 50 || sci < 50 || ss < 50 || eng < 50 || lan < 50) {
        //     studres = "Fail";
        // }
        // else {
        //     studres = "Pass";
        // }
        // console.log(sum);
        // setStud((prev) => {
        //     return {
        //         ...prev,
        //         total: sum,
        //         studresult: studres
        //     }
        // })
        return err;
    }


    const clicktotal = () => {
        const math = parseInt(stud.maths);
        const sci = parseInt(stud.science);
        const ss = parseInt(stud.social)
        const lan = parseInt(stud.lang);
        const eng = parseInt(stud.english);

        const sum = math + sci + ss + lan + eng;
        let tot = parseInt(stud.total);
        let studres = parseInt(stud.total);

        if (studres < 200 || math <= 45 || sci <= 45 || ss <= 45 || eng <= 45 || lan <= 45) {
            studres = "Fail";
        }
        else {
            studres = "Pass";
        }
        console.log(sum);
        setStud((prev) => {
            return {
                ...prev,
                total: sum,
                studresult: studres
            }
        })
    }
   const getTotal=()=>
   {
          setBtnclick(clicktotal());
          
   }
    return (
  
        <div>   
            <>
            {submitted}
            {(Object.entries(formErrors).length == 0) && submitted && <h3 style={{ textAlig: 'center' }}>Forms submitted successfully....</h3>}
            <div className="input">
            <h2 style={{ textAlign: 'center' }}>Student Result View</h2> <button className="button1" onClick={handleOnClick}>Go Back</button>
                
                <form className="box2" onSubmit={handleOnsubmit} noValidate>
               
                <nav className="navbar1234">
                            <h3 style={{ textAlign: 'center' }}>ABC Matriculation HR.Sec SCHOOL</h3>
                        </nav><br />
                    <table>
                        <tr>
                            <td><label>Student Roll-No:</label></td>
                            <td> <input type="text" name="studroll" value={stud.studroll} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}>
                                <ErrorMessage message={formErrors.studroll} />

                            </td>
                        </tr><br />

                        <tr>
                            <td><label>Student Name:</label></td>
                            <td><input type="text" name="studname" value={stud.studname} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}> <ErrorMessage message={formErrors.studname} /></td>
                        </tr><br />


                        <tr>
                            <td><label>Maths</label></td>
                            <td><input type="number" name="maths" value={stud.maths} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}><ErrorMessage message={formErrors.maths} /></td>
                        </tr><br />

                        <tr>
                            <td><label>Science</label></td>
                            <td><input type="number" name="science" value={stud.science} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}> {formErrors.science}</td>
                        </tr><br />

                        <tr>
                            <td><label>Social</label></td>
                            <td><input type="number" name="social" value={stud.social} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}><ErrorMessage message={formErrors.social} /></td>
                        </tr><br />

                        <tr>
                            <td><label>English</label></td>
                            <td><input type="number" name="english" value={stud.english} onChange={handleOnchange} /></td>
                            <td style={{ color: "red" }}> <ErrorMessage message={formErrors.english} /></td>
                        </tr><br />

                        <tr>
                            <td><label>choose language:</label></td>
                            <td><select className="drop"
                                name="langdrop"
                                onChange={handleOnchange}
                                value={stud.langdrop} >
                                <option value="-1">Please Select the city</option>
                                {langdrop.map(x => {
                                    return <option key={x.id} value={x.id}>{x.name}</option>
                                })
                                }
                            </select>
                            </td>
                            <td>
                                <td style={{ color: "red" }}> <ErrorMessage message={formErrors.langdrop} /></td>
                            </td>
                        </tr><br />

                        <tr>
                            <td><label>Language:</label></td>
                            <td><input type="number" name="lang" value={stud.lang} onChange={handleOnchange} /></td>
                            <td>
                                <td style={{ color: "red" }}><ErrorMessage message={formErrors.lang} /></td>
                            </td>
                        </tr><br />

                        <tr>
                            <td><label>Student Total Marks:</label></td>
                            <td><input type="number" name="total" value={stud.total} onChange={handleOnchange} /></td>
                            <td className="inpbx"></td>
                            <td><button onClick={getTotal}>Total</button></td>
                        </tr ><br />
                        <tr>
                            <td></td>
                            <td style={{ color: "red" }}><ErrorMessage message={formErrors.total} /></td>
                        </tr>

                        <tr>
                            <td><label>Student Result:</label></td>
                            <td> <input type="text" name="studresult" value={stud.studresult} onChange={handleOnchange} /></td>
                            {/* <td style={{ color: "red" }}> {formErrors.s}</td> */}
                        </tr><br />

                    </table>
  
                            <button type="submit" className="btn1">click me</button>
                </form>
            </div>
            </>

        </div>
        )
}
