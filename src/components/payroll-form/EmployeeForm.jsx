import React from 'react'
import './EmployeeForm.css'
import logo from './download.png'
import profile3 from './edit-svgrepo-com.svg'
import profile1 from './edit-svgrepo-com.svg'
import profile7 from './edit-svgrepo-com.svg'
import profile8 from './edit-svgrepo-com.svg'
import { Link } from "react-router-dom"
// import profile5 from './Ellipse -5.png'
// import profile6 from './Ellipse -6.png'

function EmployeeForm() {
    return (
        <div>

            <div class="form-content">
                <form class="form" action="#" onreset="resetForm()"
                    onsubmit="save()">
                    <div class="form-head">
                        Employee Payroll form
                    </div>
                    <div class="row-content">
                        <label for="name" class="label text">Name</label>
                        <input type="text" class="input" id="name" name="name"
                            placeholder="Your name.." required />
                        <error-output class="text-error" for="name"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="profile">Profile image</label>
                        <div class="profile-radio-content">
                            <label>
                                <input type="radio" id="profile1"
                                    value={profile3}
                                    name="profile" />
                                <img class="profile" id="image1"
                                    src={profile3} />
                            </label>
                            <label>
                                <input type="radio" id="profile2"
                                    value={profile1}
                                    name="profile" />
                                <img class="profile" id="image2"
                                    src={profile1} />
                            </label>
                            <label>
                                <input type="radio" id="profil3"
                                    value={profile8}
                                    name="profile" />
                                <img class="profile" id="image3"
                                    src={profile8} />
                            </label>
                            <label>
                                <input type="radio" id="profile4"
                                    value={profile7}
                                    name="profile" />
                                <img class="profile" id="image4"
                                    src={profile7} />
                            </label>
                        </div>
                    </div>
                    <div class="row-content">
                        <label for="gender" class="label text">Gender</label>
                        <div>
                            <input type="radio" id="male" name="gender"
                                value="male" />
                            <label for="male" class="text">Male</label>
                            <input type="radio" id="female" name="gender"
                                value="female" />
                            <label for="female" class="text">Female</label>
                        </div>
                    </div>
                    <div class="row-content">
                        <label for="department" class="label text">Department</label>
                        <div>
                            <input type="checkbox" class="checkbox" id="hr"
                                name="department" value="HR" />
                            <label for="hr" class="text">HR</label>
                            <input type="checkbox" class="checkbox" id="sales"
                                name="department" value="Sales" />
                            <label for="sales" class="text">Sales</label>
                            <input type="checkbox" class="checkbox" id="finance"
                                name="department" value="Finance" />
                            <label for="finance" class="text">Finance</label>
                            <input type="checkbox" class="checkbox" id="engineer"
                                name="department" value="Engineer" />
                            <label for="engineer" class="text">Engineer</label>
                            <input type="checkbox" class="checkbox" id="others"
                                name="department" value="Others" />
                            <label for="others" class="text">Others</label>
                        </div>
                    </div>
                    <div class="row-content">
                        <label for="salary" class="label text">Choose your salary:
                        </label>
                        <input type="range" class="input" name="salary" id="salary"
                            min="300000" max="500000" step="100" value="400000" />
                        <output class="salary-output text" for="salary">400000</output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="startDate">Start Date</label>
                        <div>
                            <select id="day" name="Day">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="Month" id="month">
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select name="Year" id="year">
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                    </div>
                    <div class="row-content">
                        <label for="notes" class="label text">Notes</label>
                        <textarea id="notes" class="input" name="Notes"
                            placeholder=""></textarea>
                    </div>
                    <div class="buttonParent">
                        <Link to="/" class="resetButton
                        button cancelButton">Cancel</Link>
                        <div class="submit-reset">
                            <Link to="/" class="submitButton
                        button cancelButton">Submit</Link>
                            <button type="reset" class="resetButton button">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeForm;