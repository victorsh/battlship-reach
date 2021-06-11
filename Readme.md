# Battleship :ship:

Battleship written in Reach and React running on the Algorand Blockchain. This project has been created to compete with the Universities Unchained Hackathon.

---


#### Running Locally
- `REACH_CONNECTOR_MODE=ALGO reach devnet`
- `cd cra-client`
- `npm i`
- `npm start`

#### Other Commands
- Run reach built react client: `REACH_CONNECTOR_MODE=ALGO ./reach react`
- Run devnet through docker componse: `docker-compose run algorand-devnet`
- Remove containers after each run: `docker kill $(docker ps -q) && docker rm $(docker ps -qa)`

#### Test Accounts (Local)
Tacos
6MYPQHN4X2MPJ2PVYSQFLYOV556KRY3Y6TV6EQ5KO5AF273SIHTAZNTR5U
behave glance student unfair diary one deny time february strong cigar wagon huge cargo pause swing home clean gauge fabric team proof lawsuit absorb ignore

lime
O7SLFQJHY6EOC73YIMOPVWE4C3B2P2SQU5LTX2YPM7WU2CI5NX65HW6JRQ
maximum anchor bulk upon jar design fog sting weird boil guilt cook fabric mail van way pitch feel frost agree indicate major case able suspect

#### Sources
- A single participant example showcasing [array_groups](https://github.com/reach-sh/reach-lang/blob/8f41a2ae17220041ba365274dd32ae7c96b11f2e/hs/test-examples/features/array_groups.rsh)

---

## Description
```
To start off, Battleship is very similar in structure to Rock Paper Scissors. There will be 2 players opposing each other. At the beginning of the game each player will select where they'd like to place their ships. This information can not be revealed to the opponent, for you see... you are at war. And you must sink the opposing forces battleship before thine ships be twigs. This is very similar to the getHand() method used in Rock Paper Scissors, where the hand is instead the location of the ships on the grid. The grid is an X by Y set of single spaced ships represented by an array of unsigned integers.

In this version of Battleship I have decided to simplify the game and make it so that all guesses are made per turn. This means that both players have a count-down to select where they beleive their opponent has placed their ships. Once all the selections are made, or the time runs out, the rockets are blasted and the fleet with the most ships floating wins. The funds are dispersed to the winner and the game ends. If a draw occurs, then the 

Continuing with the Rock Paper Scissors simillarities, the game continues over and over again if a draw occurs. This is using the same loop invarient in order to verify that the total balance is still equal to the total amount of wager both players have placed on the game.

I have moved code here that will be used to run the battleship game. First step is to setup the player objects. This is seperated into three peices. The common objects named player, the deployer object which has a selected wager and and attacher object which has a function that can accept the wager.

After laying out the basic structure of the contract using the rock paper scissors example
```

## Technical Differences
---
```
Using arrays
While loop in while loop
While count
Return status of comparison loop
```