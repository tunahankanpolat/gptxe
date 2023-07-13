chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.type === "connectAPI") {
    connectAPI(msg.method, msg.url, msg.body, msg.token).then((result) => {
      response(result)
    }).catch((error) => {
      response(error)
    });
    return true;
  }
});

chrome.storage.local.get(["token"], (result) => {
  const token = result["token"];
  if(token){
    chrome.action.setPopup({ popup: "components/popup/dashboard/dashboard.html" });
  }else{
    chrome.action.setPopup({ popup: "components/popup/loginPage/loginPage.html" });
  }
});

async function connectAPI(method, url, body, token) {
  debugger
  const headers = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = `${token}`;
  }

  const response = await fetch(url, {
    method: method,
    headers,
    body: JSON.stringify(body)
  });
  const json = await response.json();
  return { "status": response.status, "body": json };
}