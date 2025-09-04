// Select elements
const form = document.getElementById("authForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const statusMsg = document.getElementById("formStatus");

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Password regex: min 8 chars, at least 1 letter, 1 number, 1 special char
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Validate email
function validateEmail() {
  const group = document.getElementById("emailGroup");
  if (emailPattern.test(email.value)) {
    group.classList.add("valid");
    group.classList.remove("invalid");
    return true;
  } else {
    group.classList.add("invalid");
    group.classList.remove("valid");
    return false;
  }
}

// Validate password
function validatePassword() {
  const group = document.getElementById("passwordGroup");
  if (passwordPattern.test(password.value)) {
    group.classList.add("valid");
    group.classList.remove("invalid");
    return true;
  } else {
    group.classList.add("invalid");
    group.classList.remove("valid");
    return false;
  }
}

// Validate confirm password
function validateConfirm() {
  const group = document.getElementById("confirmGroup");
  if (confirm.value && confirm.value === password.value) {
    group.classList.add("valid");
    group.classList.remove("invalid");
    return true;
  } else {
    group.classList.add("invalid");
    group.classList.remove("valid");
    return false;
  }
}

// Attach live validation
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirm.addEventListener("input", validateConfirm);

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop actual submission

  const emailOk = validateEmail();
  const passwordOk = validatePassword();
  const confirmOk = validateConfirm();

  if (emailOk && passwordOk && confirmOk) {
    statusMsg.textContent = "✅ All good! Form submitted successfully.";
    statusMsg.style.color = "limegreen";
  } else {
    statusMsg.textContent = "❌ Please fix the errors before submitting.";
    statusMsg.style.color = "crimson";
  }
});
