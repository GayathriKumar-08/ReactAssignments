import React,{useState,useEffect} from 'react'
import './record.css';
import axios from 'axios';

export default function StudentRecordView() {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        console.log("Hello this use effect... ");
  
        fetch("http://localhost:3000/Studentdata").then(res => res.json()).then(stud => {
            console.log(stud);
            setStudent(stud);
        }).catch(e => {
            console.error("ERR in student data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }, []);

  const deleteStudent=((id)=> {
        axios.delete(`http://localhost:3000/Studentdata/${id}`)
        .then(res => console.log(res.data));
        
        const student = setStudent.student.filter(item => item.id !== id);  
        setStudent({ student });  
    }
    );
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
                        </div><br /><br />
                        <table>
                            <thead>
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
                                </tr>
                            </thead>

                            {
                                student && student.map((x) => {
                                    return (
                                        <tbody>
                                            <tr>
                                                 <td>{x.id}</td>

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
                                                <td>
                                                 {/* <button onClick={ editStudent} className="btn btn-info">Update 
                                                 </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={()=>deleteStudent} className="btn btn-danger">Delete
                                                  </button>
                                               </td>
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
