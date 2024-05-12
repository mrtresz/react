import React, { useState } from "react";
import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({}); // State to manage error messages
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track whether the form is submitted successfully or not

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  // Error messages for invalid input
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Extract username and password from the form
    var { uname, pass } = document.forms[0];

    // Find user login info from the database
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // If password is invalid, set error message
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // If username and password are correct, set isSubmitted to true
        setIsSubmitted(true);
      }
    } else {
      // If username is not found in the database, set error message
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")} {/* Render error message if there's an error in username */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")} {/* Render error message if there's an error in password */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {/* If the form is submitted successfully, display success message, else display the login form */}
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;
