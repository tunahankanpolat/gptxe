import { BACKEND_URL, LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "/constants/moduleConstants.js";

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  let endpoint = '';
  const formData = {
    email: email,
    password: password
  };

  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  
  if (loginTab.classList.contains('active')) {
    endpoint = LOGIN_ENDPOINT;
  } else if (signupTab.classList.contains('active')) {
    endpoint = SIGNUP_ENDPOINT;
  }
  chrome.runtime.sendMessage({type: "connectAPI", url: BACKEND_URL + endpoint, body: formData}, (res) => {
    if(res.status === 200){
      const token = res.body.access_token;
      chrome.storage.local.set({ "token": token }).then(() => {
        window.location.href = '../dashboard/dashboard.html';
      });
    }else{
      displayErrorMessage(res.body.error);
    }
  });
});

document.getElementById('loginTab').addEventListener('click', function() {
  loginTab.classList.remove('active');
  loginTab.classList.remove('underlineHover');
  signupTab.classList.remove('underlineHover')
  signupTab.classList.remove('active');

  loginTab.classList.add('active');
  signupTab.classList.add('inactive');
  signupTab.classList.add('underlineHover');
});

document.getElementById('signupTab').addEventListener('click', function() {
  loginTab.classList.remove('active');
  loginTab.classList.remove('underlineHover');
  signupTab.classList.remove('underlineHover')
  signupTab.classList.remove('active');

  signupTab.classList.add('active');
  loginTab.classList.add('inactive');
  loginTab.classList.add('underlineHover');
});

function displayErrorMessage(message) {
  const errorContainer = document.getElementById('errorContainer');
  errorContainer.textContent = message;
  errorContainer.classList.add('error-message');
}