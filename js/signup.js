$(document).ready(function(){
    $('#signup').submit(function(event){
      event.preventDefault();
      var email = $('#email').val();
      $('#signup').hide();
      $('#confirmMessage').append('<p>Thank you, ' + email + ' has been added to our list!</p>');
    });
  });