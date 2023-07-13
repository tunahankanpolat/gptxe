import { UPDATE_API_KEY_ENDPOINT, BACKEND_URL } from "/constants/moduleConstants.js";

document.getElementById("all-settings").addEventListener("click", function(event){
    event.preventDefault();
    chrome.runtime.openOptionsPage();
  });

  document.getElementById('dashboard-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    getTokenAndSendRequest();
  });
  
  function getTokenAndSendRequest() {
    chrome.storage.local.get(["token"], (result) => {
      const token = result["token"];
      const apiKey = document.getElementById('api-key').value;
  
      chrome.runtime.sendMessage({
        type: "connectAPI",
        url: BACKEND_URL + UPDATE_API_KEY_ENDPOINT,
        body: { "api_key": apiKey },
        "token": token
      }, (response) => {
        if (response.status === 200) {
          displayErrorMessage(response.body.message);
        } else {
          displayErrorMessage(response.body.error);
        }
      });
    });
  }
  


function displayErrorMessage(message) {
  const errorContainer = document.getElementById('errorContainer');
  errorContainer.textContent = message;
  errorContainer.classList.add('error-message');
}