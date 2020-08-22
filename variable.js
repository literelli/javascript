// Var
var message1 = "Var";
var message2;

// Let
let message3 = "Let";
let message4;

// Const
const message5 = "Const"
// const message6;

// Not Declared
message7 = "Empty Variable";
// message8;

if (true) {
  var message1 = "Change Var In Scope";
  let message3 = "Change Let In Scope";
  const message5 = "Change Const In Scope";
  // message5 = "Change Const In Scope";

  console.log(message1);
  console.log(message2);
  console.log(message3);
  console.log(message4);
  console.log(message5);
  // console.log(message6);
  console.log(message7);
  // console.log(message8);
}

// const message5 = "Change Const";
// message5 = "Change Const";

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
// console.log(message6);
console.log(message7);
// console.log(message8);
