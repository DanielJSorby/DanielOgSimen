window.addEventListener('click', function(e){   
  if (document.getElementById('play').contains(e.target)){
    var snd = new Audio("./Lyd/lamborghini_Huracan.mp3");
    snd.play()
  }
});
