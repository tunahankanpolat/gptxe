function createIconButton(mouseX, mouseY) {
  const iconButton = document.createElement('div');
  iconButton.setAttribute('id', getIconButtonID());
  iconButton.style.position = 'absolute';
  iconButton.style.left = `${mouseX}px`;
  iconButton.style.top = `${mouseY}px`;  

  const icon = document.createElement('button');
  icon.setAttribute("id", getIconID());
  icon.classList.add(getIconID());
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
    return document.getElementById(getIconButtonID());
}

function isIconButtonAdded(){
    return document.getElementById(getIconButtonID()) != null ? true : false;
}

function getIconButtonID(){
    return "gptxe";
}

function getIconID(){
    return "gptxe-icon";
}