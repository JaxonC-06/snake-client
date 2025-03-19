const {connect} = require("./client");
const {setupInput} = require("./input");

// Establish a connection to the server

const connection = connect();
setupInput(connection);