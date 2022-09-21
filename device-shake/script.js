$(document).ready(function () {
  function phoneShake() {
    $('#here').append('boo')
  }

  $.shake({
    callback: function () {
      phoneShake()
    }
  })
})

window.addEventListener('devicemotion', event => {
  alert('shakey')
})
