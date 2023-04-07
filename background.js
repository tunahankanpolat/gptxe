chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if(msg.type === "connectAPI"){
    connectAPI(msg).then((data) => {
      response(data);
      console.log(data);
    });
    return true;
    /*(async () => {
      try {
        console.log("fetch öncesi");
          const response = await fetch("http://localhost:3000/api/generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ selectedText: msg.selectedText, operationChoice: msg.operationChoice  }),
          });
          const data = await response.json();
          if (response.status !== 200) {
            throw data.error || new Error(`Request failed with status ${response.status}`);
          }
          console.log("data");
          sendResponse({data});
        } catch(error) {
          sendResponse(error);
          console.log("error");
        }
        return true;
    })*/
  }

});

async function connectAPI(msg){
  const response = await fetch("http://localhost:3000/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ selectedText: msg.selectedText, operationChoice: msg.operationChoice  }),
  });
  if (response.status === 200) {
    const data = await response.json();
    return(data);
  } else {
    return new Error(`Request failed with status ${response.status}`);
  }
}