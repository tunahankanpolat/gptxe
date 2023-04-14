/*chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.type = "displayPopup"){
        console.log(msg.data);
        const content = document.getElementById("content");
        content.innerHTML = msg.data;
        window.open('popup.html', 'Popup', 'width=300, height=200');
        response("başarılı");
        return true;
    }
});*/

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.type === "popup"){

        getContainer().then((container) => {
            response(container);
            console.log(container);
          });
          return true;
    }
  });


  async function getContainer(){
    const conteiner = await document.getElementsByClassName("container-fluid");
    return conteiner;
  }