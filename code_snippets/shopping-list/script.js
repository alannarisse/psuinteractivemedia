$(document).ready(function () {
  $('#addBtn').click(function () {
    let input = $('#newItem').val()
    console.log(input)
    $('.shoplist').append(`<li>${input}</li>`)
    $('#newItem').val('')
  })
})
