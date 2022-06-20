import React, { Component } from "react";

import "./Home.css";
import edit from "./edit.svg";
import deleteicon from "./delete.svg";
import profile3 from './alpha.jpg'
import profile1 from './bravo.jpg'
import profile7 from './charlie.jpg'
import profile8 from './delta.jpg'
import { withRouter, Link } from "react-router-dom";
import { Route } from "react-router";


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
    deleteEmployee(employeeId) {
        console.log("employee id" + employeeId);
        EmployeeService.delete(employeeId);
        window.location.reload();
    }

    componentDidMount() {
        this.fetchData();
    }
    updateEmployee = (employeeId) => {
        console.log(employeeId)
        this.props.history.push(`EmployeeForm/${employeeId}`);
    };


    render() {
        return (
            <div>
                <div>
                    <div className="main-content">
                        <div className="header-content employee-header">
                            <div className="emp-detail-text">
                                Employee Details
                                <div className="emp-count">{this.state.employee.length}</div>
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
                                {this.state.employee.map((employee, index) => (
                                    <tr key={`${index}`}>
                                        <td>
                                            <img src={employee.profilePic === './alpha.jpg' ? profile3 :
                                                employee.profilePic === "./bravo.jpg" ? profile1 :
                                                    employee.profilePic === "./charlie.jpg" ? profile7 : profile8
                                            } alt="ProfilePic" srcset="" /></td>
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
                                                src={deleteicon}
                                                alt="delete"
                                                onClick={() => { this.deleteEmployee(employee.id) && this.fetchData() }
                                                }
                                            />
                                            <img
                                                name={employee.id}
                                                src={edit}
                                                alt="edit"
                                                onClick={() => {
                                                    this.updateEmployee(employee.id)
                                                }
                                                }
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}
export default withRouter(Home);