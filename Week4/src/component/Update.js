import React, { useState, useParams, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Update({}) {
    const { id } = useParams;
    const history = useHistory();
    const [stud, setStud] = useState(
        {
            id:0,
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
    const [langdrop, setLangdrop] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    
    useEffect(() => {
        studentdetail();
        axios.get("http://localhost:3000/langrop").then(res => res.json()).then(stud => {
            console.log(stud);
            setLangdrop(stud);
        }).catch(e => {
            console.error("ERR in language selection");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
      
    }, [])

    const handleOnchange = (e) => {
        setStud(
            {
                ...stud,
                [e.target.name]: e.target.value
            });
    }


    const studentdetail=fetch(`http://localhost:3000/Studentdata/${id}`).then(res => res.json()).then(stud => {
        console.log(stud);
        setStud(stud);
    }).catch(e => {
        console.error("ERR in student data");
        console.error(e);
    }).finally(() => {
        console.log("I am in finally block!!!!");
    });


    const handleOnsubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/Studentdata/${id}`).then(res => res.json()).then(stud => {
            console.log(stud);
            setStud(stud);
        }).catch(e => {
            console.error("ERR in student data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    
        setSubmitted(true);
    };
    const handleOnClick = () => {
        history.push('/studoperation')
    }
    const totalBtn = () => {

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
    return (
        <div>
            <div>
                <>
                    <h2 style={{ textAlign: 'center' }}>Student Result View</h2> <button className="button1" onClick={handleOnClick}>Go Back</button>
                    <form className="box2" onSubmit={(e) => handleOnsubmit} noValidate>
                        <nav className="navbar1234">
                            <h3 style={{ textAlign: 'center' }}>ABC Matriculation HR.Sec SCHOOL</h3>
                        </nav><br />
                        <table>
                        <tr>
                                <td><label>Id:</label></td>
                                <td> <input type="text" name="studroll" value={stud.id} onChange={(e) => handleOnchange(e)} /></td>
                                <td style={{ color: "red" }}>
                                </td>
                            </tr><br />
                            <tr>
                                <td><label>Student Roll-No:</label></td>
                                <td> <input type="text" name="studroll" value={stud.studroll} onChange={(e) => handleOnchange(e)} /></td>
                                <td style={{ color: "red" }}>
                                </td>
                            </tr><br />

                            <tr>
                                <td><label>Student Name:</label></td>
                                <td><input type="text" name="studname" value={stud.studname} onChange={(e) => handleOnchange(e)} /></td>

                            </tr><br />


                            <tr>
                                <td><label>Maths</label></td>
                                <td><input type="number" name="maths" value={stud.maths} onChange={(e) => handleOnchange(e)} /></td>

                            </tr><br />

                            <tr>
                                <td><label>Science</label></td>
                                <td><input type="number" name="science" value={stud.science} onChange={(e) => handleOnchange(e)} /></td>

                            </tr><br />

                            <tr>
                                <td><label>Social</label></td>
                                <td><input type="number" name="social" value={stud.social} onChange={(e) => handleOnchange(e)} /></td>

                            </tr><br />

                            <tr>
                                <td><label>English</label></td>
                                <td><input type="number" name="english" value={stud.english} onChange={(e) => handleOnchange(e)} /></td>
                            </tr><br />

                            <tr>
                                <td><label>choose language:</label></td>
                                <td><select className="drop"
                                    name="langdrop"
                                    onChange={(e) => handleOnchange(e)}
                                    value={stud.langdrop} >
                                    <option value="-1">Please Select the city</option>
                                    {langdrop.map(x => {
                                        return <option key={x.id} value={x.id}>{x.name}</option>
                                    })
                                    }
                                </select>
                                </td>
                                <td>

                                </td>
                            </tr><br />

                            <tr>
                                <td><label>Language:</label></td>
                                <td><input type="number" name="lang" value={stud.lang} onChange={(e) => handleOnchange(e)} /></td>
                                <td>
                                </td>
                            </tr><br />

                            <tr>
                                <td><label>Student Total Marks:</label></td>
                                <td><input type="number" name="total" value={stud.total} onChange={(e) => handleOnchange(e)} /></td>
                                <td className="inpbx"></td>
                                <td><button onClick={totalBtn}>Total</button></td>
                            </tr ><br />
                            <tr>
                                <td></td>
                            </tr>

                            <tr>
                                <td><label>Student Result:</label></td>
                                <td> <input type="text" name="studresult" value={stud.studresult} onChange={(e) => handleOnchange(e)} /></td>

                            </tr><br />

                        </table>

                        <button type="submit" className="btn1">Update</button>
                    </form>

                </>

            </div>
        </div>
    )
}

