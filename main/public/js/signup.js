import { showAlert } from './alerts.js';

const signup = async (name, email, password, passwordConfirm, role) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
        role,
      },
    });
    if (res.data.status === 'success') {
      showAlert('sucess', 'Account created successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

const signupForm = document.querySelector('.form--signup');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('confirm-password').value;
    signup(name, email, password, passwordConfirm, 'user');
  });
}
