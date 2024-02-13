const longestPalindrome = function (A) {
  let max = 0;
  let maxString = "";

  for (let i = 0; i < A.length; i++) {
    console.log("i", i);
    for (let j = i; j < A.length; j++) {
      console.log("j", j);
      let sub = A.substring(i, j);
      console.log("Sub", sub, isPallendrome(sub));
      if (isPallendrome(sub)) {
        max = Math.max(max, sub.length);
        console.log("Max length", sub);
        maxString = sub;
      }
    }
  }

  return maxString;
};

const isPallendrome = function (str) {
  let start = 0;
  let end = str.length;

  if (start.length === 1) return false;

  console.log("Start", start, "end", end);

  while (start !== end && start <= start.length - 1 && end > 0) {
    console.log("Start", start, "end", end);
    if (str[start] !== str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
};

console.log(longestPalindrome("abb"));
