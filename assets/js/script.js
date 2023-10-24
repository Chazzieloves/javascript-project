const questionsData = [{
        question: '1 - Which era is this iconic make-up from?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            '1600-1700', '1700-1800', '1800-1900'
        ],
        correctOption: '1700-1800'
    },
    {
        question: '2 - Pearlescent from fish scales is used in cosmetics since the ancient egypt to get a ... ?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Shimmery effect', 'Shiny effect', 'Glittery effect'
        ],
        correctOption: 'Shimmery effect'
    },
    {
        question: '3 - Before the 1920s, pale skin was a trend. Who changed this trend?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Jeanne Lanvin', 'Elsa Schiaparelli', 'Coco Chanel'
        ],
        correctOption: 'Coco Chanel'
    },
    {
        question: '4 - What is this product called? (used last in makeup routine)',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Primer', 'Setting Spray', 'Facemist'
        ],
        correctOption: 'Setting Spray'
    },
    {
        question: '5 - How much money is moved by the beauty industry per year?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            '30 billion dollars', '20 billion dollars', '25 billions dollars'
        ],
        correctOption: '20 billion dollars'
    },
    {
        question: '6 - What tones should she wear?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Cold', 'Neutral', 'Warm'
        ],
        correctOption: 'Cold'
    },
    {
        question: '7 - Which company was the first company producing hair-dye?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'L´Oreal', 'Wella', 'Schwarzkopf'
        ],
        correctOption: 'L´Oreal'
    },
    {
        question: '8 - Eyebrows are one of the most important steps of a makeup routine. Why?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'They need to match your hair', 'They appear to give you a facelift', 'They make your nose look straight'
        ],
        correctOption: 'They appear to give you a facelift'
    },
    {
        question: '9 - Which company created the first mascara in the 19th century?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'L´Oreal', 'Max Factor', 'Maybelline'
        ],
        correctOption: 'Maybelline'
    },
    {
        question: '10 - What do you use this for?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Nail cleaner', 'Face cleaner', 'Brush cleaner'
        ],
        correctOption: 'Face cleaner'
    },
    {
        question: '11 - Her lipstick is ... ?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Matte', 'Shiny', 'Shimmery'
        ],
        correctOption: 'Matte'
    },
    {
        question: '12 - Which alternative is incorrect, 1, 2 or 3, to create the perfect eyebrow-shape?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            '1', '2', '3'
        ],
        correctOption: '3'
    },
    {
        question: '13 - Which product is a must to achieve cateyes?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Eyeshadow', 'Kohl pencil', 'Eyeliner'
        ],
        correctOption: 'Eyeliner'
    },
    {
        question: '14 - Hairless armpits has not always been fashion, when did that change?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            '1920', '1915', '1925'
        ],
        correctOption: '1915'
    },
    {
        question: '15 - What is this facechart for?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Higlight/Contour', 'Blush/Rouge', 'Foundation/Concealer'
        ],
        correctOption: 'Higlight/Contour'
    },
    {
        question: '16 - Which country is the birthplace of the nailpolish?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'France', 'Russia', 'Kina'
        ],
        correctOption: 'Kina'
    },
    {
        question: '17 - Which eyeshadow-color would enhance this eye-color?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Green', 'Blue', 'Purple'
        ],
        correctOption: 'Purple'
    },
    {
        question: '18 - What is the name of this style?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Vintage', 'Rockabilly', 'Classic'
        ],
        correctOption: 'Vintage'
    },
    {
        question: '19 - What is this called?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            'Swatching', 'Mapping', 'Swapping'
        ],
        correctOption: 'Swatching'
    },
    {
        question: '20 - Where do you apply foundation to test if it is the correct shade?',
        image: 'assets/...',
        alt: 'the picture of smth',
        options: [
            '1', '2', '3'
        ],
        correctOption: '2'
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