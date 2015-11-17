function pushMod() {

  var lesson_4_input = document.getElementById('lesson_4_input').value;

    if ((lesson_4_input.length > 4 ) && (isNaN(lesson_4_input))) {

      document.getElementById('modOutput').innerHTML = lesson_4_input;
    }
    else {
     console.log('woops')
    }
  }
