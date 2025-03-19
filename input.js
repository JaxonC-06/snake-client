const {keyMap} = require("./constants");

// Create a connection variable
let connection;

// Set up a function that allows for user input
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Perform an action on specific user input
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (keyMap[key]) {
    connection.write(keyMap[key]);
  }
};

// Export the function
module.exports = {
  setupInput,
};