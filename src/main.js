// import { weather } from './weather';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function() {
  $('#issueOutput').click(function() {
    let issue= $('#issue').val();
    $('#issue').val("");

    $.ajax({
      url:
      `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=2066f67a6ef0762a8ac45f20e50d011f`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

        for(let i = 0; i < response.data.length; i++){

          $('#showList').append(`<p>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p>`);


        }
      },
      error: function(request, status, error) {

        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });

    $('#doctorOutput').click(function() {
     let doctorName = $('#doctorName').val();
      $('#doctorName').val("");


    $.ajax({
      url:
      `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=2066f67a6ef0762a8ac45f20e50d011f`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

        for(let i = 0; i < response.data.length; i++){

          $('#showDetails').append(`<p>Doctor's name:${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p>
        <p>Address:${response.data[i].practices[0].visit_address.street},  ${response.data[i].practices[0].visit_address.city}</p>`,);


        }
      },
      error: function(request, status, error) {

        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
});
