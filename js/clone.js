var terminalOpen = false;
var gitHubOpen = false;
var urlCopied = false;
var terminalRightPlace = false;
var gitCloneCommand = false;
var moduleOneComplete = false;
moduleOnePicture.src = "assets/images/desktop.png";

var cloneMethods = {
  openTerminal: function (){
  if (terminalOpen === false){
    terminalOpen = true;
    document.getElementById("moduleOneOutput").innerHTML = "You open a terminal!";
    moduleOnePicture.src = "assets/images/openTerminal.png";
  } else {
    document.getElementById("moduleOneOutput").innerHTML = "You already have a terminal open!";
  }
},

 openGitHub: function(){
  if (gitHubOpen === false){
    gitHubOpen = true;
    document.getElementById("moduleOneOutput").innerHTML = "You open the internet!";
    moduleOnePicture.src = "assets/images/openGitHub.png";
  } else {
    document.getElementById("moduleOneOutput").innerHTML = "You've already opened the internet!";
  }
 },

 copyURL: function(){
  if ((gitHubOpen === true) && (urlCopied === false)){
    urlCopied = true;
    document.getElementById("moduleOneOutput").innerHTML = "You copy the URL";
    moduleOnePicture.src = "assets/images/copyURL.png";
  } else if ((gitHubOpen=== false) && (urlCopied === false)){
    document.getElementById("moduleOneOutput").innerHTML = "Open GitHub first";
  } else if (urlCopied=== true){
    document.getElementById("moduleOneOutput").innerHTML = "You've already copied the URL!";
  }
 },

navigateTerminal: function (){
  if ((terminalRightPlace === false) && (terminalOpen === true)){
    terminalRightPlace = true;
    document.getElementById("moduleOneOutput").innerHTML = "Nice! you moved to where you want the file!";
    moduleOnePicture.src = "assets/images/navigateTerminal.png";
  } else if (terminalOpen === false){
    document.getElementById("moduleOneOutput").innerHTML = "Try opening the terminal first!";
  }
  else {
    document.getElementById("moduleOneOutput").innerHTML = "I mean....you already went somewhere, but its cool that you changed your mind. ";
  }
},

enterGitCloneCommand: function (){
  if ((terminalOpen === true) && (urlCopied === true) && (terminalRightPlace === true)){
     document.getElementById("moduleOneOutput").innerHTML = "Awesome! You got everything just right! You're now the pround owner of a local copy of your repository!";
     moduleOnePicture.src = "assets/images/typeGitClone.png";
     moduleOneComplete = true;
  } else if ((terminalOpen === true) && (urlCopied === false) && (terminalRightPlace === false)){
     document.getElementById("moduleOneOutput").innerHTML = "Your terminal is open. Now get your URL and pick where to put the file";
  } else if ((terminalOpen === true) && (urlCopied === true) && (terminalRightPlace === false)){
     document.getElementById("moduleOneOutput").innerHTML = "Your terminal is open, and you have your URL. But, you don't have your terminal navigated to where you want it. Try doing that first.";
  } else if ((terminalOpen === true) && (urlCopied === false) && (terminalRightPlace === true)){
     document.getElementById("moduleOneOutput").innerHTML = "You haven't gotten the URL for your repository yet. Go do that, and try again!";
  } else if ((terminalOpen === false) && (urlCopied === false) && (terminalRightPlace === false)){
     document.getElementById("moduleOneOutput").innerHTML = "You haven't done anything yet. Try opening the terminal, and getting the URL for your repository";
  }else if ((terminalOpen === false) && (urlCopied === true) && (terminalRightPlace === false)){
     document.getElementById("moduleOneOutput").innerHTML = "You haven't opened the terminal, yet. Do that first. ";
  }
  else {
    document.getElementById("moduleOneOutput").innerHTML = "Not ever the devs know whats going on or how you got here. Here there be dragons. Godspeed, foolish mortal.";
  }
},

reset: function () {
  terminalOpen = false;
  gitHubOpen = false;
  urlCopied = false;
  terminalRightPlace = false;
  gitCloneCommand = false;
  document.getElementById("moduleOneOutput").innerHTML = "You behold your desktop. What do you do?";
  moduleOnePicture.src = "assets/images/desktop.png";
}

}
