document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded
  
    const form = document.querySelector(".form");
    const firstNameInput = document.querySelector('input[name="first-name"]');
    const lastNameInput = document.querySelector('input[name="last-name"]');
    const emailInput = document.querySelector('input[name="email"]');
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
        console.log(firstNameInput)
      // Validate the first name
      if (!validateInput(firstNameInput)) {
        addErrorClass(firstNameInput);
      } else {
        removeErrorClass(firstNameInput);
      }
  
      // Validate the last name
      if (!validateInput(lastNameInput)) {
        addErrorClass(lastNameInput);
      } else {
        removeErrorClass(lastNameInput);
      }
  
      // Validate the email
      if (!validateEmail(emailInput.value)) {
        addErrorClass(emailInput);
      } else {
        removeErrorClass(emailInput);
      }
  
      // You can add more validation checks as needed
  
      // If all validations pass, you can submit the form or perform other actions
      if (validateInput(firstNameInput) && validateInput(lastNameInput) && validateEmail(emailInput.value)) {
        // Submit the form or perform other actions
        // For example: form.submit();
        alert("Form submitted successfully!");
      }
    });
    firstNameInput.addEventListener("focus", function () {
        removeErrorClass(firstNameInput);
      });
    
      lastNameInput.addEventListener("focus", function () {
        removeErrorClass(lastNameInput);
      });
    
      emailInput.addEventListener("focus", function () {
        removeErrorClass(emailInput);
      });
    function validateInput(input) {
      return input.value.trim() !== ""; // Check if the input is not empty
    }
  
    function validateEmail(email) {
      // A simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function addErrorClass(input) {
      input.classList.add("error-border");
    }
  
    function removeErrorClass(input) {
      input.classList.remove("error-border");
    }
  });
  


  