// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let xS = 0
    let oS = 0
    let other = 0

    let sortArr = str.toLowerCase().split('')

    sortArr.forEach(l=> {
        if (l === 'x') {
            xS++
        } else if (l === 'o') {
            oS++
        } else {
            other++
        }
    })

    if (xS === oS) {
        return true
    } else {
        return false
    }
}