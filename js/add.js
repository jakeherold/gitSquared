function gitAdd(){
  $("#intro").css({"display": "none"});
  var $userInput = $("#gitAddInput").val();
  var $sorry     = $("#sorry");
  var $correct   = $("#correct");
  var $hint      = $("#addHint");
  if (isNaN($userInput)===true){
    if ($userInput==="git add TestFile.txt"){
      $sorry.css({"display": "none"});
      $hint.css({"display": "none"});
      $correct.css({"display": "block"});
    }
    else{
      $sorry.css({"display": "block"});
      $hint.css({"display": "none"});
      $correct.css({"display": "none"});
    }
  }
  else{
      $sorry.css({"display": "block"});
      $correct.css({"display": "none"});
      $hint.css({"display": "none"});
  }
}

function addHint(){
  $("#sorry").css({"display": "none"});
  $("#correct").css({"display": "none"});
  $("#addHint").css({"display": "block"});
}

$("#enterCommand").on("click", gitAdd);
$("#hintGitAdd").on("click",addHint);
