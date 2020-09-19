var womensRights = 0;
var 

// Pulling general ideas from https://www.sitepoint.com/simple-javascript-quiz/
const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

startButton.addEventListener('click', buildQuiz)

const myQuestions = [
    //copy the following section for each question
    {
        question: "Question 1",
        answers: {
            a: "option a",
            b: "option b",
            c: "option c"
        },
        correctAnswers: "a"
    }//,
];

function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}


function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswers){
            numCorrect++;
            answerContainers[questionNumber].getElementsByClassName.color = 'lightgreen';
        }
        
    });
    resultsContainer.innerHTML = `${numCorrect}`;
}

submitButton.addEventListener('click', showResults);