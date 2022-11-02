;(function () {
  var words = $('.rotate')
  var wordIndex = -1
  words.hide()

  function showNextWord() {
    ++wordIndex
    words
      .eq(wordIndex % words.length)
      .fadeIn(400)
      .delay(2500)
      .fadeOut(400, showNextWord)
  }

  showNextWord()
})()
