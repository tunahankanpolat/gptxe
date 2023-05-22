import { BACKEND_URL, UPDATE_API_KEY_ENDPOINT, UPDATE_EMAIL_ENDPOINT, UPDATE_PASSWORD_ENDPOINT, UPDATE_LANGUAGE_PREFERENCE_ENDPOINT } from "/constants/moduleConstants.js";

document.getElementById("account-settings-menu").addEventListener("click", function() {
    showSection("account-settings");
  });
  
  document.getElementById("customize-menu").addEventListener("click", function() {
    showSection("customize");
  });
  
  document.getElementById("subscription-menu").addEventListener("click", function() {
    showSection("subscription");
  });
  
  document.getElementById("log-out-menu").addEventListener("click", function() {
    showSection("log-out");
  });
  
  function showSection(section) {
    const sections = document.getElementsByClassName("main__header");
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
  
    document.getElementById(section + "-section").style.display = "block";
  }
  
  document.getElementById('account-settings-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    chrome.storage.local.get(["token"], (result) => {
        const token = result["token"];
        chrome.runtime.sendMessage({type: "connectAPI", url: BACKEND_URL + UPDATE_PASSWORD_ENDPOINT, body: {password: password}, token:token}, (res) => {
            if(res.status === 200){
              chrome.runtime.sendMessage({type: "connectAPI", url: BACKEND_URL + UPDATE_EMAIL_ENDPOINT, body: {email: email}, token:token}, (res) => {
                  if(res.status === 200){
                    const token = res.body.access_token;
                    chrome.storage.local.set({ "token": token }).then(() => {
                      showMessage(res.body.message)
                    });
                  }else{
                      showMessage(res.body.error);
                  }
                });
            }else{
              showMessage(res.body.error);
            }
          });
      });
  });

  document.getElementById('customize-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let languagePreference = document.getElementById('language-preference').value;

    chrome.storage.local.get(["token"], (result) => {
        const token = result["token"];
        chrome.runtime.sendMessage({type: "connectAPI", url: BACKEND_URL + UPDATE_LANGUAGE_PREFERENCE_ENDPOINT, body: {language_preference: languagePreference}, token:token}, (res) => {
            if(res.status === 200){
                showMessage(res.body.message);
            }else{
              showMessage(res.body.error);
            }
          });
      });
  });

  document.querySelector('#log-out-section button').addEventListener('click', function(e) {
    e.preventDefault();
    showMessage("Successfully logged out")
    chrome.storage.local.clear();
    chrome.storage.local.get(["token"], (result) => {
        const token = result["token"];
        if(token){
          chrome.action.setPopup({ popup: "components/popup/dashboard/dashboard.html" });
        }else{
          chrome.action.setPopup({ popup: "components/popup/loginPage/loginPage.html" });
        }
      });
  });

  function showMessage(content) {
    let message = document.querySelector('.message');
    message.innerHTML = content
    message.style.display = 'block';
    setTimeout(function() {
      mesajKutusu.style.display = 'none';
    }, 5000);
  }