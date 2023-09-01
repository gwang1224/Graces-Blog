---
layout: default
title: Java Console Game
description: A progressive journey through Java basics starting with the classic "Hello, World!" example.
courses: {'labnotebook': {'week': 1}}
type: hacks
---

```Java
import java.util.Scanner; //library for user input
import java.lang.Math; //library for random numbers
```

## Rock Paper Scissors


```Java
public class RockPaperScissors{ // Unit 5
    public static void main(String[] args) { // Unit 9
            System.out.println("Rock Paper Scissors");
            System.out.println("Type r for rock, p for paper, or s for scissors");
            Scanner scRPS = new Scanner(System.in); // UNIT 1
            String userChoice = scRPS.nextLine().toLowerCase(); // UNIT 1
            Boolean quit = false; // Unit 3
            int random = (int) (Math.random() * 3); // UNIT 1
            while(quit == false){ //Unit 3
                if(userChoice.equals("r")){
                    if(random == 1){
                        System.out.println("You chose rock \nThe computer chose paper \nYou lose!");
                    }
                    else if(random == 2){
                        System.out.println("You chose rock \nThe computer chose scissors \nYou win!");
                    }
                    else{
                        System.out.println("You chose rock \nThe computer chose rock \nIt's a tie!");
                    }
                    quit = true; //Unit 3
                }
                else if(userChoice.equals("p")){
                    if(random == 1){
                        System.out.println("You chose paper \nThe computer chose paper \nIt's a tie!");
                    }
                    else if(random == 2){
                        System.out.println("You chose paper \nThe computer chose scissors \nYou lose!");
                    }
                    else{
                        System.out.println("You chose paper \nThe computer chose rock \nYou win!");
                    }
                    quit = true; //Unit 3
    
                }
                else if(userChoice.equals("s")){
                    if(random == 1){
                        System.out.println("You chose scissors \nThe computer chose paper \nYou win!");
                    }
                    else if(random == 2){
                        System.out.println("You chose scissors \nThe computer chose scissors \nIt's a tie!");
                    }
                    else{
                        System.out.println("You chose scissors \nThe computer chose rock \nYou lose!");
                    }
                    quit = true; //Unit 3
    
                }
                else{
                    System.out.println("Invalid input, try again");
                    userChoice = scRPS.nextLine();
                }            
            }
            scRPS.close();
        }
}

RockPaperScissors.main(null);
```

    Rock Paper Scissors
    Type r for rock, p for paper, or s for scissors
    You chose rock 
    The computer chose scissors 
    You win!


## Higher or Lower


```Java
public class HorL {
    public static void main(String[] args) {
        System.out.println("Higher or Lower");
        System.out.println("You have three guesses to guess the number I am thinking of between 1-8.");
        System.out.println("If you guess the number correctly, you win!");

        Scanner scHL = new Scanner(System.in);
        int randomG = (int) (Math.random() * 8) + 1;

        for (int i = 3; i > 0; i--) {
            System.out.print("Enter your guess: ");
            int guess = scHL.nextInt();

            if (guess == randomG) {
                System.out.println("You win!");
                break;
            } else if (guess > randomG) {
                System.out.println("The number is lower");
            } else if (guess < randomG) {
                System.out.println("The number is higher");
            }
        }

        System.out.println("Game over.");
        scHL.close();
    }
}

HorL.main(null);
```

    Higher or Lower
    You have three guesses to guess the number I am thinking of between 1-8.
    If you guess the number correctly, you win!
    Enter your guess: The number is higher
    Enter your guess: The number is higher
    Enter your guess: The number is higher
    Game over.


## TicTacToe


```Java
public class TicTacToe {
    public static void main(String[] args) {
        System.out.println("Tic Tac Toe");
        Scanner scTTT = new Scanner(System.in);
        String[] board = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
        String player = "X";
        String player2 = "O";
        int turn = 0;
        Boolean quit = false;
        System.out.println("Do you want to play against a friend or the computer?");
        System.out.println("Type 1 for friend, 2 for computer");
        int choice = scTTT.nextInt();
        //make tic tac toe using player1 and player2
        if(choice == 1){                
            System.out.println("Type the number of the square you want to place your piece in");
            while(quit == false){
                System.out.println("Player 1's turn (X)");
                System.out.println(board[0] + " | " + board[1] + " | " + board[2]);
                System.out.println(board[3] + " | " + board[4] + " | " + board[5]);
                System.out.println(board[6] + " | " + board[7] + " | " + board[8]);
                int move = scTTT.nextInt();
                if(board[move - 1].equals("X") || board[move - 1].equals("O")){
                    System.out.println("That square is already taken, try again");
                }
                else{
                    board[move - 1] = player;
                    turn++;
                    if(board[0].equals("X") && board[1].equals("X") && board[2].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[3].equals("X") && board[4].equals("X") && board[5].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[6].equals("X") && board[7].equals("X") && board[8].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[0].equals("X") && board[3].equals("X") && board[6].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[1].equals("X") && board[4].equals("X") && board[7].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[2].equals("X") && board[5].equals("X") && board[8].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[0].equals("X") && board[4].equals("X") && board[8].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[2].equals("X") && board[4].equals("X") && board[6].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(turn == 9){
                        System.out.println("It's a tie!");
                        quit = true;
                    }
                    else{
                        System.out.println("Player 2's turn (O)");
                        System.out.println(board[0] + " | " + board[1] + " | " + board[2]);
                        System.out.println(board[3] + " | " + board[4] + " | " + board[5]);
                        System.out.println(board[6] + " | " + board[7] + " | " + board[8]);
                        int move2 = scTTT.nextInt();
                        if(board[move2 - 1].equals("X") || board[move2 - 1].equals("O")){
                            System.out.println("That square is already taken, try again");
                        }
                        else{
                            board[move2 - 1] = player2;
                            turn++;
                            if(board[0].equals("O") && board[1].equals("O") && board[2].equals("O")){
                                System.out.println("Player 2 wins!");
                                quit = true;
                            }
                            else if(board[3].equals("O") && board[4].equals("O") && board[5].equals("O")){
                                System.out.println("Player 2 wins!");
                                quit = true;
                            }
                            else if(board[6].equals("O") && board[7].equals("O") && board[8].equals("O")){
                                System.out.println("Player 2 wins!");
                                quit = true;
                            }
                            else if(board[0].equals("O") && board[3].equals("O") && board[6].equals("O")){
                                System.out.println("Player 2 wins!");
                                quit = true;
                            }
                            else if(board[1].equals("O") && board[4].equals("O") && board[7].equals("O")){
                                System.out.println("Player 2 wins!");
                                quit = true;
                            }
                            else if(board[2].equals("O") && board[5].equals("O") && board[8].equals("O")){
                                System.out.println("Player 2 wins!");
                                quit = true;
                            }
                        }
                    }
                }
            }
        }
        if(choice == 2){
            String computer = "O";
            System.out.println("Type the number of the square you want to place your piece in");
            while(quit == false){
                System.out.println("Player 1's turn (X)");
                System.out.println(board[0] + " | " + board[1] + " | " + board[2]);
                System.out.println(board[3] + " | " + board[4] + " | " + board[5]);
                System.out.println(board[6] + " | " + board[7] + " | " + board[8]);
                int move = scTTT.nextInt();
                if(board[move - 1].equals("X") || board[move - 1].equals("O")){
                    System.out.println("That square is already taken, try again");
                }
                else{
                    board[move - 1] = player;
                    turn++;
                    if(board[0].equals("X") && board[1].equals("X") && board[2].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[3].equals("X") && board[4].equals("X") && board[5].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[6].equals("X") && board[7].equals("X") && board[8].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[0].equals("X") && board[3].equals("X") && board[6].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[1].equals("X") && board[4].equals("X") && board[7].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[2].equals("X") && board[5].equals("X") && board[8].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[0].equals("X") && board[4].equals("X") && board[8].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(board[2].equals("X") && board[4].equals("X") && board[6].equals("X")){
                        System.out.println("Player 1 wins!");
                        quit = true;
                    }
                    else if(turn == 9){
                        System.out.println("It's a tie!");
                        quit = true;
                    }
                    else{
                        System.out.println("Computer's turn (O)");
                        System.out.println(board[0] + " | " + board[1] + " | " + board[2]);
                        System.out.println(board[3] + " | " + board[4] + " | " + board[5]);
                        System.out.println(board[6] + " | " + board[7] + " | " + board[8]);
                        int move2 = (int)(Math.random() * 9) + 1;
                        if(board[move2 - 1].equals("X") || board[move2 - 1].equals("O")){
                            System.out.println("That square is already taken, try again");
                        }
                        else{
                            board[move2 - 1] = computer;
                            turn++;
                            if(board[0].equals("O") && board[1].equals("O") && board[2].equals("O")){
                                System.out.println("Computer wins!");
                                quit = true;
                            }
                            else if(board[3].equals("O") && board[4].equals("O") && board[5].equals("O")){
                                System.out.println("Computer wins!");
                                quit = true;
                            }
                            else if(board[6].equals("O") && board[7].equals("O") && board[8].equals("O")){
                                System.out.println("Computer wins!");
                                quit = true;
                            }
                            else if(board[0].equals("O") && board[3].equals("O") && board[6].equals("O")){
                                System.out.println("Computer wins!");
                                quit = true;
                            }
                            else if(board[1].equals("O") && board[4].equals("O") && board[7].equals("O")){
                                System.out.println("Computer wins!");
                                quit = true;
                            }
                            else if(board[2].equals("O") && board[5].equals("O") && board[8].equals("O")){
                                System.out.println("Computer wins!");
                                quit = true;
                            }
                        }
                    }
                }
            }
            
    }
        scTTT.close();
}
}

TicTacToe.main(null);
```

    Tic Tac Toe
    Do you want to play against a friend or the computer?
    Type 1 for friend, 2 for computer
    Type the number of the square you want to place your piece in
    Player 1's turn (X)
    1 | 2 | 3
    4 | 5 | 6
    7 | 8 | 9
    Player 2's turn (O)
    1 | 2 | X
    4 | 5 | 6
    7 | 8 | 9
    Player 1's turn (X)
    1 | 2 | X
    4 | O | 6
    7 | 8 | 9
    Player 2's turn (O)
    1 | 2 | X
    4 | O | 6
    7 | 8 | X
    Player 1's turn (X)
    1 | 2 | X
    4 | O | O
    7 | 8 | X
    Player 2's turn (O)
    1 | 2 | X
    X | O | O
    7 | 8 | X
    Player 1's turn (X)
    1 | O | X
    X | O | O
    7 | 8 | X
    Player 2's turn (O)
    1 | O | X
    X | O | O
    7 | X | X
    Player 1's turn (X)
    O | O | X
    X | O | O
    7 | X | X
    Player 1 wins!


In order to simplify the logic of the TicTacToe game, we could make the game more simple by creating function for duplicate tasks. For example, there are duplicated sections for player 1 and player 2's turns. These can be consolidated using one function that could be called whenever a player needs to make a turn. Moreover, another function can be created that will print out the TicTacToe board. In the current code, the same code is used to print out the board 4 times. The code can thus be shortened with a function.


```Java
//UNIT 5: ANATOMY OF A CLASS
public class TicTacToe2 {
    public static void main(String[] args) {
        System.out.println("Tic Tac Toe");
        Scanner scTTT = new Scanner(System.in);
        String[] board = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
        int turn = 0;
        boolean quit = false;

        System.out.println("Do you want to play against a friend or the computer?");
        System.out.println("Type 1 for friend, 2 for computer");
        int choice = scTTT.nextInt();

        // UNIT 1: DATA TYPES
        String player1 = "X";
        String player2 = "O";
        String currentPlayer = player1;

        if (choice == 2) {
            player2 = "Computer";
        }

        while (!quit) {
            displayBoard(board);

            int move = getPlayerMove(board, currentPlayer, scTTT);

            board[move - 1] = currentPlayer;
            turn++;

            if (checkWin(board, currentPlayer)) {
                displayBoard(board);
                System.out.println(currentPlayer + " wins!");
                quit = true;
            } else if (turn == 9) {
                displayBoard(board);
                System.out.println("It's a tie!");
                quit = true;
            }

            currentPlayer = (currentPlayer.equals(player1)) ? player2 : player1;
        }

        scTTT.close();
    }

    //New function for displaying board
    // UNIT 2: VOID METHOD
    private static void displayBoard(String[] board) {
        System.out.println();
        System.out.println(board[0] + " | " + board[1] + " | " + board[2]);
        System.out.println(board[3] + " | " + board[4] + " | " + board[5]);
        System.out.println(board[6] + " | " + board[7] + " | " + board[8]);
    }

    private static int getPlayerMove(String[] board, String currentPlayer, Scanner scanner) {
        int move;
        do {
            System.out.print(currentPlayer + "'s turn (" + currentPlayer + "): ");
            move = scanner.nextInt();
            // UNIT 3: IF STATEMENTS
            if (move < 1 || move > 9 || !board[move - 1].equals(String.valueOf(move))) {
                System.out.println("Invalid move. Try again.");
            }
        } while (move < 1 || move > 9 || !board[move - 1].equals(String.valueOf(move)));
        return move;
    }


    // UNIT 4: FOR
    private static boolean checkWin(String[] board, String player) {
        for (int i = 0; i < 8; i++) {
            int[] winCombo = WINNING_COMBINATIONS[i];
            if (board[winCombo[0]].equals(player) && board[winCombo[1]].equals(player) && board[winCombo[2]].equals(player)) {
                return true;
            }
        }
        return false;
    }

    private static final int[][] WINNING_COMBINATIONS = {
            {0, 1, 2}, {3, 4, 5}, {6, 7, 8}, // Rows
            {0, 3, 6}, {1, 4, 7}, {2, 5, 8}, // Columns
            {0, 4, 8}, {2, 4, 6}            // Diagonals
    };
}

TicTacToe2.main(null);
```

    Tic Tac Toe
    Do you want to play against a friend or the computer?
    Type 1 for friend, 2 for computer
    
    1 | 2 | 3
    4 | 5 | 6
    7 | 8 | 9
    X's turn (X): 
    1 | 2 | 3
    4 | X | 6
    7 | 8 | 9
    O's turn (O): 
    1 | O | 3
    4 | X | 6
    7 | 8 | 9
    X's turn (X): 
    1 | O | X
    4 | X | 6
    7 | 8 | 9
    O's turn (O): 
    1 | O | X
    4 | X | 6
    7 | O | 9
    X's turn (X): 
    1 | O | X
    4 | X | 6
    X | O | 9
    X wins!


## Creating own game


```Java
import java.util.Scanner;
import java.util.Random;

public class HangmanGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        String[] words = {"taylor", "harry", "swiftie", "rachit", "grace"};
        String word = words[random.nextInt(words.length)];
        
        int maxAttempts = 10;
        int remainingAttempts = maxAttempts;
        StringBuilder guessedWord = new StringBuilder(word.length());
        for (int i = 0; i < word.length(); i++) {
            guessedWord.append('_');
        }
        
        System.out.println("Welcome to Hangman Game!");
        System.out.println("Try to guess the word by suggesting letters.");
        
        while (remainingAttempts > 0 && guessedWord.toString().contains("_")) {
            System.out.println("\nCurrent Word: " + guessedWord);
            System.out.println("Remaining Attempts: " + remainingAttempts);
            
            System.out.print("Guess a letter: ");
            char guess = scanner.next().charAt(0);
            
            boolean found = false;
            for (int i = 0; i < word.length(); i++) {
                if (word.charAt(i) == guess) {
                    guessedWord.setCharAt(i, guess);
                    found = true;
                }
            }
            
            if (!found) {
                remainingAttempts--;
                System.out.println("Incorrect guess!");
            }
        }
        
        if (guessedWord.toString().equals(word)) {
            System.out.println("\nCongratulations! You guessed the word: " + word);
        } else {
            System.out.println("\nGame Over! The word was: " + word);
        }
    }
}

HangmanGame.main(null);
```

    Welcome to Hangman Game!
    Try to guess the word by suggesting letters.
    
    Current Word: _____
    Remaining Attempts: 10
    Guess a letter: 
    Current Word: __a__
    Remaining Attempts: 10
    Guess a letter: Incorrect guess!
    
    Current Word: __a__
    Remaining Attempts: 9
    Guess a letter: 
    Current Word: g_a__
    Remaining Attempts: 9
    Guess a letter: 
    Current Word: gra__
    Remaining Attempts: 9
    Guess a letter: Incorrect guess!
    
    Current Word: gra__
    Remaining Attempts: 8
    Guess a letter: Incorrect guess!
    
    Current Word: gra__
    Remaining Attempts: 7
    Guess a letter: 
    Current Word: grac_
    Remaining Attempts: 7
    Guess a letter: 
    Congratulations! You guessed the word: grace


## College Board Units

[10 units for College Board](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)

Reorganization is important because it allows for the code to be easily understood. In the previous example, after the code was separated into different functions, it was easier to comprehend and make modifications. It is also easier for the code to be reused and be debugged. It is also easier to write documentation for collaborators understand. 

AP identification is also important because we are able to identify learning targets. Completing the Units in the AP College Board shows that we have mastered the code and content.
