import axios from "axios";

class EmployeeService {
  baseUrl = "http://localhost:8080/employee";

  addEmployee(data) {
    return axios.post(`${this.baseUrl}/post`, data);
  }
  getAllEmployees() {
    return axios.get(`${this.baseUrl}/get-all`);
  }
}
export default new EmployeeService();
