function createIconButton(mouseX, mouseY) {
  const iconButton = document.createElement('div');
  iconButton.setAttribute('id', ICON_BUTTON_ID);
  iconButton.style.position = 'absolute';
  iconButton.style.left = `${mouseX}px`;
  iconButton.style.top = `${mouseY}px`;  

  const icon = document.createElement('button');
  icon.setAttribute("id", ICON_ID);
  icon.classList.add(ICON_ID);
  iconButton.appendChild(icon);

  return iconButton;
}

function addIconButton(mouseX, mouseY){
  if(!isIconButtonAdded()){
    const iconButton = createIconButton(mouseX, mouseY);
    document.body.appendChild(iconButton);
    return iconButton;
  }else {
    return getIconButton();
  }
}

function removeIconButton(){
    if(isIconButtonAdded()){
        const iconButton = getIconButton();
        iconButton.remove();
    }
}

function getIconButton(){
    return document.getElementById(ICON_BUTTON_ID);
}

function isIconButtonAdded(){
    return document.getElementById(ICON_BUTTON_ID) != null ? true : false;
}