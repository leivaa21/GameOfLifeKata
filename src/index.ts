import { CellMatrix, GameOfLife } from './GameOfLife';
import genRandomInput from './randomInputs';

const matrixSize: number = 10;

const input: CellMatrix = genRandomInput(matrixSize);

const game = new GameOfLife(input);

for (let iterations = 0; iterations < 10; iterations++) {
  console.table(game.state)
  game.iterate();
}