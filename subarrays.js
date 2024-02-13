const sqrt = function (A) {
  if (A == 0) return 0;

  let start = 0,
    end = A;
  let ans;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    console.log("Mid", mid, "start", start, "end", end);

    if (mid <= Math.floor(A / mid)) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;
};
console.log(sqrt(653819294));
console.log(sqrt(6));
console.log(sqrt(2));
console.log(sqrt(3));
