# odin-rock-paper-scissors-petyahyria

## Description
    This project is building console rock paper scissors game. 
    By building this project I learn Java Script basics and
    improove my problem solving.
## Pseudocode 
    - ASSIGN variables computerScore and humanScore
    - CALL playGame() function
    -   ASSIGN variable numberOfRounds
    -   CALL playRound() function numberOfRounds times
    -       CALL getComputerChoise()
                ASSIGN a variable choices that represent array with values "rock", "paper", "scissors"
                ASSIGN a variable computerChoice that generate number from 0 to 2,
                        can be used as array index.
                RETURN ITEM OF choices ARRAY with computerChoice index 
    -       CALL getHumanChoice() 
                ASSIGN a variable humanChoice that prompt and receive its value and
                        make input in lowercase with string method toLowerCase() for case-insensetivity
                WHILE humanChoise doesn't equals rock and paper and scissors
                REASSIGN humanChoice with prompt toLowerCase and ask user give valid value
                ENDWHILE
                RETURN humanChoice
            IF ComputerChoice is "rock" THEN
                CASE humanChoice OF
                "rock" - tie
                "paper" - human win INCREMENT humanScore
                "scissors" - computer win INCREMENT computerScore
            ELSE IF ComputerChoice is "paper" THEN
                CASE humanChoice OF
                "paper" - tie
                "scissors" - human win INCREMENT humanScore
                "rock" - computer win INCREMENT computerScore
            ELSE
                CASE humanChoice OF
                "scissors" - tie
                "rock" - human win INCREMENT humanScore
                "paper" - computer win INCREMENT computerScore
            ENDIF
            CALL printResults() function
                IF humanScore greater then computer score THEN
                    PRINT "You win"
                ELSE IF humanScore lower then computer score THEN
                    PRINT "You lose"
                ELSE
                    PRINT "Tie"
            
            

