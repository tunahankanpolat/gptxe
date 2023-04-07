const iconButtonStyles = {
  class: 'icon-button',
  position: 'absolute',
  imgClass: 'img-icon',
  height: '100%',
}

const menuStyles = {
  class: 'menu',
  position: 'absolute',
  height: '100%',
  background: 'gray'
}

const menuItemsStyles = {
  class: 'menu-items',
}

const menuOptions = [
  { label: 'Summarize Content', choice: 'summarizeContent' },
  { label: 'Fix Typos', choice: 'fixTypos' },
  { label: 'Explain Code', choice: 'explainCode' },
  { label: 'Check Information', choice: 'checkInformation' },
];

let isSelectionActive = false;
document.addEventListener("mouseup", (event) => {
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
      isSelectionActive = true;
      if(!getIconButton())
        createIconButton(event);
    }else{
      isSelectionActive = false;
      removeIconButton();
      //removeMenu();
    }
});


function sendMessage(content, choice){
  console.log("sendMessage run")
  chrome.runtime.sendMessage({ type: "connectAPI",selectedText: content, operationChoice: choice },(response) =>{
    removeMenuItems();
    displayResponse(response.result);
  console.log(response.result);
});
}

function displayResponse(response){
  let menu = getMenu();
  console.log(menu);
  menu.innerHTML = response;
}

function createMenu(event){
  console.log("createMenu");
  const selection = window.getSelection();
  //console.log(selection.toString());
  const range = selection.getRangeAt(0);
  const { left, top, height } = range.getBoundingClientRect();
  const selectedText = selection.toString();
  // Mouse pozisyonunu almak
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const menu = document.createElement('div');
  menu.style.position = menuStyles.position;
  menu.style.left = `${mouseX}px`;
  menu.style.top = `${top + height}px`;  
  menu.style.backgroundColor = menuStyles.background;
  menu.classList.add('menu');
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');

  menu.appendChild(menuItems);
  menuOptions.forEach((option) => {
    console.log(option);
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.textContent = option.label;

    menuItem.addEventListener('click', () => {
      console.log(selectedText);
      sendMessage(selectedText, option.choice);
    });

    menuItems.appendChild(menuItem);
  });
  document.body.appendChild(menu);
}

function getMenuItems(){
  return document.querySelector("."+menuItemsStyles.class);
}

function removeMenuItems(){
  let menuItems = getMenuItems();
  console.log(menuItems);
  if(menuItems)
    menuItems.remove();
  console.log(menuItems);
}

function getMenu(){
  return document.querySelector("."+menuStyles.class);
}

function removeMenu(){
  let menu = getMenu();
  if(menu)
    menu.remove();
}



//----------------------Icon Button-------------------------------------
function createIconButton(event) {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const { left, top, height } = range.getBoundingClientRect();

  // Mouse pozisyonunu almak
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const iconButton = document.createElement('button');
  iconButton.classList.add(iconButtonStyles.class);
  iconButton.style.position = iconButtonStyles.position;
  iconButton.style.left = `${mouseX}px`;
  iconButton.style.top = `${top + height}px`;  


  const iconImg = document.createElement('img');
  iconImg.classList.add(iconButtonStyles.class);
  iconButton.appendChild(iconImg);

  iconButton.addEventListener('click', () => {
    if (!isSelectionActive) {
      return;
    }
    if (!getMenu()) {
      createMenu(event);
      removeIconButton();
    }
  });

  document.body.appendChild(iconButton);
  console.log(iconButton);
}

function getIconButton(){
  return document.querySelector("."+iconButtonStyles.class);
}

function removeIconButton(){
  let iconButton = getIconButton();
  if(iconButton)
    iconButton.remove();
}

