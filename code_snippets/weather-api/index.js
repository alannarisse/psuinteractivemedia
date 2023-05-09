/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getBreweries, displayResults, and watchSubmit functions. When you're done, this app should allow a user to search for a state, and display a list of breweries in that state. The list should include the brewery's name and a link to their website. You should make requests to this API: https://www.openbrewerydb.org/ . Make any necessary adjustments to make this app accessible. */

'use strict';

function getWeather(zip) {
  //find url, make request
 const url = 'https://api.openweathermap.org/data/2.5/weather';
  const weatherAPIKey = 'daf3f4682cbcdbee78e84ef4b6756723'

  fetch(url)
    .then(response => {
    if(response.ok) {
      console.log(response);
      return response.json();
    }
  }).then(responseJson =>
    displayResults(responseJson))
}

function displayResults(responseJson) {
  //clear previous results 
  $('.js-breweries').empty();
  //add new results
  console.log(responseJson[0].website_url)
  for (let i = 0; i < responseJson.length; i ++) {
  $('.js-weather').append(`<li><a href="${responseJson.website_url}">${responseJson[i].name}</a></li>`
  )}
}

function watchForm() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const zip = $('#js-query-zip').val();
  getWeather(zip);
  })
}

$(watchForm);