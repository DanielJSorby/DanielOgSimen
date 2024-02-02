window.addEventListener('click', function(e){   
  if (document.getElementById('play').contains(e.target)){
    var snd = new Audio("./Lyd/lamborghini_Huracan.mp3");
    snd.play()
  }
});



//     ________          __  __          __ 
//    / ____/ /_  ____ _/ /_/ /_  ____  / /_
//   / /   / __ \/ __ `/ __/ __ \/ __ \/ __/
//  / /___/ / / / /_/ / /_/ /_/ / /_/ / /_  
//  \____/_/ /_/\__,_/\__/_.___/\____/\__/  
                                      
// Chatbot

// sjekker hvis knappen med id chatbot-logo er trykket på
// hvis ja, så får chatbot id opcatity 100% og chatbot-logo id opacity 0%
const chatbot = document.getElementById('chatbot');
const chatbotLogo = document.getElementById('chatbot-logo');

document.getElementById('chatbot-logo').onclick = function() {
  chatbot.style.opacity = "100%";
  chatbot.style.zIndex = "1000";
  chatbotLogo.style.opacity = "0%";
  console.log("chatbot-logo er trykket på")
};

window.addEventListener('click', function(e){   
  if (chatbot.contains(e.target)|| chatbotLogo.contains(e.target)){
    // Clicked in box
  } else{
      // Clicked outside the box
      chatbot.style.opacity = "0%";
      chatbotLogo.style.opacity = "100%";
      chatbot.style.zIndex = "-1000";
      console.log("utenfor chatbot")
  }
});