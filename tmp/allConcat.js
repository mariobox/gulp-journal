// Create a journaling website where a user can write entries including at least a title and body. 
// Create Entry objects that include a method to return the number of words in the entry. 
// Then, add a separate method (or methods) to return the number of vowels and consonants in each entry. 
// Call each of these methods from your front-end file to display their return values. 
// Finally, add a method called getTeaser to return the first sentence of the entry. 
// If the sentence is over 8 words, only display those first 8 words. 
// Be sure to call this method from your front-end file to display the results as well, whenever a new journal entry is created.
var Entry = require('./../js/journal-objects.js').entryModule;

$('#flashMessage').hide()

$('#previewButton').click(function() {
  const title = $("#blogTitleInput").val();
  const content = $("#blogContentInput").val();
  blogPost = new Entry(title, content);
  $("#blogTitlePreview").text(title);
  $('#wordCount').show().text(`${blogPost.countWords()} words `);
  $('#vowelCount').show().text(`${blogPost.countVowels()} vowels `);
  $('#consonantCount').show().text(`${blogPost.countConsonants()} consonants`);  
  $("#blogContentPreview").text(`${blogPost.getFirstSentence()}..`);
  $('#blogContentPreview').click(function() {
    $(this).text(blogPost.post);
  });

  $("#flashMessage")
    .slideDown(1000)
    .delay(3000)
    .slideUp();
});

$(document).ready(function(){
    $('#signup').submit(function(event){
      event.preventDefault();
      var email = $('#email').val();
      $('#signup').hide();
      $('#confirmMessage').append('<p>Thank you, ' + email + ' has been added to our list!</p>');
    });
  });