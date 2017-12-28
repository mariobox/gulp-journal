(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class Entry {
    constructor(title, post) {
        this.title = title;
        this.post = post;
    }

    countWords() {
        const postArray = $.trim($('#blogContentInput').val()).split(" ");
        console.log(postArray);
        const numberOfWords = postArray.length;
        return numberOfWords;
    }

    countVowels() {

        var vowelList = 'aeiouAEIOU';
        var vCount = 0;

        for (let x = 0; x < this.post.length; x++) {
            if (vowelList.indexOf(this.post[x]) !== -1) {
                vCount += 1;
            }

        }
        return vCount;
    }

    countConsonants() {

        var consList = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
        var cCount = 0;

        for (let x = 0; x < this.post.length; x++) {
            if (consList.indexOf(this.post[x]) !== -1) {
                cCount += 1;
            }

        }
        return cCount;
    }


    getFirstSentence() {
        // get portion of post until the first period.
        const firstDotIndex = this.post.indexOf('.');
        const postLength = this.post.length;
        let postCut = this.post.slice(0, -postLength + firstDotIndex);
        console.log(postCut);
        // if the number of words is greater than 8, grab only the first 8 words
        const postCutArray = postCut.split(" ");
        if (postCutArray.length < 9) {
            return postCut;
        }
        else {
            const eightWordArray = postCutArray.slice(0, 8).join(" ");
            postCut = eightWordArray;
            return postCut;
        }
        // store the result in a variable called teaserSentence
        // include three dots ... at the end of the sentence
        // return teaserSentence
    }
}

exports.entryModule = Entry;
},{}],2:[function(require,module,exports){
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
},{"./../js/journal-objects.js":1}]},{},[2]);
