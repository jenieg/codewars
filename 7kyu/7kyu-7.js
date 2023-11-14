// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let lowerCase = str.toLowerCase();
    let letterSave = {};

    for (let letter in lowerCase) {
        if (letterSave[lowerCase[letter]]) {
            return false;
        }
        letterSave[lowerCase[letter]] = 1;
    }
    return true;
}