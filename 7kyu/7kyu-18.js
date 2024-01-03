// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.


function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const noGeese = [];

    for (let i = 0; i < birds.length; i++){
        if (!geese.includes(birds[i])) {
            noGeese.push(birds[i]);
        }
    }

    return noGeese;
}