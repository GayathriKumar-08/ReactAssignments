import React from 'react';
import './student.css';

export default function StudentDetails(props) {

    return (
        <div>
             <h2 style={{ textAlign: 'center' }}>Student Result View</h2>
             <div className="container-fluid">
            <div className="box1">
                <nav className="navbar">
                    <h3 style={{textAlign:'center'}}>ABC Matriculation HR.Sec SCHOOL</h3>
                </nav>
                
                <img src={'./propic.PNG'} className="propic"/>
                <div>
                    <table>
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

                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}
