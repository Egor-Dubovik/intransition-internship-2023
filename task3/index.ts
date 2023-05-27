import Game from "./src/Game";

class Main {
  public static main(): void {
    const moves = process.argv.slice(2);
    if (!Main.isValidArgs(moves)) return;
    const game = new Game(moves);
    game.run();
  }

  private static isValidArgs(args: string[]): boolean {
    if (args.length < 3 || args.length % 2 === 0 || new Set(args).size !== args.length) {
      console.log("Invalid arguments. Please provide an odd number of unique moves.");
      console.log("Example: npm run dev rock paper scissors lizard Spock");
      return false;
    }
    return true;
  }
}

Main.main();
