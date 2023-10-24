const questionsData = [{
        question: '1 - Which era is this iconic make-up from?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '2 - Pearlescent from fish scales is used in cosmetics since the ancient egypt to get a ... ?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '3 - Before the 1920s, pale skin was a trend. Who changed this trend?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '4 - What is this product called? (used last in makeup routine)',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '5 - How much money is moved by the beauty industry per year?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '6 - What tones should she wear?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '7 - Which company was the first company producing hair-dye?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '8 - Eyebrows are one of the most important steps of a makeup routine. Why?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '9 - Which company created the first mascara in the 19th century?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '10 - What do you use this for?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '11 - Her lipstick is ... ?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '12 - Which alternative is incorrect, 1, 2 or 3, to create the perfect eyebrow-shape?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '13 - What do we call an eyeliner look that slims and enlongates our eyes, making them sharper?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '14 - Hairless armpits has not always been fashion, when did that change?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '15 - What is this facechart for?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '16 - Which country is the birthplace of the nailpolish?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '17 - Which eyeshadow-color would enhance this eye-color?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '18 - What is the name of this style?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '19 - What is this called?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'a', 'b', 'c'
        ],
        correctOption: 'b'
    },
    {
        question: '20 - Where do you apply foundation to test if it´s the correct shade?',
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