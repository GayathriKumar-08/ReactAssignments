import React from 'react';
import './Student.css';
export default function StudentExample(props) {
    return (
        <div>
        <h2 style={{ textAlign: 'center' }}>Student Result View</h2>
       <div className="box1">
       <nav className="navbar">
                    <div><label>Student Name:</label><label>{props.studname}</label></div><br />
                    <div><label>Student Roll-No: </label><label>{props.studroll}</label></div>
                </nav>
           <div>

               <table>
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
    )
}
