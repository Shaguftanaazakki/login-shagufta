document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Simple validation (replace with real logic or API call)
  if (username === "admin" && password === "1234") {
    error.style.color = "green";
    error.textContent = "Login successful!";
    // Redirect or do something on success
  } else {
    error.textContent = "Invalid username or password.";
  }
});
