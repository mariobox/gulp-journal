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