module.exports = function(str) {
  let regex = /^(1\s?)?((\(\d\d\d\))|(\d\d\d))[\s-]?(\d\d\d)[\s-]?(\d\d\d\d)$/;
  return regex.test(str);
};
