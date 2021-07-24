import React, { useState, useEffect } from 'react';
//import axios from 'axios';

export default function StudentDetails(props) {

    // const [formvalue, setFormvalue] = useState({
    //     langdr: -1
    // });

    const [student, setStudent] = useState([]);

    const [search, setSearch] = useState("");

    // const handleOnChange = (event) => {
    //     const [name, value] = event.target;
    //     console.log(name);
    //     console.log(value);
    //     setFormvalue((prev) => {
    //         return {
    //             ...prev,
    //             [name]: value,
    //             //langdr:prev.langdrop
    //         }
    //     })
    //     console.log(formvalue);
    // }

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


    return (
        <div>
            <form>
                <div>

                </div>
                <h2 style={{ textAlign: 'center' }}>Student Result View</h2>
                <div className="container-fluid">
                    <div className="box1">
                        <nav className="navbar">
                            <h3 style={{ textAlign: 'center' }}>ABC Matriculation HR.Sec SCHOOL</h3>
                        </nav><br />
                        <div>
                            <input className="inpt"
                                type="text"
                                name="search"
                                placeholder="Enter the city" onChange={event => { setSearch(event.target.value) }} />
                        </div><br /><br />
                        <table>
                            <thead>
                                <tr>
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
                                        <tbody>
                                            <tr>

                                                <td>{x.studroll}</td>

                                                <td>{x.studname}</td>

                                                <td>{x.science}</td>

                                                <td>{x.math}</td>

                                                <td>{x.social}</td>

                                                <td>{x.english}</td>

                                                <td>{x.langdrop}</td>

                                                <td>{x.lang}</td>

                                                <td>{x.total}</td>

                                                <td>{x.studresult}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }

                            {/* <div> */}
                            {/* <table>
                    <tr>
                            <td>Student Name:</td>
                            <td>{props.studname}</td>
                        </tr><br />
                        <tr>
                            <td>Student Roll:</td>
                            <td>{props.studroll}</td>
                        </tr><br />
                        <tr>
                            <td>Maths Mark:</td>
                            <td>{props.maths}</td>
                        </tr><br />
                        <tr>
                            <td>Science Mark:</td>
                            <td>{props.science}</td>
                        </tr><br />
                        <tr>
                            <td>Social Mark:</td>
                            <td>{props.social}</td>
                        </tr><br />
                        <tr>
                            <td>English Mark:</td>
                            <td>{props.english}</td>
                        </tr><br />
                        <tr>
                            <td>Language:</td>
                            <td>{props.langdrop}</td>
                        </tr><br />
                        <tr>
                            <td>Language Mark:</td>
                            <td>{props.lang}</td>
                        </tr><br />
                        <tr>
                            <td>Student Total Marks:</td>
                            <td>{props.total}</td>
                        </tr><br />
                        <tr>
                            <td>Student result:</td>
                            <td>{props.studresult}</td>
                        </tr><br />

                    </table> */}
                            {/* </div> */}
                        </table>

                    </div>
                </div>
            </form>
        </div>
    )
}
