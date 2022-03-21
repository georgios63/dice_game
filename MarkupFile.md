<!-- 1-The first thing we need is to create our page component. This will be a simple application, so routing will not be needed.
Create a component, and call it on your App.js. Write an <h1> in that component so you can check that its working correctly. -->

<!-- 2-Now we need our die! We will start with a regular 6 sided die.
Create a function that once called, will return a random number from 1 to 6.
Don't forget to console.log the random number, make sure its working! -->

<!-- 3-We can generate a random number from 1 to 6, now we need to store the value of each players rolls. -->

We will always have 2 players in our game, discuss with your partner what would be the best solution to this problem. There are more than one way to do it! Just make sure that the value of roll is initialise as 0 or null.
Once you decide on how to store the values of the rolls, check yourself, and console.log them!

4-Once we have the value of both rolls stored in variables, we need a way to compare them to decide who gets a point. Highest roll wins.
Write a function that will compare the scores to decide the winner of the turn.
Display a message letting the user know who won the turn!

5-Our next step is to update the game score, but to update the game score, we need to keep track of the score to begin with!
Discuss with your partner what would be the best solution to this problem, once again, there is more than one way to solve this. Hint: You will need a new local state.

6-The turn is over! Let's reset the values of the dice rolls, and start a new turn!
Reset the state or states that hold the values of the current turn rolls back to its initial state, 0 or null.

7-First player to reach the score of 11 wins the game.
Display a message announcing the winner, and include both scores in the message.
