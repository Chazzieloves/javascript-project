const questionsData = [{
        question: '1 - how are you?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '2 - how are you?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
]




// start-btn
const startBtn = document.getElementById('start-btn');
const welcomeSection = document.getElementById('welcome-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const questionContainer = document.getElementById('question-contaner');
let temporQuestionsArray = []

console.log(startBtn)


const displayQuestion = function (indexToUseNow) {
    console.log(questionsData[indexToUseNow])
    // get the question itself
    questionData = questionsData[indexToUseNow].question
    console.log(questionData)
    // display the question

    questionContainer.innerHTML = questionData
}

const initiateQuiz = function () {
    console.log('quiz is starting');
    quizSection.classList.remove('hide');
    welcomeSection.classList.add('hide');
    let indexToUseNow = generateRandomIndex()
    console.log(indexToUseNow)
    let currentQuestion = questionsData[indexToUseNow]
    console.log(currentQuestion)
    // if indexToUseNow in temporQuestionsArray it is there: generateRandomIndex()
    // if not : display the question: displayQuestion
    displayQuestion(indexToUseNow)
}




startBtn.addEventListener('click', initiateQuiz)

console.log(questionsData)
console.log(Math.floor(Math.random() * questionsData.length))


const generateRandomIndex = function () {
    let index = Math.floor(Math.random() * questionsData.length);
    return index
}