const menuOptions = [
  { label: 'Summarize Content', id: 'summarizeContent' },
  { label: 'Fix Typos', id: 'fixTypos' },
  { label: 'Explain Code', id: 'explainCode' },
  { label: 'Check Information', id: 'checkInformation' },
];

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
  return document.getElementById(getMenuID());
}

function createMenu(mouseX, mouseY, func){
  const menu = document.createElement('div');

  menu.setAttribute("id", getMenuID());

  for(let i = 0; i < menuOptions.length; i++) {
    createButton(menu, menuOptions[i], func);
  }

  menu.style.position = "absolute";
  menu.style.left = `${mouseX}px`;
  menu.style.top = `${mouseY}px`; 
  return menu;
}

function createButton(menu, option, func){
  const newRow = document.createElement('div');
  newRow.classList.add(getRowClass());
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

function getMenuID(){
  return "gptxe-menu";
}

function getRowClass(){
  return "gptxe-menu-row";
}

function getButton(option){
  return `
    <button id="${option.id}" class="gptxe-btn">${option.label}</button>
  `;
}