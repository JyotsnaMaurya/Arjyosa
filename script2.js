function validateForm() {
      const pass = document.getElementById("password").value.trim();
      const confirm = document.getElementById("confirmPassword").value.trim();
      const error = document.getElementById("error");

      if (pass.length < 8) {
        error.textContent = "⚠ Password must be at least 8 characters long";
        error.style.display = "block";
        return false;
      }

      if (pass !== confirm) {
        error.textContent = "⚠ Passwords do not match";
        error.style.display = "block";
        return false;
      }

      error.style.display = "none";
      alert("🎉 Registration successful!");
      return true;
    }