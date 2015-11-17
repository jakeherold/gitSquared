function pushMod() {

  var lesson_4_input = document.getElementById('lesson_4_input').value;

  if ((isNaN(lesson_4_input)) && (lesson_4_input.toLowerCase() === "git push origin master")) {

    document.getElementById('modOutput').innerHTML = "correct! "+lesson_4_input+" was the correct git command.";

  if ((isNaN(lesson_4_input) == false)) {
    document.getElementById('modOutput').innerHTML = "please enter a git command, or use the hint";
  }

  } else {
    document.getElementById('modOutput').innerHTML = "Oops! "+lesson_4_input+" was not the correct git command. need a hint?";
  }
}

function pushHint () {
  document.getElementById('modOutput').innerHTML = "In the previous section you modified a file, added your changes to your staged commits, and commited the file to your <strong>local</strong> repository. Now you need to push these changes from your <strong>local</strong> repository to your <strong>remote</strong> repository. try using the push command, with the arguments origin (where you are locally) and the destination repository master (on github.com)."

}
