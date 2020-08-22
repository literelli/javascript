// Old Ways
function streetOne() {
  console.log("Street One");
}

const streetTwo = function() {
  console.log("Street Two");
}

streetOne();
streetTwo();

// New Way
const streetThree = () => {
  console.log("Street Three")
}

streetThree();
