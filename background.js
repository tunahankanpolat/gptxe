chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if(msg.type === "connectAPI"){
    connectAPI(msg).then((data) => {
      response(data);
    });
    return true;
  }
});

async function connectAPI(msg){
  const response = await fetch(`http://localhost:5000/api/generate/${msg.selectedText}&${msg.operationChoice}`);
  if (response.status === 200) {
    const data = await response.json();
    return(data);
  } else {
    return new Error(`Request failed with status ${response.status}`);
  }
}