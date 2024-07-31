// Your code goes here
const rapid = (text) => {
    let consonants = [];

    for(let letter of text.toLowerCase()) {
        if(['a','e','i','o','u'].includes(letter) == false)
            consonants.push(letter.toUpperCase())
    }
    return consonants.join('');
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
