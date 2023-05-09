'use strict';

function getDogImage(dogNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
  //https://dog.ceo/api/breeds/image/random/3

    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  //replace the existing image with the new one
  $('.results').removeClass('hidden');
  $('.results-images').empty();
  for(let i = 0; i < responseJson.message.length; i++) {
    $('.results-images').append(
      `<img src="${responseJson.message[i]}" class="results-img">`
      )
  }

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogNum = $('#quantity').val()
    if(!dogNum) {
      dogNum = 3;
    }
    
    console.log(dogNum)
    getDogImage(dogNum);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});