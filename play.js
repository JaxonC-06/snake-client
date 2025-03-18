const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to your game server.");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting...");
connect();