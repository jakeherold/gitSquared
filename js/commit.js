function gitCommit(){
  $("#introCommit").css({"display": "none"});
  var $userInput = $("#gitCommitInput").val();
  var $sorry     = $("#sorryCommit");
  var $correct   = $("#correctCommit");
  var $hint      = $("#commitHint");
  var $Input = $userInput.substring(0,13);
  console.log("substring is: "+$Input);
  var $msg = $userInput.substring(15, $userInput.length-1).split();
  console.log("$msg is: "+$msg);

  if (isNaN($userInput)===true && $msg[0].length > 3 && $Input=="git commit -m"){
    $correct.css({"display": "block"});
    $sorry.css({"display": "none"});
    $hint.css({"display": "none"});
    }
  else{
    $sorry.css({"display": "block"});
    $correct.css({"display": "none"});
    $hint.css({"display": "none"});
  }

}

function commitHint(){
  $("#sorryCommit").css({"display": "none"});
  $("#correctCommit").css({"display": "none"});
  $("#commitHint").css({"display": "block"});
}

$("#enterCommit").on("click", gitCommit);
$("#hintGitCommit").on("click", commitHint);
