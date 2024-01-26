// sjekker hvis knappen med id chatbot-logo er trykket på
// hvis ja, så får chatbot id opcatity 100% og chatbot-logo id opacity 0%

document.getElementById('chatbot-logo').onclick = function() {
    document.getElementById("chatbot").style.opacity = "100%";
    document.getElementById("chatbot-logo").style.opacity = "0%";
    console.log("chatbot-logo er trykket på")
};

window.addEventListener('click', function(e){   
    if (document.getElementById('chatbot').contains(e.target)|| document.getElementById('chatbot-logo').contains(e.target)){
      // Clicked in box
    } else{
        // Clicked outside the box
        document.getElementById("chatbot").style.opacity = "0%";
        document.getElementById("chatbot-logo").style.opacity = "100%";
        console.log("utenfor chatbot")
    }
  });