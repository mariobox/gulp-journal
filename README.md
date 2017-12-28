# gulp-journal

Journaling application made with Gulp and jQuery. This is a practice project at Epicodus code school.

## Specs

* Create a journaling website where a user can write entries including at least a title and body. 
* Create Entry objects that include a method to return the number of words in the entry.
* Then, add a separate method (or methods) to return the number of vowels and consonants in each entry.
* Call each of these methods from your front-end file to display their return values.
* Finally, add a method to return the first sentence of the entry (if the sentence is over 8 words, only display a teaser sentence made of the first 8 words). 
* Call all methods from your front-end file to display the results as well, whenever a new journal entry is created.

Some specs I added to make the project better:

* Add a "subscribe to update" form and display a confirmation message once the user submits their information (I did this to have two input forms, one for the journal entry and one for the subscription, each with its own javascript interface, so that I can demonstrate Gulp's concat task).
* Add a feature to display the full post when the user clicks on the teaser sentence.

## Objective

To demonstrate different tasks you can accomplish with Gulp:
* Concatenate
* Minify
* Clean
* Build

To understand the difference between the development environment and the production environment.

To understand the advantages of using Gulp in large sites, by working on a smaller-scale, simpler application.
