# Tenzies App Project - Second Scrimba Course

## First Challenge

1. Start a brand new React app!
2. Create a separate App component
3. Import and render the App component here
4. In the App component, render a <main> element
5. Style everything to look like the slide

> Result to complete on my own `Success 👍`

## Second Challenge

1. Create a Die component that takes a `value` prop

2. Render 10 instances of the Die component (manually)

3. Provide a number between 1-6 for the value on each for now

4. Style the <main> and <Die> components to look like they do in the slide

**_Hint 1:_** _Create a container to hold the 10 instances of the Die component,
and use CSS Grid to lay them out evenly in 2 rows of 5 columns_

**_Hint 2:_** _Use flexbox on main to center the allDice container
in the center of the page_

> Result to complete on my own `Success 🥳`

## Third Challenge

1. Write a function (allNewDice) that returns an array of 10 random
   numbers between 1-6 inclusive.

2. Log the array of numbers to the console for now

> Result to complete on my own `Success!!!`

## Forth Challenge

1. Create state to hold our array of numbers. (Initialize the state by calling
   our `allNewDice` function so it loads all new dice as soon as the app loads)

2. Map over the state numbers array to generate our array of Die elements and
   render those in place of our manually-written 10 Die elements.

> Result to complete on my own `Success 🎉🎉🎉`

## Fifth Challenge

1. Create a `Roll Dice` button that will re-roll all 10 dice

2. Clicking the button should generate a new array of numbers
   and set the `allDice` state to that new array (thus re-rendering
   the array to the page)

> Result to complete on my own `Success, Let's Go!`

## Sixth Challenge

1. Update the array of numbers in state to be an array of objects instead.
   Each object should look like: { value: <random number>, isHeld: false }

**_Hint:_** _Making this change will break parts of our code, so make
sure to update things so we're back to a working state_

> Result to complete on my own `Success, I'm on a roll 🤘💻`

## Seventh Challenge

1. Add conditional styling to the Die component so that if it's held
   (isHeld === true), its background color changes to a light green (#59E391)

**_Hint:_** _currently the Die component has no way of knowing if it's "held" or not_

> Result to complete on my own `Success, Unstoppable!`

## Eighth Challenge

1. Create a function `holdDice` that takes `id` as a parameter. For now,
   just have the function console.log(id)

2. Figure out how to pass that function down to each instance of the Die
   component so when each one is clicked, it logs its own unique ID property.

**_Hint:_** _there's more than one way to make that work, so just choose whichever
you want_

> Result to complete on my own `Fail 😔`

## Ninth Challenge

1. Update the `holdDice` function to flip the `isHeld` property on the object
   in the array that was clicked, based on the `id` prop passed into the function.

**_Hint:_** _As usual, there's > 1 way to accomplish this. I'll be using
`dice.map()` and checking for the `id` of the die to determine which one to
flip `isHeld` on, but you can do whichever way makes the most sense to you._

> Result to complete on my own `Success, 😎`

## Tenth Challenge

1. Update the `rollDice` function to not just roll all new dice, but instead to
   look through the existing dice to NOT role any that are being `held`.

**_Hint:_** _this will look relatively similiar to the `holdDice` function.
When creating new dice, remember to use `id: nanoid()` so any new dice have an
`id` as well._

> Result to complete on my own `Fail from syntax error 💩`

## Eleventh Challenge

1. Add new state called `tenzies`, default to false. It represents whether the user
   has won the game yet or not.

2. Add an effect that runs every time the `allDice` state array changes. For now,
   just console.log("Dice state changed").

> Result to complete on my own `Success, This was the easiest so far.`

## Twelfth Challenge

1. Check the dice array for these winning conditions:
   **a.** All dice are held - **b.** All dice have the same value

2. If both conditions are true, set `tenzies` to true and log "You won!" to the console

> Result to complete on my own `Fail, that was a tricky one`

## Thirteenth Challenge

1. If tenzies is true, Change the button text to "New Game"

2. If tenzies is true, use the "react-confetti" package to
   render the <Confetti /> component 🎉

**_Hint_** _don't worry about the `height` and `width` props it mentions in the
documentation._

> Result to complete on my own `Success!!!`

## Final Challenge

1. Allow the user to play a new game when the button is clicked and they've already won

> Result to complete on my own `Success, Yay! 3 Fails this time. I'm getting better!`
