import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import EmployeeForm from "./components/payroll-form/EmployeeForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/employee" element={<EmployeeForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
