// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    s.sort()
    let firstString = s[0]
    let result = firstString.split('').join('***')
    return result
}

//
// Examples from Solutions
//

function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

twoSort = s => s.sort()[0].split('').join('***')