# Game of Life

- Link for the kata
  > https://kata-log.rocks/game-of-life-kata

> If you're going to read all, sorry in advance for my poor english knowledge, I'm still improving it! (literally the reason why im writting all of this on english)

---

## Focusing

- TDD
- Clean Code

---

## Domain

The first things we need to know are that:

- Every cell with less than 2 neighbours alive should be dead
- Every cell with more than 3 neighbours alive should be dead
- If a cell is dead but 3 neighbours are alive (exactly 3), should come back to live

---

## My approach

- I did it with an OOP (Object Oriented Programming) approach, so the first thing we are going to do is define our "GameOfLife" Object
- Our GameOfLife board is basicly a matrix of cells that can be only 'Dead' or 'Alive', so we are going to make custom types for representing this.
  - type Cell is going to be 'Alive'|'Dead'
  - type CellMatrix is going to be Cell[][]
- Our GameOfLive board also should save the state that's going to be updating and a static current state that's going to help us to not mess up the state of our board and its going to be initialized with an initial state (initial board).
- We are going to try to make as clean as posible code so we are going to have only a public getter for the state and a iterate method.
- Now that we have the structure of our Kata, we are going to make the tests! (We are be going to be coding the actual solution soon! Trust the process!!)

### Testing (ugh)

First of all I want to encourage all to think about this as a quality contract we are doing to our code, writting (_good_) tests before coding the solution will improve our quality and will let us refactor the code safely!!

- We are have in mind what the rules of the GameOfLive are, and we are going to try to make at least 4 scenarios without forgetting about any rule!
- Once we have the tests (and they all fail), lets write the code to make them go green :D!

### Back to the approach!

- First we have to think about saving the current state of the board so we dont messed all up, so in typescript we have to have in mind that matrix = matrix just make the pointers point to the same values, so they will be syncronized...

  The way I solved this is that i maped the values one by one so the matrix was a exact copy and not just pointers pointing the same values. (I dont know if this explanation is clear enough to be honest)

- Now we are going to map the matrix rows and update each row.
- To update each row we are going to map the row into the actual values and count the neighbours Alive.
  - If the value dont have neighbours because is in one of the board's edges, it will be counted as if the missing neighbours are dead.

With this in mind now its time to write code and refactor to make each iteration a **LITTLE BIT** cleaner. I want to make that clear, we shouldnt do big refactors, we should be refactoring little by little so we dont lose the green tests in any time.

If using TDD we lose the green tests as we refactor, we should revert that refactor and think another way of doing it, because if it dont pass the test, the code is not doing what it should do.

---
