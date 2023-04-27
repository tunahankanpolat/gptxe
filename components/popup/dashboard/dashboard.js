document.getElementById("all-settings").addEventListener("click", function(event){
    event.preventDefault();
    chrome.runtime.openOptionsPage();
  });