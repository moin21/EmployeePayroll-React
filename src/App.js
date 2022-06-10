import logo from "./download.png";
import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import EmployeeForm from "./components/payroll-form/EmployeeForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
class App extends React.Component {
  //onClick Function
  onClick = ($event) => {
    console.log("Add New Employee", $event);
    window.open(this.url, "_self");
  };

  render() {
    return (
      <>
        <header class="header-content header">
          <div class="logo-content">
            <img src={logo} alt="logo" />
            <div>
              <span class="emp-text">EMPLOYEE</span>
              <br />
              <span class="emp-text emp-payroll">PAYROLL</span>
            </div>
          </div>
        </header>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<EmployeeForm />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
// import "./App.css";
// import Home from "./components/home/Home";
// import EmployeeForm from "./components/payroll-form/EmployeeForm";

// class App extends React.Component {
//   render() {
//   return(
//     <>
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//         <Routes>
//           <Route path="/employee" element={<EmployeeForm />} />
//         </Routes>
//       </BrowserRouter>
//       </div>
//       </>
//   );
// }

// export default App;
