import { CellMatrix, GameOfLife } from '../GameOfLife';

describe('Basic states', () => {

  it('Should die center if all neighbours dead', () => {
    const InputMatrix: CellMatrix = [
      ['Dead', 'Dead', 'Dead'],
      ['Dead', 'Alive', 'Dead'],
      ['Dead', 'Dead', 'Dead'],
    ]
    const ExpectedMatrix: CellMatrix = [
      ['Dead', 'Dead', 'Dead'],
      ['Dead', 'Dead', 'Dead'],
      ['Dead', 'Dead', 'Dead'],
    ]

    const game = new GameOfLife(InputMatrix);
    expect(game.state).toStrictEqual(InputMatrix);
    game.iterate();
    expect(game.state).toStrictEqual(ExpectedMatrix);
  })

  it('Should center stay alive if 2 neighbours or 3 are alive', () => {
    const InputMatrix: CellMatrix = [
      ['Dead', 'Alive', 'Dead'],
      ['Dead', 'Alive', 'Alive'],
      ['Dead', 'Dead', 'Dead'],
    ]
    const ExpectedMatrix: CellMatrix = [
      ['Dead', 'Alive', 'Alive'],
      ['Dead', 'Alive', 'Alive'],
      ['Dead', 'Dead', 'Dead'],
    ]

    const game = new GameOfLife(InputMatrix);
    expect(game.state).toStrictEqual(InputMatrix);
    game.iterate();
    expect(game.state).toStrictEqual(ExpectedMatrix);
  })

  it('Should  center revive if 3 are alive', () => {
    const InputMatrix: CellMatrix = [
      ['Dead', 'Alive', 'Dead'],
      ['Dead', 'Dead', 'Alive'],
      ['Dead', 'Alive', 'Dead'],
    ]
    const ExpectedMatrix: CellMatrix = [
      ['Dead', 'Dead', 'Dead'],
      ['Dead', 'Alive', 'Alive'],
      ['Dead', 'Dead', 'Dead'],
    ]

    const game = new GameOfLife(InputMatrix);
    expect(game.state).toStrictEqual(InputMatrix);
    game.iterate();
    expect(game.state).toStrictEqual(ExpectedMatrix);
  })

  it('Should die if more than 3 neighbours are alive', () => {
    const InputMatrix: CellMatrix = [
      ['Dead', 'Alive', 'Alive'],
      ['Dead', 'Alive', 'Alive'],
      ['Dead', 'Alive', 'Dead'],
    ]
    const ExpectedMatrix: CellMatrix = [
      ['Dead', 'Alive', 'Alive'],
      ['Alive', 'Dead', 'Dead'],
      ['Dead', 'Alive', 'Alive'],
    ]

    const game = new GameOfLife(InputMatrix);
    expect(game.state).toStrictEqual(InputMatrix);
    game.iterate();
    expect(game.state).toStrictEqual(ExpectedMatrix);
  })

})