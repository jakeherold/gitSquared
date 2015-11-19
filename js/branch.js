$(".intro:not(#intro1)").css({"display": "none"});
$(".messageBranch").css({"display": "none"});
$(".feedbackIllustration").css({"display": "none"});
$("#master").css({"display": "block"});
counter = 1;
function branchTest(){
  var $message = $(".messageBranch");
  var $correct = $("#correctBranch");
  var $sorry = $("#sorryBranch");
  var intro = "";
  var $numIntro = $(".intro");
  var $userInput = $("#gitBranchInput").val();
  //Responsive diagram variables declared
  var $illustration = $(".feedbackIllustration");
  var $master = $("#master");
  var $css = $("#css");
  var $mistake = $("#mistake");
  var $terminal = $("#terminal");
  var $backMaster = $("#backMaster");
  var $deleteMistake = $("#deleteMistake");
  switch (counter){
    case 2:
      if ($userInput=="git checkout -b mistake_branch" ){
        counter++;
        console.log("counter is now: "+counter);
        $message.css({"display": "none"});
        $correct.css({"display": "block"});
        intro = intro.concat("#intro",counter);
        console.log("intro value after concat is: "+intro);
        $numIntro.css({"display": "none"});
        $(intro).css({"display": "block"});
        intro = "";
        $illustration.css({"display": "none"});
        $mistake.css({"display": "block"});
      }
      else{
        $message.css({"display": "none"});
        $sorry.css({"display": "block"});
      }
      break;
    case 3:
      if ($userInput=="git branch" ){
        counter++;
        console.log("counter is now: "+counter);
        $message.css({"display": "none"});
        $correct.css({"display": "block"});
        console.log("counter input is: "+counter);
        intro = intro.concat("#intro",counter);
        $numIntro.css({"display": "none"});
        $(intro).css({"display": "block"});
        intro = "";
        $illustration.css({"display": "none"});
        $terminal.css({"display": "block"});
      }
      else{
        $message.css({"display": "none"});
        $sorry.css({"display": "block"});
      }
      break;
    case 4:
      if ($userInput=="git checkout master"){
        counter++;
        console.log("counter is now: "+counter);
        $message.css({"display": "none"});
        $correct.css({"display": "block"});
        console.log("counter input is: "+counter);
        intro = intro.concat("#intro",counter);
        $numIntro.css({"display": "none"});
        $(intro).css({"display": "block"});
        intro = "";
        $illustration.css({"display": "none"});
        $illustration.css({"display": "none"});
        $backMaster.css({"display": "block"});
      }
      else{
        $message.css({"display": "none"});
        $sorry.css({"display": "block"});
      }
      break;
    case 5:
      if ($userInput=="git branch -d mistake_branch" || $userInput=="git branch -D mistake_branch" ){
        counter++;
        console.log("counter is now: "+counter);
        $message.css({"display": "none"});
        $correct.css({"display": "block"});
        intro = intro.concat("#intro",counter);
        $numIntro.css({"display": "none"});
        $(intro).css({"display": "block"});
        intro = "";
        $illustration.css({"display": "none"});
        $deleteMistake.css({"display": "block"});
      }
      else{
        $message.css({"display": "none"});
        $sorry.css({"display": "block"});
      }
      break;
    case 6:
      counter++;
      intro = intro.concat("#intro",counter);
      $numIntro.css({"display": "none"});
      $(intro).css({"display": "block"});
      intro = "";
      break;
    default:
      break;
  }
  if (counter===1){
    if ($userInput=="git branch css" ){
      $(".intro").css({"display": "none"});
      $("#intro2").css({"display": "block"});
      counter++;
      console.log("counter is now: "+counter);
      $message.css({"display": "none"});
      $correct.css({"display": "block"});
      $illustration.css({"display": "none"});
      $css.css({"display": "block"});
    }
    else{
      $message.css({"display": "none"});
      $sorry.css({"display": "block"});
    }
  }
  console.log("reached end of function.");
  if (counter > $numIntro.length){
    console.log("reached end of function. Restarting counter");
    counter = 1;
    console.log("counter is now: "+counter);
    $message.css({"display": "none"});
    $(".intro").css({"display": "none"});
    $("#intro1").css({"display": "block"});
    $illustration.css({"display": "none"});
    $master.css({"display": "block"});
  }
}

function hint(){
  $(".commandDiv").hide().fadeIn(500);
}

$("#enterCommand").on("click",branchTest);
$("#hintGitBranch").on("click",hint);
