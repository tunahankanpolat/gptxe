function createBubble(mouseX, mouseY, text) {
    const bubble = document.createElement('div');
    bubble.setAttribute('id', getBubbleID());
    bubble.style.position = 'absolute';
    bubble.style.left = `${mouseX}px`;
    bubble.style.top = `${mouseY}px`;  
  
    const content = document.createElement('div');
    content.setAttribute("id", getBubbleContentID());
    content.innerHTML = `<div class="load"></div>`;

    bubble.appendChild(content);

    return bubble;
  }

  function setBubbleContentText(text){
    getBubbleContent().innerHTML = `<p>${text}</p>`;
  }
  
  function addBubble(mouseX, mouseY, text){
    if(!isBubbleAdded()){
      const bubble = createBubble(mouseX, mouseY, text);
      document.body.appendChild(bubble);
      return bubble;
    }else {
      return getBubble();
    }
  }
  
  function removeBubble(){
      if(isBubbleAdded()){
          const bubble = getBubble();
          bubble.remove();
      }
  }
  
  function getBubble(){
      return document.getElementById(getBubbleID());
  }

  function getBubbleContent(){
    return document.getElementById(getBubbleContentID());
  }
  
  function isBubbleAdded(){
      return document.getElementById(getBubbleID()) != null ? true : false;
  }
  
  function getBubbleID(){
      return "gptxe-bubble";
  }
  
  function getBubbleContentID(){
      return "gptxe-content";
  }