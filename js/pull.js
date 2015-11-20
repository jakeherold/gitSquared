
var pullObject = {

solidJob : function(){
 document.getElementById("L3GotIt").innerText = "Great job. You may continue on ahead!";
 L3GotIt.src = "assets/images/niceWork.gif";
},

reread : function(){
 document.getElementById("L3GotIt").innerText = "Please re-read this section beginning at the top. In order to understand git pull fully, you must have an understanding of how 'git fetch' and 'git merge' work!"
 L3GotIt.src = "assets/images/panic.gif"
}
}
