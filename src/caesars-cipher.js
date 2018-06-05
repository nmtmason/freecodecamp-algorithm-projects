module.exports = function(str) {
  var codes = str.split('').map(function(x) {
    var code = x.charCodeAt(0);
    // Give back the code unaltered if it's not an alphabet letter
    if (!/[A-Z]/.test(x)) {
      return code;
    }
    // Pivot around the 'N' (code 78) letter
    if (code < 78) {
      return code + 13;
    }
    return code - 13;
  });
  return codes
    .map(function(x) {
      return String.fromCharCode(x);
    })
    .join('');
};
