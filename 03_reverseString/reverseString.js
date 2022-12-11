const reverseString = function(str) {
    var strSplit = str.split("");
    var strReverse = strSplit.reverse();
    var strJoin = strReverse.join("");
    return strJoin;
};

reverseString("hello");
reverseString("hello there")
reverseString("123! abc!")
reverseString('')

// Do not edit below this line
module.exports = reverseString;
