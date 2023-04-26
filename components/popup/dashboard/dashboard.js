document.getElementById("options-link").addEventListener("click", function(event){
    event.preventDefault();
    chrome.runtime.openOptionsPage();
    window.open("https://example.com", "_blank");
  });