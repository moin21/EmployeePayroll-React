import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import EmployeeForm from "./components/payroll-form/EmployeeForm";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/employee">
              <EmployeeForm />
            </Route>
            <Route path="/EmployeeForm/:id">
              <EmployeeForm />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
