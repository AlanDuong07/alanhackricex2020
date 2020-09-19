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
    {
        question: "What gender do you identify as?",
        answers: {
            a: "Male",
            b: "Female",
            c: "Other"
        },
        //we need to change this, because there isn't any correct answer!
        womensRightsChoice: "b"
        ,lgbtqChoice: "c"
    },
    {    
        question: "Do you come from an area with poor educational funds/resources?",
        answers: {
            a: "Yes",
            b: "No",
        },
        educationChoice: "a"
    },
    {    
        question: "Do you, or someone you know, have a mental illness?",
        answers: {
            a: "Yes",
            b: "No",
        },
        mentalHealthChoice: "a"
    },
    {    
        question: "Do you identify as a BIPOC? (Black, Indigenous, People of Color)",
        answers: {
            a: "Yes",
            b: "No",
        },
        raceChoice: "a"
    },
    {    
        question: "What age group do you believe you belong in?",
        answers: {
            a: "Youth",
            b: "Adult",
            c: "Elderly",
        },
        educationChoice: "a"
        ,mentalHealthChoice: "c"
    },
    {    
        question: "Would you like to be recommended to a random social justice group, or find one based off of your results?",
        answers: {
            a: "Random",
            b: "Based off of my results",
        },
        raceChoice: "a"
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
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        current_highest_count = 0
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.womensRightsChoice){
            womensRights++;
        }
        else if(userAnswer === currentQuestion.raceChoice){
            race++;
        }
        else if(userAnswer === currentQuestion.lgbtqChoice){
            lgbtq++;
        }
        else if(userAnswer === currentQuestion.educationChoice){
            education++;
        }
        else if(userAnswer === currentQuestion.mentalHealthChoice){
            mentalHealth++;
        }
    });
    var array_of_all_counts = [womensRights, race, lgbtq, education, mentalHealth];
    var nothing_is_less_yet = True;
    var current_highest_count;
    for (let index = 0; index < array_of_all_counts.length; index++) {
        const element = array[index];
        if (nothing_is_less_yet){
            current_highest_count = element;
        }
        else if (element > current_highest_count){
            current_highest_count = element;
        }
        
    }
    //OK THE STUFF ABOVE IS WILD ASF LMAO BUT LIKE THIS IS THE PART WHERE WE
    //DIRECT THE USER TO THE WEBPAGE OF THEIR PREFERENCE -alan
    for (let index = 0; index < array_of_all_counts.length; index++) {
        const element = array[index];
        //if their preference is women's rights, direct the user to the specificed page
        
        //if their preference is race, direct the user to the specificed page
        //if their preference is lgbtq, direct the user to the specificed page
        //if their preference is education, direct the user to the specificed page
        //if their preference is mental health, direct the user to the specificed page
    }
    resultsContainer.innerHTML = `${current_highest_count}`;
}

submitButton.addEventListener('click', showResults);