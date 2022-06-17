import axios from "axios";

class EmployeeService {
  baseUrl = "http://localhost:8080/employee";

  addEmployee(data) {
    return axios.post(`${this.baseUrl}/post`, data);
  }
  getAllEmployees() {
    return axios.get(`${this.baseUrl}/get-all`);
  }
  delete = (employeeId) => {
    axios.delete(`${this.baseUrl}/delete/${employeeId}`);
  };
  updateEmployee = (empId, data) => {
    console.log(empId);
    return axios.put(`${this.baseUrl}/update/${empId}`, data);
  };
  getById = (employeeId) => {
    axios.get(`${this.baseUrl}/get/${employeeId}`);
  };
}
export default new EmployeeService();
