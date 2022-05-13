/*
Quiz/ triva page
Features - Keeps Score, Show correct and incorrect answers at the end of quiz, submit button and new quiz button (stretch chose no of questions catagory etc), 
countdown timer. prompt players name and use when displaying score


-  * Create prompt asking for players name
-  *  Save Players name as variable to use when displying score 
- * Create page heading 
- * Add an appropriate image
-  *Background color etc
-  *Create buttons         
        - New quiz 
            - * add event listener on click to generate new quiz ?appendChild? 
            -  *submit new fetch request 
        - Submit answers - link to generating score 
            - - add event listener on click to answers against correctAnswers 
            -  Alert with score 
                -create and alert

-   Div that displays the questions and multipul choice
    - *API fetch request async function 
    - -*- results[0].question
    - display quiz function that filters questions from API fetch
    - identify correct answer to link to score
    - How to select the answers? Create radial buttons for player to select answer - asign random answer to  a, b, c, d etc?
    -   if answer is ==== correct answer add 1 to score-   Create 2 buttons
- create a countdown timer to end the quiz if player hasnt finished
- start with 1 question then copy and paste code to repeat
*/
console.log("This Page is working")
let playerName = prompt ("Please enter your name.");

async function getQuiz (){
    let response = await fetch( 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=boolean');
    let data = await response.json();

    let quizQOne = document.querySelector('#qOne')
    let qOne = data.results[0].question
    quizQOne.innerText = qOne
 




    let quizQTwo = document.querySelector('#qTwo')
    let qTwo = data.results[1].question
    quizQTwo.innerText = qTwo
  

    let quizQThree = document.querySelector('#qThree')
    let qThree = data.results[2].question
    quizQThree.innerText = qThree
   



    let quizQFour = document.querySelector('#qFour')
    let qFour = data.results[3].question
    quizQFour.innerText = qFour
   



    let quizQFive  = document.querySelector('#qFive')
    let qFive= data.results[4].question
    quizQFive.innerText = qFive

   answerOne = data.results[0]
   checkAnswer(answerOne) 
}


getQuiz()


let newQuizButton = document.querySelector("#newQuiz")
newQuizButton.addEventListener('click', getQuiz)

function checkAnswer (answerOne) {
 console.log(answerOne)

    if (answerOne.correct_answer === 'True') {
        console.log("True")
    }

//     if (answerOne.correct_answer === 'false') {
//         console.log("true")
//     }
// 
}







let trueButton = document.querySelector('#trueOne');
trueButton.addEventListener('click', checkAnswer);

let falseButton = document.querySelector('.false');
falseButton.addEventListener('click', checkAnswer);
