function runProgram(input) {
  // Write code here
  let testCases = 3;
  let curr = 1;
  while (curr <= testCases) {
    let input = "{([])}";
    let s = [];

    for (let i = 0; i < input.length; i++) {
      let elem = input[i];

      if (elem === "{" || elem === "[" || elem === "(") s.push(elem);
      else {
        let poped = s.pop();
        console.log("Poped", poped);
        switch (elem) {
          case "]":
            console.log("iam here ]");
            if (poped !== "[") {
              console.log("not balanced");
              continue;
            }
            break;
          case ")":
            console.log("iam here )");
            if (poped !== "(") console.log("not balanced");
            break;
          case "}":
            console.log("iam here }");
            if (poped !== "{") console.log("not balanced");
            break;
        }
      }
    }

    if (s.length) console.log("not balanced");
    else console.log("balanced");

    curr++;
  }
}

runProgram();
