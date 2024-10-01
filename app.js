document.addEventListener("DOMContentLoaded", function() {
  const emailEl = document.querySelector('#email');
  const form = document.querySelector('#Email');

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isEmailValid = checkEmail();
      let isformValid = isEmailValid;
      if (isformValid) {
          console.log("Form is valid");
          window.location.href = 'subscribe.html'; 



      }
  });

  const isEmailValid = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  const showError = (input, message) => {
      const formField = input.parentElement;
      formField.classList.remove('success');
      formField.classList.add('error');
      const error = formField.querySelector('small');
      error.textContent = message;
  };

  const showSuccess = (input) => {
      const formField = input.parentElement;
      formField.classList.remove('error');
      formField.classList.add('success');
      const error = formField.querySelector('small');
      error.textContent = '';
  };

  const checkEmail = () => {
      let valid = false;
      const emailValue = emailEl.value.trim();
      if (!emailValue) {
          showError(emailEl, "Valid email required");
      } else if (!isEmailValid(emailValue)) {
          showError(emailEl, "Valid email required");
      } else {
          showSuccess(emailEl);
          valid = true;
      }
      return valid;
  };
});
