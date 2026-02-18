// test.js
console.log("Running tests...");

// Example unit test that does not depend on API key
function add(a, b) {
  return a + b;
}

if (add(2, 3) !== 5) {
  console.error("Test failed!");
  process.exit(1);
}

console.log("All tests passed!");
