//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str){
    return str.split('').reverse().join('');  
}

//split('') takes the input string and puts the individual characters into an array.

//reverse() reverses the array ['H', 'e', 'l', 'l', 'o'], it would become ['o', 'l', 'l', 'e', 'H']

//join('') concatenates all the elements in the array back together into a single string