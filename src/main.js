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
      `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&user_key=2066f67a6ef0762a8ac45f20e50d011f&query=${issue}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

        for(let i = 0; i < response.data.length; i++){

          $('#showList').append(`A list of doctors that specialized in this medial issue are following ${response.data[i].profile.last_name}.`);


        }
      },
      error: function(request, status, error) {
    
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
