export default function (choice, content) {
    switch (choice) {
        case "summarizeContent":
            return summarizeContentPromtObject(summarizeContentPromtMessage(content));
        case "fixTypos":
            return fixTyposPromtObject(fixTyposPromtMessage(content));
        case "explainCode":
            return explainCodePromtObject(explainCodePromtMessage(content));
        case "checkInformation":
            return checkInformationPromtObject(checkInformationPromtMessage(content));
    }
}

function checkInformationPromtMessage(content) {
    return [{"role": "system", "content": "You are a information checker that checks whether the information is correct. Check the correctness of the information using the translated content into English. Return true if the information is correct, Return false and correct content if the information is incorrect."},
            /*{"role": "user", "content": "1111'de İstanbul fethedilmiştir."},
            {"role": "assistant", "content": "Hayır, bu bilgi yanlış. İstanbul 1453 yılında fethedilmiştir."},
            {"role": "user", "content": "1453'de İstanbul fethedilmiştir."},
            {"role": "assistant", "content": "Evet, bu bilgi doğru"},*/
            {"role": "user", "content": content}];
  }
  
  function summarizeContentPromtMessage(content){
    return [{"role": "system", "content": "You are a helpful assistant summarizing the content."},
    {"role": "user", "content": content}];
  }
  
  function explainCodePromtMessage(content){
    return [{"role": "system", "content": "You are a helpful assistant explaining the code."},
    {"role": "user", "content": content}];
  }
  
  function fixTyposPromtMessage(content){
    return [{"role": "system", "content": "You are a helpful assistant that corrects typos."},
    {"role": "user", "content": content}];
  }
  
  function checkInformationPromtObject(checkInformationPromtMessage){
    return {
        model: "gpt-3.5-turbo",
        messages: checkInformationPromtMessage,
        temperature: 0
    }
  }
  function summarizeContentPromtObject(summarizeContentPromtMessage){
    return {
        model: "gpt-3.5-turbo",
        messages: summarizeContentPromtMessage,
        temperature: 0
    }
  }
  function explainCodePromtObject(explainCodePromtMessage){
    return {
        model: "gpt-3.5-turbo",
        messages: explainCodePromtMessage,
        temperature: 0
    } 
  }
  function fixTyposPromtObject(fixTyposPromtMessage){
    return {
        model: "gpt-3.5-turbo",
        messages: fixTyposPromtMessage,
        temperature: 0
    }
  }