var womensRights = 0;
var race = 0
var lgbtq = 0
var education = 0
var mentalHealth = 0

// Pulling general ideas from https://www.sitepoint.com/simple-javascript-quiz/
const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

startButton.addEventListener('click', buildQuiz)

const myQuestions = [
    //copy the following section for each question//
    {
        question: "What gender do you identify as?",
        answers: {
            a: "Male",
            b: "Female",
            c: "Other"
        },
        //we need to change this, because there isn't any correct answer!
        correctAnswers: "a"
    },
    {    
        question: "Do you come from an area with poor educational funds/resources?",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswers: "a"
    },
    {    
        question: "Do you, or someone you know, have a mental illness?",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswers: "a"
    },
    {    
        question: "Do you identify as a BIPOC? (Black, Indigenous, People of Color)",
        answers: {
            a: "Yes",
            b: "No",
        },
        correctAnswers: "a"
    },
    {    
        question: "What age group do you believe you belong in?",
        answers: {
            a: "Youth",
            b: "Adult",
            c: "Elderly",
        },
        correctAnswers: "a"
    },
    {    
        question: "Would you like to be recommended to a random social justice group, or find one based off of your results?",
        answers: {
            a: "Random",
            b: "Based off of my results",
        },
        correctAnswers: "a"
    },
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