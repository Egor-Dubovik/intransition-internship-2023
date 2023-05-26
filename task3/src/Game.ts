import CryptoUtils from "./CryptoUtils";
import GameTable from "./GameTable";
import Rules from "./Rules";
import GameInterface from "./GameInterface";

class Game {
  private moves: string[];
  private rules: Rules;
  private key: string;
  private computerMove: number;
  private gameInterface: GameInterface;

  constructor(moves: string[]) {
    this.moves = moves;
    this.rules = new Rules(moves);
    this.key = CryptoUtils.generateRandomKey();
    this.computerMove = Math.floor(Math.random() * moves.length) + 1;
    this.gameInterface = new GameInterface(moves);
  }

  displayGameTable(): void {
    const table = new GameTable(this.moves);
    table.generateTable();
  }

  displayGameResult(playerMove: number, playerMoveName: string): void {
    if (playerMove === this.computerMove) {
      console.log("Draw!");
      return;
    } else if (this.rules.isWin(playerMove, this.computerMove)) {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }

  handleUserMove(input: string): void {
    if (!this.rules.isValidMove(input)) {
      console.log('Invalid move. Please enter a valid move or "?" for help.');
      return;
    }
    if (input === "?") {
      this.displayGameTable();
      return;
    }
    if (input === "0") {
      this.gameInterface.closeInterface();
      return;
    }

    const playerMove = parseInt(input, 10);
    const playerMoveName = this.rules.getMoveName(playerMove);
    console.log(`Your move: ${playerMoveName}`);
    console.log(`Computer move: ${this.rules.getMoveName(this.computerMove)}`);

    this.displayGameResult(playerMove, playerMoveName);
    console.log(`HMAC key: ${this.key}`);
  }

  run(): void {
    const moveName = this.rules.getMoveName(this.computerMove);
    console.log(`HMAC: ${CryptoUtils.calculateHMAC(moveName, this.key)}`);
    console.log("Available moves:");
    this.gameInterface.displayMenu();
    this.gameInterface.getUserMove((input: string) => {
      this.handleUserMove(input);
    });
  }
}

export default Game;
