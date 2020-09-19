new Vue({
    el:'#hrx_starter',
    data: {
        username: '',
        greeting: '',
        const startButton: document.getElementById('start'),
        const quizContainer: document.getElementById('quiz'),
        const resultsContainer: document.getElementById('results'),
        const submitButton: document.getElementById('submit')
    },
    methods: {
        greet: function() {

            this.greeting = "Hi, "
            this.greeting = this.greeting.concat(this.username, "!")
            
        }

        const startButton = document.getElementById('start');
        const quizContainer = document.getElementById('quiz');
        const resultsContainer = document.getElementById('results');
        const submitButton = document.getElementById('submit');
        
        function buildQuiz(){}

        function showResults(){}

        startButton.addEventListener('click', buildQuiz)
        


    }
});