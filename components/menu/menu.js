function addMenu(mouseX, mouseY, func){
  if(!isMenuAdded()){
    const menu = createMenu(mouseX, mouseY, func);
    document.body.appendChild(menu);
    return menu;
  }
}

function removeMenu(){
  if(isMenuAdded()){
    const menu = getMenu();
    menu.remove();
  }
}

function isMenuAdded(){
  return getMenu() != null ? true : false;
}

function getMenu(){
  return document.getElementById(MENU_ID);
}

function createMenu(mouseX, mouseY, func){
  const menu = document.createElement('div');

  menu.setAttribute("id", MENU_ID);

  for(let i = 0; i < MENU_OPTIONS.length; i++) {
    createButton(menu, MENU_OPTIONS[i], func);
  }

  menu.style.position = "absolute";
  menu.style.left = `${mouseX}px`;
  menu.style.top = `${mouseY}px`; 
  return menu;
}

function createButton(menu, option, func){
  const newRow = document.createElement('div');
  newRow.classList.add(MENU_ROW_CLASS);
  newRow.innerHTML = getButton(option);
  menu.appendChild(newRow);

  createButtonListener(menu, option, func);
}

function createButtonListener(menu, option, func){
  const button = menu.querySelector(`#${option.id}`);
  button.addEventListener('click', (event) => {
    func(event.target.id);
  });
}

function getButton(option){
  return `
    <button id="${option.id}" class="${MENU_BUTTON_CLASS}">${option.label}</button>
  `;
}