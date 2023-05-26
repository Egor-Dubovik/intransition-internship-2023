import readline from "readline";
import CryptoUtils from "./CryptoUtils";
import GameTable from "./GameTable";
import Rules from "./Rules";

class Game {
  private moves: string[];
  private rules: Rules;
  private key: string;
  private computerMove: number;

  constructor(moves: string[]) {
    this.moves = moves;
    this.rules = new Rules(moves);
    this.key = CryptoUtils.generateRandomKey(256);
    this.computerMove = Math.floor(Math.random() * moves.length) + 1;
  }

  run(): void {
    console.log(
      `HMAC: ${CryptoUtils.computeHMAC(this.rules.getMoveName(this.computerMove), this.key)}`
    );
    console.log("Available moves:");
    this.displayMenu();

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter your move: ", (input: string) => {
      if (!this.rules.isValidMove(input)) {
        console.log('Invalid move. Please enter a valid move or "?" for help.');
        rl.close();
        return;
      }

      if (input === "?") {
        const table = new GameTable(this.moves);
        table.generateTable();
        rl.close();
        return;
      }

      const playerMove = parseInt(input, 10);
      const playerMoveName = this.rules.getMoveName(playerMove);

      console.log(`Your move: ${playerMoveName}`);
      console.log(`Computer move: ${this.rules.getMoveName(this.computerMove)}`);

      if (playerMove === 0) {
        console.log("Game exited.");
      } else if (playerMove === this.computerMove) {
        console.log("Draw!");
      } else if (this.rules.isWin(playerMove, this.computerMove)) {
        console.log("You win!");
      } else {
        console.log("You lose!");
      }

      console.log(`HMAC key: ${this.key}`);
      rl.close();
    });
  }

  private displayMenu(): void {
    const { moves } = this;
    for (let i = 0; i < moves.length; i++) {
      console.log(`${i + 1} - ${moves[i]}`);
    }
    console.log("0 - exit");
    console.log("? - help");
  }
}

export default Game;
