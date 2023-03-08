$(document).ready(function () {
  $('.shoplist').append(`<li>${localStorage.getItem('todo')}</li>`)

  $('#addBtn').click(function () {
    let input = $('#newItem').val()
    console.log(input)
    localStorage.setItem('todo', `${input}`)

    $('.shoplist').append(`<li>${localStorage.getItem('todo')}</li>`)
    $('#newItem').val('')
  })
})
