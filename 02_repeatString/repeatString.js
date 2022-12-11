const repeatString = function(string, num) {
    var repeated = '';
 while (num > 0){
    repeated += string;
    num--;
 }
 return repeated;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
