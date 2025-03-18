let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const keyMap = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (keyMap[key]) {
    connection.write(keyMap[key]);
  }
};

module.exports = {
  setupInput,
};