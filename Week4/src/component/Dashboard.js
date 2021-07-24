import React from 'react';
import './dashboard.css';
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-sm">

                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to='/dashboard' className="linktag">Home</Link>
                        </li>
                        <li className="active">
                            <Link to='/studentreport' className="linktag">Students Upload</Link>
                        </li>
                        <li className="active">
                            <Link to='/studentlist' className="linktag">Students List</Link>
                        </li>
                        <li>
                            <Link to='/studoperation' className="linktag">Students Operations</Link>
                        </li>
                        <li className="active">
                            <Link to='/Login' className="linktag">Logout</Link>
                        </li>

                        {/* <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li> */}
                    </ul>
                </nav>
                <div>
                    <img src="education.jpg" className="imgset" />
                </div>
            </div>
        </div>
    )
}
