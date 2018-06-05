module.exports = function(str) {
  var formattedString = str.toLowerCase().replace(/[^a-z|0-9]/g, '');
  for (var i = 0; i < Math.floor(formattedString.length / 2); i++) {
    if (
      formattedString[i] !== formattedString[formattedString.length - 1 - i]
    ) {
      return false;
    }
  }
  return true;
};
