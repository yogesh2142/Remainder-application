const loginForm = document.querySelector('form');
const loginErrorPopup = document.querySelector('.login-error-popup');
const closeButton = document.querySelector('.cancel-btn');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Simulate login failure
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username !== 'admin' || password !== '123456') {
    loginErrorPopup.classList.add('active');
  } else {
    // Simulate successful login
    alert('Login successful!');
  }
});

closeButton.addEventListener('click', () => {
  loginErrorPopup.classList.remove('active');
});

const cancelButton = document.querySelector('.cancel-btn');

cancelButton.addEventListener('click', () => {
  window.location.href = '/'; // Redirect to home page or any other desired page
});
