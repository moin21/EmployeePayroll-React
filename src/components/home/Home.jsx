import React from 'react'
import "./Home.css";
import logo from "../../download.png"
import edit from "./edit-svgrepo-com.svg"
import deleteicon from "./delete-svgrepo-com.svg"
import { Link } from "react-router-dom"
function Home() {
    return (
        <div>

            <div class="main-content">
                <div class="header-content employee-header">
                    <div class="emp-detail-text">
                        Employee Details
                        <div class="emp-count">10</div>
                    </div>
                    <Link to="employee" class="add-button">
                        <img src="../assets/download.png" alt="" />Add User</Link>
                </div>
            </div>
            <div className='table-main'>
                <table id="table-display" class="table">
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>
                        <td><img src={edit} alt="edit" id="1" onclick="update(this)" /></td>
                        <td>Albert</td>
                        <td>Male</td>
                        <td>
                            <div className='dept-label'>HR</div>
                            <div className='dept-label'>Finance</div>
                        </td>
                        <td>3000000</td>
                        <td>12 Oct 2021</td>
                        <td className='action'>
                            <img src={deleteicon} alt="delete" id="1" onclick="remove(this)" />
                            <img src={edit} alt="edit" id="1" onclick="update(this)" />
                        </td>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home;