import React from 'react'
import logo from "../../src/download.png";
function Header() {
    return (
        <div>
            <header className="header-content header">
                <div className="logo-content">
                    <img src={logo} alt="logo" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span>
                        <br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;
