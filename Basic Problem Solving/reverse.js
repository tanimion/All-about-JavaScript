// My reverse function
function reverseWord(str) {
    let reverseString = "";
    let lastIndex = str.length - 1;
    for (let i = lastIndex; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}
console.log(reverseWord("Hello"));

// Built-in string reverse method
let stringWord = "Hello";
let reverseStringWord = stringWord.split("").reverse().join("");
console.log(reverseStringWord);

// Number reverse
function reverseInt(num) {
    let reverseNumber = num.toString().split("").reverse().join("");
    if (reverseNumber.endsWith("-")) {
        reverseNumber = "-" + reverseNumber.slice(0, reverseNumber.length - 1);
        reverseNumber = Number(reverseNumber);
    }
    console.log(reverseNumber);
}

reverseInt(-90);
reverseInt(981);


// Learning lesson:
// split() method devide a string into a single character and push them one by one into an array as a single string. Here we have to put "" (double quote) as a parameter.
// reverse() method reverse that array which is splited.
// join() method add the character one by one based on given parameter like " ", "," but by default add by comma(,).