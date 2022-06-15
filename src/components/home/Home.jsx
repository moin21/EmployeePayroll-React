import React, { Component, useState } from "react";
import "./Home.css";

import { Link } from "react-router-dom";

// import delete1 from "../assets/icons/delete.svg";
// import edit1 from "../assets/icons/edit.svg";


import EmployeeService from "../../service/EmployeeService";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: [],
        };
    }



    fetchData() {
        EmployeeService.getAllEmployees().then((response) => {
            this.setState({ employee: response.data.data });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <div>
                    <div className="main-content">
                        <div className="header-content employee-header">
                            <div className="emp-detail-text">
                                Employee Details
                                <div className="emp-count">10</div>
                            </div>
                            <Link to="/employee" className="add-button">
                                <img src="" alt="" />+ Add User</Link>
                        </div>
                    </div>
                    <div className="table-main">
                        <table id="table-display" className="table">
                            <thead>
                                <tr>
                                    <th>Profile Image</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th>Start Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.employee.map((employee) => (
                                    <tr key={employee.id}>
                                        <td><img src={employee.profilePic} alt="ProfilePic" srcset="" /></td>
                                        <td>{employee.name}</td>
                                        <td>{employee.gender}</td>
                                        <td>
                                            {employee.department.map(dep =>
                                                <div className="dept-label" id="dept"> {dep} </div>)}
                                        </td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.startDate}</td>
                                        <td>
                                            <img
                                                name={employee.id}
                                                src="{delete1}"
                                                alt="delete"
                                                onClick={() =>
                                                    this.deleteEmployee(employee.id)
                                                }
                                            />
                                            <img
                                                name={employee.id}
                                                src="{edit1}"
                                                alt="edit"
                                                onClick={() =>
                                                    this.updateEmployee(employee.id)
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;