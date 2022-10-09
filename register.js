const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const but = document.getElementById("but");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxww5-rwfoW3t26PiPYh7vuN2xdJEuR5D2z6ThkF4sb3Muly5Or8p-CrA1KFniacUOX/exec";
const forms_d = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  checkInputs();
});

const sendData = (sRate, count) => {
  if (sRate === count) {
    //alert('successful')
    // swal("Good job!", "You clicked the button!", "success");

    fetch(scriptURL, { method: "POST", body: new FormData(forms_d) })
      .then((response) => {
        alert("Account created successfully...");
        location.href = "login.html";
      })
      .catch((error) => console.error("Error!", error.message));
  }
};

const successMsg = () => {
  let formcon = document.getElementsByClassName("form-control");
  var count = formcon.length - 1;
  // console.log(count)
  for (var i = 0; i <= count; i++) {
    if (formcon[i].className === "form-control success") {
      console.log("if");
      var sRate = 0 + i;
      console.log(sRate);
      sendData(sRate, count);
    } else {
      return false;
    }
  }

  // console.log(formcon)
};

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }

  successMsg();
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
