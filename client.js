const net = require("net");
const {IP, PORT} = require("./constants");

// Establisha  connection
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JDC");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

// Export the connect function
module.exports = {
  connect,
};