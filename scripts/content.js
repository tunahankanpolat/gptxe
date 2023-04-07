let isSelectionActive = false;
document.addEventListener("mouseup", (event) => {
    let selectedText = window.getSelection().toString();
    const existingButton = document.querySelector('.my-icon-button');
    if (selectedText.length > 0 && !existingButton) {
      isSelectionActive = true;
      showIconButton(event);
    }else{
      isSelectionActive = false;
      existingButton.remove();
    }
});

document.addEventListener("selectionchange", () => {
  if (isSelectionActive) {
    let selectedText = window.getSelection().toString();
    if (selectedText.length === 0) {
      isSelectionActive = false;
      removeIconButton();
    }
  }
});

function showIconButton(event) {
  // Seçili text'in koordinatlarını almak
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const { left, top, height } = range.getBoundingClientRect();

  // Mouse pozisyonunu almak
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Icon butonunu oluşturmak
  iconButton = document.createElement('button');
  iconButton.classList.add('my-icon-button');
  iconButton.innerHTML = '<i class="fas fa-icon"></i>';
  iconButton.style.position = 'absolute';
  iconButton.style.left = `${mouseX}px`;
  iconButton.style.top = `${top + height}px`;
  iconButton.addEventListener('click', () => {
    iconButton.remove();
    sendMessage(selection.toString(), "summarizeContent");
  });
  // Icon butonunu eklemek
  document.body.appendChild(iconButton);
}

function sendMessage(content, choice){
  chrome.runtime.sendMessage({ type: "connectAPI",selectedText: content, operationChoice: choice },(response) =>{
    console.log(response.result);
  });
}

function getIcon(){
  return document.querySelector('.my-icon-button');
}

function removeIcon(){
  getIcon().remove();
}

function createIcon(){
  iconButton = document.createElement('button');
  iconButton.classList.add('my-icon-button');
  iconButton.innerHTML = '<i class="fas fa-icon"></i>';
  iconButton.style.position = 'absolute';
  iconButton.style.left = `${mouseX}px`;
  iconButton.style.top = `${top + height}px`;
}

/*async function sendMessage(message) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        console.log("sa");
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
}*/