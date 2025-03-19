# Snake Client Project

The Snake game is a very simple, yet popular video game. It is a video game concept where the player maneuvers a small 'snake' and it grows by eating pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow the snake as big as possible without it bumping into the side walls or itself, upon which it dies.

This game is simply a multiplayer take on the genre.

BEFORE you can run the client, you will need to run the server side which can be downloaded and installed from [here](https://github.com/lighthouse-labs/snek-multiplayer).

## Final Product

!["Screen once player is connected"](<Snake Client Startup.png>)
!["Demonstration of snake game"]<video controls src="Snake Demo.mp4" title="Title"></video>

## Getting Started

- Follow steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to run the server side
- Run the development snake client using the `node play.js` command.

## Commands

Currently, the game accepts the following functional inputs:

- **W**: Move up
- **A**: Move left
- **S**: Move down
- **D**: Move right
- **ctrl + c**: Quit game

The following inputs allow for multiplayer interaction:

- **1**: Say "Hey everyone!"
- **2**: Say "See you later!"
- **3**: Say "Oh, so close!"
- **4**: Say "LOL"
- **5**: Say "Gotcha!"

## Current Bugs/Issues

- Upon death, if a command other than `ctrl + c` is input, the client side will display an 'EPIPE' error and the server will close the socket
- Snake movement could be smoother. At the moment, the snake requires you to **hold** the directional key for movement. It would be better if the directional key moved the snake in a continuous direction until another directional key was clicked.