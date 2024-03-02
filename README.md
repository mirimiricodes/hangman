# hangman
## Requirements: 
- [x] The player guesses a letter in each turn. 
- [x] The player wins if they guess the word. 
- [x] The player loses if they don't guess the word in 7 turns. 
- [x] The word to guess is chosen randomly from a list of words stored in a .txt file, separated by a comma.
- [ ] The player can restart the game after the game is over.
- [x] The game warns the player if a letter has already been guessed, and it doesn't count as a turn.
- [x] The used letters are displayed to the player.
- [x] If the player does not introduce a letter, an error message will be displayed.

## Dictionary Requirements: 
- [x] Provides a random word.
- [x] The word collection doesn't include duplicates.
- [x] The word collection is saved in a .txt file. 
```
bird, carrot, sea
```

## UI prototype:
```
Welcome to Mirimiri's hangman!
Press any key to start a new game.
```

```
Guess the word!
_ _ _ _

You already used these letters: 

Turns left: 7
```

```
Guess the word!
_ _ R _

You already used these letters: 
A, D, R, Z

Turns left: 4
```

```
Congratulations! You guessed the word!
The word was: BIRD

Press any key to play again.
```

```
I'm sorry, you didn't guess the word!
The word was: BIRD

Press any key to play again.
```



