const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const but = document.getElementById("but");
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxww5-rwfoW3t26PiPYh7vuN2xdJEuR5D2z6ThkF4sb3Muly5Or8p-CrA1KFniacUOX/exec";
var checkemail;
var checkpassword;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  checkInputs();
});

const getData = (sRate, count) => {
  if (sRate === count) {
    // alert('successful')
    fetch(scriptURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        checkdata(data);
      });
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
      getData(sRate, count);
    } else {
      return false;
    }
  }

  // console.log(formcon)
};

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  // trim to remove the whitespaces

  checkemail = emailValue;
  checkpassword = passwordValue;

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

function checkdata(data) {
  let found = false;
  data.forEach((element) => {
    //  console.log(checkemail)
    if (element.Email == checkemail && element.Password == checkpassword) {
      found = true;
    }
  });

  if (found) {
    location.href = "musicplayer.html";
  } else {
    alert("invalid")
  }
}
