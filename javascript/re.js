import React from "react";
import styles from "./css/style0.css";


var floatButton = React.createClass({
		render(){
			return(
				<div>
					<button id="Sign_In" class="BigbuttonStyle" type="submit"> SIGN IN
					</button>

					<button id="Sign_Up" class="BigbuttonStyle" type="submit"> SIGN UP</button>
				</div>
			);
		}
	});

	var Prompt_Box = React.createClass({
		render(){
			return(
				<div>
					<p>Please Sign In Below</p>
					<form>
						<p><label>Username: <input id="username" type="email" placeholder="Email address" title="Please Enter A Valid Email" /></label>
						</p>
							<p><label>Password: <input type="password" placeholder="password" title="Password can only contain letters, numbers, and !, @, #, $,<,>,?" pattern="^([a-zA-Z0-9@*#]{8,15})$"/></label></p>
							<p><input type="checkbox" /> Remember Me</p>
					</form>
					<button class="buttonStyle" onclick="location.href='mainDisplayPage.html'"  type="button"> SIGN IN</button>
				</div>
			);
		}
	});

	var Registration = React.createClass({
		render(){
			return(){
					<h1>OPEN <span class="rotate">i</span>CLICKER REGISTRATION</h1>
	<section>
	<div class="RegistrationBox">
	<h3>Account Information</h3>
		<form>
			<table>
				<tr>
					<td><label>Enter New Username:<br><input id="new_user" type="email" placeholder="example@email.com"/></label></td></tr>
					<tr><td><label>Enter New Password:<br><input id="new_password" type="password" placeholder="Password"/></label></td></tr>
					<tr><td><label>Re-enter New Password:<br><input id="re_new_password" type="password" placeholder="Password"/></label></td>
				</tr>
				
				<tr>
					<td>Select a security question
					<br><select style="width:170px" id="security_question">
						<option>----Select an option----</option>
						<option>What was the name of your elementary / primary school?</option>
						<option>In what city or town does your nearest sibling live?</option>
						<option>In what year was your father born?</option>
						<option>What is the last name of the teacher who gave you your first failing grade?</option>
						<option>What is your favorite drink?</option>
						<option>What is your pet’s name?</option>
						<option>What make/model is your first car?</option>
						</select></td>
				</tr>
				<tr>
					<td><label>
						Answer:<br><input id="security_ans" type="text"></label>
					</td>
				</tr>
			</table>
		</form>
	</div>
	</section>
	<section>
	<div class="RegistrationBox">
		<h3>Personal Information</h3>
		<form>
			<table>
				<tr><td><label>First name:<br><input id="f_name" type="text" pattern="[A-Za-z]" title="First Name" style="width:auto" /></label></td>
				</tr>

				<tr>
				<td><label>Last Name:<br><input id="l_name" type="text" pattern="[A-Za-z]" title="Last Name should only contain letters" style="width:auto" /></label></td></tr>

				<tr>
				<td><label>Middle Initial:<br><input id="m_i" type="text" pattern="[A-Z]{1}" title="Middle Initial" placeholder="M.I." style="width:auto" /></label></td>
				</tr>

				<tr>
				<td>Date Of Birth:<br><input id="DOB" type="date"/></td>
				</tr>

				<tr>
				<td>Gender: <br><input id="Male" type="checkbox"/>Male <input id="Female" type="checkbox"/>Female</td>
				</tr>

				<tr style="font-weight:bold"><td>Address:</td></tr>

				<tr><td><label>Street:<br><input id="Street" type="text" style="width:auto" /></label></td>
				</tr>

				<tr>
				<td>Apt No.: <br><input id="Apt" type="text" style="width:50%" /></td>
				</tr>

				<tr>
					<td>City: <br><input id="City" type="text"/></td>
				</tr>
				<tr>
					<td>State: <br><select id="State">
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District Of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select></td>
					<td>ZIP Code: <br><input id="ZIP" type="text" name="zip_code" pattern="[0-9]{5}" title="5 digit ZIP Code" style="width:50%" /></td>
				</tr>
			</table>
		</form>
	</div>
	</section>
	<section>
	<div class="RegistrationBox">
	<h3>Some More Information</h3>
		<form>
			<table>
				<tr>
					<td>Are you a teacher or student?</td>
				</tr>
				<tr><td><input id="Teacher" type="checkbox"/>Teacher <input id="Student" type="checkbox"/>Student</td>
				</tr>
				<tr>
					<td><label>
						Affiliated School: <input id="school_name" type="text"/>
					</label>
					</td>
				</tr>
			</table>
		</form>
		<div class="buttonOutline">
			<button class="buttonStyle" type="button" id="Sign_Up_Submit"> SIGN UP</button>
			<button id="cancelButton" class="buttonStyle" type="submit"> CANCEL</button>
						</div>
					</div>
				</section>
			};
		}
	});

ReactDOM.render(<floatButton />, document.getElementById('floatingButton'));

ReactDOM.render(<Prompt_Box />, document.getElementById('SignInBox'));

ReactDOM.render(<Registration />, document.getElementById('SignUpForm'));