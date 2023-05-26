import Table from "cli-table";

class GameTable {
  private moves: string[];
  private table: Table;

  constructor(moves: string[]) {
    this.moves = moves;
    this.table = new Table({
      head: ["", ...moves],
      style: { head: ["cyan"] },
    });
  }

  generateTable(): void {
    const length = this.moves.length;
    for (let i = 0; i < length; i++) {
      const row = [this.moves[i]];
      for (let j = 0; j < length; j++) {
        const result = this.determineResult(i, j, length);
        row.push(result);
      }
      this.table.push(row);
    }
    console.log(this.table.toString());
  }

  private determineResult(move1: number, move2: number, length: number): string {
    const diff = (move1 - move2 + length) % length;
    if (diff === 0) return "Draw";
    if (diff <= length / 2) return "Win";
    return "Lose";
  }
}

export default GameTable;
