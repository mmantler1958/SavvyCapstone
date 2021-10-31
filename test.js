function matchRuleExpl(str, rule) {
  // for this solution to work on any string, no matter what characters it has
  var escapeRegex = str => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/gi);

  // "."  => Find a single character, except newline or line terminator
  // ".*" => Matches any string that contains zero or more characters
  rule = rule
    .split("*")
    .map(escapeRegex)
    .join(".*");

  // "^"  => Matches any string with the following at the beginning of it
  // "$"  => Matches any string with that in front at the end of it
  rule = "^" + rule + "$";

  //Create a regular expression object for matching string
  var regex = new RegExp(rule);

  //Returns true if it finds a match, otherwise it returns false

  return regex.test(str);
}
let inputStr = "t*len*";
let compStr = "tylenol";

console.log(matchRuleExpl(compStr.toUpperCase(), inputStr.toUpperCase()));
