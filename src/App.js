import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import EmployeeForm from "./components/payroll-form/EmployeeForm";
import Header from "./components/header";
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
        <Header />
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
