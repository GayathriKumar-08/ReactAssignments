import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './studentop.css';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Studentoperations({props}) {
    const [student, setStudent] = useState([]);

    const [search, setSearch] = useState("");

    const history = useHistory();

    useEffect(() => {
        console.log("Hello this use effect... ");
        //axios.get();


        fetch("http://localhost:3000/Studentdata").then(res => res.json()).then(stud => {
            console.log(stud);
            setStudent(stud);
        }).catch(e => {
            console.error("ERR in student data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }, [])
    const handleOnClick = () => {
       history.push("/dashboard");
    }
   
    // const api="http://localhost:3000/Studentdata";
    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:3000/Studentdata/${id}`);
        let stud=student.filter((data) => {
            return data.id !== id;
        });
       console.log(stud);
       setStudent(stud);
    }
    return (
        <div>
            <form>
                <div>

                </div>
                <h2 style={{ textAlign: 'center' }}>Students Operations</h2>
                <button className="button1" onClick={handleOnClick}>Go Back</button>
                <div className="container-fluid">
                    <div className="box1">
                        <nav className="navbar123">
                            <h3 style={{ textAlign: 'center' }}>ABC Matriculation HR.Sec SCHOOL</h3>
                        </nav><br />
                        <div>
                            <input className="inpt"
                                type="text"
                                name="search"
                                placeholder="Enter the city" onChange={event => { setSearch(event.target.value) }} />
                        </div><br /><br />
                        <table className="tname">
                            <thead className="thea">
                                <tr>
                                    <th>ID</th>
                                    <th>RollNo</th>
                                    <th>Student Name</th>
                                    <th>Maths Mark</th>
                                    <th>Science Mark</th>
                                    <th>Social Mark</th>
                                    <th>English Mark</th>
                                    <th>Language</th>
                                    <th>Language Mark</th>
                                    <th>Total</th>
                                    <th>Result</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            {
                               student && student.filter((row) => {
                                    if (search == "") {
                                        return row
                                    } else if (row.studname.toLowerCase().includes(search.toLowerCase())) {
                                        return row

                                    }
                                }).map((x) => {
                                    return (
                                        <tbody className="tb">
                                            <tr>
                                                <td>{x.id}</td>

                                                <td>{x.studroll}</td>

                                                <td>{x.studname}</td>

                                                <td>{x.maths}</td>

                                                <td>{x.science}</td>

                                                <td>{x.social}</td>

                                                <td>{x.english}</td>

                                                <td>{x.langdrop}</td>

                                                <td>{x.lang}</td>

                                                <td>{x.total}</td>

                                                <td>{x.studresult}</td>

                                                <td><button className="button12"><Link to={`/update/${x.id}`}><i class="fa fa-edit"></i></Link></button></td>
                                                <td><button className="button123" onClick={() =>deleteStudent(x.id)}><i class="fa fa-trash"></i></button></td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>

                    </div>
                </div>
            </form>

        </div>
    )
}
