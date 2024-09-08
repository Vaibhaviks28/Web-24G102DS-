function setError(id, error) {
    let element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
  }
  
  function validateForm() {
    let returnval = true;
  
    // Validate name
    let name = document.forms[0]["name"].value;
    if (name.length < 5) {
      setError("name", "*Username should be at least 5 characters long");
      returnval = false;
    }
  
    // Validate email
    let email = document.forms[0]["email"].value;
    if (
      email.indexOf("@") <= 0 ||
      email.lastIndexOf(".") <= email.indexOf("@") + 2 ||
      email.lastIndexOf(".") + 2 >= email.length
    ) {
      setError("email", "*Please enter a valid email address");
      returnval = false;
    }
  
    // Validate phone number
    let phone = document.forms[0]["phone"].value;
    if (!/^\d{10}$/.test(phone) && phone.length != 10) {
      setError("phone", "*Phone number should only contain digits.");
      returnval = false;
    } else if (phone.length != 10) {
      setError("phone", "*Phone number should be 10 digits long");
      returnval = false;
    }
  
    // Validate password
    let password = document.forms[0]["pass"].value;
    if (password.length < 6) {
      setError("pass", "*Password should be at least 6 characters long");
      returnval = false;
    }
  
    // Validate confirm password
    let cpassword = document.forms[0]["cpass"].value;
    if (cpassword != password) {
      setError("cpass", "*Passwords do not match");
      returnval = false;
    }
  
    return returnval;
  }
  
  // Validate Checkbox
  let terms = document.forms[0]["terms"].value;
  if (terms != "on") {
    setError("terms", "*You must agree to the terms and conditions");
    returnval = false;
  }
  
  // Real-time validation
  document
    .getElementById("name")
    .getElementsByTagName("input")[0]
    .addEventListener("input", function () {
      let name = this.value;
      if (name.length >= 5) {
        setError("name", ""); // Clear error
      } else {
        setError("name", "*Name should be at least 5 characters long");
      }
    });
  
  document
    .getElementById("email")
    .getElementsByTagName("input")[0]
    .addEventListener("input", function () {
      let email = this.value;
      if (
        email.indexOf("@") > 0 &&
        email.lastIndexOf(".") > email.indexOf("@") + 2 &&
        email.lastIndexOf(".") + 2 < email.length
      ) {
        setError("email", ""); // Clear error
      } else {
        setError("email", "*Please enter a valid email address");
      }
    });
  
  document
    .getElementById("phone")
    .getElementsByTagName("input")[0]
    .addEventListener("input", function () {
      let phone = this.value;
      if (phone.length == 10 && /^\d{10}$/.test(phone)) {
        setError("phone", ""); // Clear error
      } else if (phone.length != 10) {
        setError("phone", "*Phone number should be 10 digits long");
      } else {
        setError("phone", "*Phone number should only contain digits");
      }
    });
  
  document
    .getElementById("pass")
    .getElementsByTagName("input")[0]
    .addEventListener("input", function () {
      let password = this.value;
      if (password.length >= 6) {
        setError("pass", ""); // Clear error
      } else {
        setError("pass", "*Password should be at least 6 characters long");
      }
    });
  
  document
    .getElementById("cpass")
    .getElementsByTagName("input")[0]
    .addEventListener("input", function () {
      let cpassword = this.value;
      let password = document
        .getElementById("pass")
        .getElementsByTagName("input")[0].value;
      if (cpassword == password) {
        setError("cpass", ""); // Clear error
      } else {
        setError("cpass", "*Passwords do not match");
      }
    });
  
  