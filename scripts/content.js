document.addEventListener("mousedown", (event) => {
  if(event.target.id != getIconID()){
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
    if(node.id == getIconButtonID()){
      const menu = addMenu(mouseX, mouseY, sendMessage);
      addListener(menu, mouseX, mouseY);
      removeIconButton();
    }else if(node.id == getMenuID()){
      const bubble = addBubble(mouseX, mouseY);
      addListener(bubble, mouseX, mouseY);
      removeMenu();
    }else{
      removeBubble();
    }
  });  
}


function sendMessage(choice){
  const content = window.getSelection().toString();
  chrome.runtime.sendMessage({ type: "connectAPI",selectedText: content, operationChoice: choice },(response) =>{
    setBubbleContentText(response.result);
});
}