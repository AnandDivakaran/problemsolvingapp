/*
Anagram - Take two strings as input to a function and return True if they are Anagram of one another.
*/

const anagramValidation = (string1, string2) => {
    string1 = string1 || '';
    string2 = string2 || '';

    if(string1.length != string2.length) {
        return false;
    }

    let characters = {};

    for (let ch in string1) {
        characters[string1[ch]] = characters[string1[ch]] ? ++characters[string1[ch]] : 1;
    }

    for (let ch in string2) {
        if(characters[string2[ch]]) {
            --characters[string2[ch]]
        } else {
            return false;
        }
    }
    return true;
};


module.exports = anagramValidation;


