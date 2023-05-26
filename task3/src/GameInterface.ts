import readline from "readline";

class GameInterface {
  private moves: string[];

  constructor(moves: string[]) {
    this.moves = moves;
  }

  displayMenu(): void {
    const { moves } = this;
    for (let i = 0; i < moves.length; i++) {
      console.log(`${i + 1} - ${moves[i]}`);
    }
    console.log("0 - exit");
    console.log("? - help");
  }

  getUserMove(callback: (input: string) => void): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter your move: ", (input: string) => {
      rl.close();
      callback(input);
    });
  }

  closeInterface(): void {
    console.log("Game exited.");
  }
}

export default GameInterface;
