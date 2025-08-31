// 🎉 Part 1: Event Handling
document.getElementById("message-btn").addEventListener("click", () => {
  document.getElementById("message-output").textContent = "You clicked the button!";
});

// 🎮 Part 2: Interactive Elements

// Counter
let count = 0;
document.getElementById("counter-btn").addEventListener("click", () => {
  count++;
  document.getElementById("counter-display").textContent = count;
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 📋✅ Part 3: Form Validation
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("form-feedback");

  // Basic validation
  if (name === "" || email === "" || password === "") {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
    return;
  }

  // Email format check
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  // Password length check
  if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";
});
