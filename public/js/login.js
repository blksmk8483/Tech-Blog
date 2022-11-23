const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login');
    const password = document.querySelector('#password-login');
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ 
          username: username.value, 
          password: password.value, }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
    // pretty sure I need to tell this where to go is wrong.
    // this should go to my dashboard

        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  // -------- Sign up --------
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup');
    const password = document.querySelector('#password-signup');
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ 
          username: username.value, 
          password: password.value, }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // pretty sure I need to tell this where to go is wrong.
        //this should go to my dashboard
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  