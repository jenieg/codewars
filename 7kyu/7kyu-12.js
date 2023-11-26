// For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    return  this.split(' ')
            .map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
};