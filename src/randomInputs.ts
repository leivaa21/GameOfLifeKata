import { Cell, CellMatrix } from './GameOfLife';

const genRandomInput = (matrixSize: number) => {
  const input: CellMatrix = new Array<Cell[]>(); 
  for (let i = 0; i < matrixSize; i++){
    input.push(randomRow(matrixSize))
  }
  return input;
}
const randomRow = (rowSize: number) => {
  const row: Cell[] = new Array<Cell>(); 
  for (let i = 0; i < rowSize; i++){
    let n = Math.floor(Math.random() * 2)
    if (n === 0) row.push('Dead')
    if(n === 1) row.push('Alive')    
  }  
  return row;
}

export default genRandomInput;