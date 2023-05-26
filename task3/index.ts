import Game from "./src/Game";

class Main {
  public static main(): void {
    const moves = process.argv.slice(2);
    if (moves.length < 3 || moves.length % 2 === 0 || new Set(moves).size !== moves.length) {
      console.log("Invalid arguments. Please provide an odd number of unique moves.");
      console.log("Example: npm run dev rock paper scissors lizard Spock");
      return;
    }
    const game = new Game(moves);
    game.run();
  }
}
Main.main();
