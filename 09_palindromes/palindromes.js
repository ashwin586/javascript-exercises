const palindromes = function (str) {
    var strSplit = str.split("");
    var strReverse = strSplit.reverse();
    var strJoin = strReverse.join("");
    return strJoin;
};

// Do not edit below this line
module.exports = palindromes;
