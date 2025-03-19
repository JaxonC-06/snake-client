// The IP  address for the client is a constant
const IP = 'localhost';

// The PORT used to communicate is also a constant
const PORT = 50541;

// Each key is linked to a command that either logs input or a message to other users.
const keyMap = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  '1': "Say: Hey everyone!",
  '2': "Say: See you later!",
  '3': "Say: Oh, so close!",
  '4': "Say: LOL",
  '5': "Say: gotcha!"
};

// Export the constants
module.exports = {
  IP,
  PORT,
  keyMap,
};