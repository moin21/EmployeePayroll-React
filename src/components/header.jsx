import React from 'react'
import logo from "../../src/download.png";
function Header() {
    return (
        <div>
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
        </div>
    )
}
export default Header;
