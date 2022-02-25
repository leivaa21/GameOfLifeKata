export type Cell = 'Alive'|'Dead' 
export type CellMatrix = Cell[][];


export class GameOfLife {
  private _state: CellMatrix;
  private _currState: CellMatrix;
  private _nCols: number;
  private _nRows: number;
  constructor(initialState: CellMatrix) {
    this._state = initialState;
    this._currState = initialState;
    this._nRows = this.state.length - 1;
    this._nCols = this.state[0].length - 1;
  }

  public get state() {return this._state}

  public iterate() {
    this.saveCurrentState();
    this._currState.map((row, indexRow) => this.updateRow(row, indexRow))
  }

  private saveCurrentState() {
    this._currState = this.state.map(row => row.map(val => val));
  }

  private updateRow(row: Cell[], indexRow: number) {
    row.map((cell, indexCol) => this.updateCell(cell, indexRow, indexCol))
  }
  private updateCell(cell: Cell, indexRow: number, indexCol: number) {
    const aliveCount = this.neighboursAlive(indexRow, indexCol);
    if (aliveCount < 2 || aliveCount > 3) this.state[indexRow][indexCol] = 'Dead';
    if (cell === 'Dead' && aliveCount === 3) this.state[indexRow][indexCol] = 'Alive';
  }

  private neighboursAlive(indexRow: number, indexCol: number) {
    let count = 0;
    
    if (indexRow !== 0) count += this.checkAliveInRow(indexRow - 1, indexCol);
    count += this.checkAliveInRow(indexRow, indexCol);
    if (indexRow !== this._nRows) count += this.checkAliveInRow(indexRow + 1, indexCol);
    if (this._currState[indexRow][indexCol] === 'Alive') count--;

    return count;

  }

  private checkAliveInRow(indexRow: number, indexCol: number) {
    let count = 0;
    
    if (indexCol !== 0 && this._currState[indexRow][indexCol - 1] === 'Alive') count++;
    if (this._currState[indexRow][indexCol] === 'Alive') count++;  
    if (indexCol !== this._nCols && this._currState[indexRow][indexCol + 1] === 'Alive') count++;  
    
    return count;
  }

}