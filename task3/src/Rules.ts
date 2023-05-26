class Rules {
  private moves: string[];
  private length: number;

  constructor(moves: string[]) {
    this.moves = moves;
    this.length = moves.length;
  }

  isValidMove(input: string): boolean {
    if (input === "?") return true;
    const parsedInput = parseInt(input, 10);
    return !isNaN(parsedInput) && parsedInput >= 0 && parsedInput <= this.length;
  }

  getMoveName(move: number): string {
    return this.moves[move - 1];
  }

  isWin(playerMove: number, computerMove: number): boolean {
    const diff = (playerMove - computerMove + this.length) % this.length;
    return diff <= this.length / 2 && diff !== 0;
  }
}

export default Rules;
