/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  return lengest(s)
};

function lengest(s) {
  let lengest = 0;
  for(let i = 0; i<=s.length; i++) {
    let string = s.slice(i);
    let newLen = lengthOfString(string)
    lengest = lengest > newLen ? lengest : newLen;
  }
  return lengest
}

function lengthOfString(str) {
  const array = []
  for(let i = 0; i<str.length; i++) {
    if(array.indexOf(str[i])==-1){
      array.push(str[i])
    } else {
      return array.length;
    }
  }
  return array.length
}

console.log(lengthOfLongestSubstring('abcbac123'))