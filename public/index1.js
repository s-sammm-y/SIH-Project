document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye');
  
    eyeIcon.addEventListener('click', function () {
      // Toggling the password visibility when the user clicks on the eye icon
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('bx-low-vision');
        eyeIcon.classList.add('bx-show');
      } 
      else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('bx-show');
        eyeIcon.classList.add('bx-low-vision');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password")
  
    loginBtn.addEventListener("click", async function (event) {
      event.preventDefault(); // Preventing form submission

      const username = usernameInput.value;
      const password = passwordInput.value;
  
      try {
        const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body:JSON.stringify({username, password}),
      });
      if(response.ok){
          alert("Successfully Logged in !!");
          /*setTimeout(function() {
            window.close();
          }, 3000);*/
          window.location.href = "/return.html"; // perfect match !!
          //ekhane html take main page e kore dis
      } 
      else{
        alert("Invalid username or password. Please try again."); //invalid credentials
      }
    }
    catch (error){
      console.error("Error during logging in:",error);
      alert("An error occurred while trying to log in :(");
    }
  });
});  