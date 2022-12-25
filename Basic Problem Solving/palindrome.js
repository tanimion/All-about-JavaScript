function palindrome(str) {
    const regEx = /[\W_]/g;
    const normalizedString = str.toLowerCase().replace(regEx, '');
    const reverseString = normalizedString.split("").reverse().join("");

    if (normalizedString === reverseString) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("race car"));