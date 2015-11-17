var terminalOpen = false;
var gitHubOpen = false;
var urlCopied = false;
var terminalRightPlace = false;
var gitCloneCommand = false;

var openTerminal = function (){
  if (terminalOpen === false){
    terminalOpen = true;
    document.getElementById("moduleOneOutput").innerHTML = "You open a terminal!";

  } else {
    document.getElementById("moduleOneOutput").innerHTML = "You already have a terminal open!";
  }
}
 var openGitHub = function(){
  if (gitHubOpen === false){
    gitHubOpen = true;
    document.getElementById("moduleOneOutput").innerHTML = "You open the internet!";
  } else {
    document.getElementById("moduleOneOutput").innerHTML = "You've already opened the internet!";
  }
 }

 var copyURL = function(){
  if ((gitHubOpen === true) && (urlCopied === false)){
    urlCopied = true;
    document.getElementById("moduleOneOutput").innerHTML = "You copy the URL";
  } else {
    document.getElementById("moduleOneOutput").innerHTML = "You've already copied the URL!";
  }
 }

var navigateTerminal = function (){
  if ((terminalRightPlace === false) && (terminalOpen === true)){
    terminalRightPlace = true;
    document.getElementById("moduleOneOutput").innerHTML = "Nice! you moved to where you want the file!";
  } else if (terminalOpen === false){
    document.getElementById("moduleOneOutput").innerHTML = "Try opening the terminal first!";
  }
  else {
    document.getElementById("moduleOneOutput").innerHTML = "I mean....you already went somewhere, but its cool that you changed your mind. ";
  }
}

var enterGitCloneCommand = function (){
  if ((terminalOpen === true) && (urlCopied === true) && (terminalRightPlace === true)){
     document.getElementById("moduleOneOutput").innerHTML = "Awesome! You got everything just right! You're now the pround owner of a local copy of your repository!";
  } else if ((terminalOpen === false) && (urlCopied === true) && (terminalRightPlace === true)){
     document.getElementById("moduleOneOutput").innerHTML = "Your terminal isn't open. Try doing that first.";
  } else if ((terminalOpen === true) && (urlCopied === true) && (terminalRightPlace === false)){
     document.getElementById("moduleOneOutput").innerHTML = "Your terminal is open, and you have your URL. But, you don't have your terminal navigated to where you want it. Try doing that first.";
  } else if ((terminalOpen === true) && (urlCopied === false) && (terminalRightPlace === true)){
     document.getElementById("moduleOneOutput").innerHTML = "You haven't gotten the URL for your repository yet. Go do that, and try again!";
  } else if ((terminalOpen === false) && (urlCopied === false) && (terminalRightPlace === false)){
     document.getElementById("moduleOneOutput").innerHTML = "You haven't done anything yet. Try opening the terminal, and getting the URL for your repository";
  }
  else {
    document.getElementById("moduleOneOutput").innerHTML = "Not ever the devs know whats going on anymore. Here there be dragons. Godspeed, foolish mortal.";
  }
}

var reset = function () {
  terminalOpen = false;
  gitHubOpen = false;
  urlCopied = false;
  terminalRightPlace = false;
  gitCloneCommand = false;
  document.getElementById("moduleOneOutput").innerHTML = "You behold your desktop. What do you do?";
}


