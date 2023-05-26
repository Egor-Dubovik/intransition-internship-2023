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
    const { moves, table } = this;
    const length = moves.length;

    for (let i = 0; i < length; i++) {
      const row = [moves[i]];

      for (let j = 0; j < length; j++) {
        const result = this.determineResult(i, j, length);
        row.push(result);
      }

      table.push(row);
    }

    console.log(table.toString());
  }

  private determineResult(move1: number, move2: number, length: number): string {
    const diff = (move1 - move2 + length) % length;
    if (diff === 0) {
      return "Draw";
    } else if (diff <= length / 2) {
      return "Win";
    } else {
      return "Lose";
    }
  }
}

export default GameTable;
