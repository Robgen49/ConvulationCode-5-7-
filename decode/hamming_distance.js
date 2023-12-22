module.exports = (str1, str2) =>
    str1.reduce((acc, char, i) => char === str2[i] ? acc : ++acc, 0)