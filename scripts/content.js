document.addEventListener("mousedown", (event) => {
  if(event.target.id != ICON_ID){
    removeIconButton();
  }
});

document.addEventListener("mouseup", (event) => {
  event.preventDefault();
  let selectedText = window.getSelection().toString();
  const mouseX = event.clientX + window.scrollX;
  const mouseY = event.clientY + window.scrollY;  
  //debugger
  if (selectedText.length > 0 && !isMenuAdded() && !isIconButtonAdded() && !isBubbleAdded()) {
    const iconButton = addIconButton(mouseX, mouseY);
    addListener(iconButton, mouseX, mouseY);
  }else if(selectedText.length <= 0){
    removeIconButton();
    removeMenu();
    removeBubble();
  }
});

function addListener(node, mouseX, mouseY){
  node.addEventListener('click', () => {
    if(node.id == ICON_BUTTON_ID){
      const menu = addMenu(mouseX, mouseY, sendMessage);
      addListener(menu, mouseX, mouseY);
      removeIconButton();
    }else if(node.id == MENU_ID){
      const bubble = addBubble(mouseX, mouseY);
      addListener(bubble, mouseX, mouseY);
      removeMenu();
    }else{
      removeBubble();
    }
  });  
}

function sendMessage(choice) {
  chrome.storage.local.get(["token"], (result) => {
    const token = result["token"];
    const content = window.getSelection().toString();
    
    chrome.runtime.sendMessage({
      type: "connectAPI",
      method: "POST",
      url: BACKEND_URL + "/api/" + choice,
      body: { "content": content },
      "token": token
    }, (response) => {
      if (response.status === 200) {
        setBubbleContentText(response.body.result);
      } else {
        setBubbleContentText(response.body.error);
      }
    });
  });
}
