const questionsData = [{
        question: '1 - Which era is this iconic make-up from?',
        image: 'assets/images/img0.png',
        alt: 'Marie Antoinette',
        options: [
            '1600-1700', '1700-1800', '1800-1900'
        ],
        correctOption: '1700-1800'
    },
    {
        question: '2 - Pearlescent from fish scales is used in cosmetics to get a ... ?',
        image: 'assets/images/img1.png',
        alt: 'Blue tang fish',
        options: [
            'Shimmery effect', 'Shiny effect', 'Glittery effect'
        ],
        correctOption: 'Shimmery effect'
    },
    {
        question: '3 - Before the 1920s, pale skin was a trend. Who changed this trend?',
        image: 'assets/images/img2.png',
        alt: 'Woman sunbathing',
        options: [
            'Jeanne Lanvin', 'Elsa Schiaparelli', 'Coco Chanel'
        ],
        correctOption: 'Coco Chanel'
    },
    {
        question: '4 - What is this product called? (used last in makeup routine)',
        image: 'assets/images/img3.png',
        alt: 'MUA spraying model',
        options: [
            'Primer', 'Setting Spray', 'Facemist'
        ],
        correctOption: 'Setting Spray'
    },
    {
        question: '5 - How much money is moved by the beauty industry per year?',
        image: 'assets/images/img4.png',
        alt: 'Money',
        options: [
            '30 billion dollars', '20 billion dollars', '25 billions dollars'
        ],
        correctOption: '20 billion dollars'
    },
    {
        question: '6 - What tones should she wear?',
        image: 'assets/images/img5.png',
        alt: 'Blonde blue eyed girl',
        options: [
            'Cold', 'Neutral', 'Warm'
        ],
        correctOption: 'Cold'
    },
    {
        question: '7 - Which company was the first company producing hair-dye?',
        image: 'assets/images/img6.png',
        alt: 'Girl with red dyed hair',
        options: [
            'L´Oreal', 'Wella', 'Schwarzkopf'
        ],
        correctOption: 'L´Oreal'
    },
    {
        question: '8 - Eyebrows can give you the visual effect of ... ?',
        image: 'assets/images/img7.png',
        alt: 'Brown eye with eyebrow',
        options: [
            'a smaller face', 'a facelift', 'a slim nose'
        ],
        correctOption: 'a facelift'
    },
    {
        question: '9 - Which company created the first mascara in the 19th century?',
        image: 'assets/images/img8.png',
        alt: 'Girl putting on mascara',
        options: [
            'L´Oreal', 'Max Factor', 'Maybelline'
        ],
        correctOption: 'Maybelline'
    },
    {
        question: '10 - What is this?',
        image: 'assets/images/img9.png',
        alt: 'Hand held machine with brush-head',
        options: [
            'Nail cleaner', 'Face cleaner', 'Brush cleaner'
        ],
        correctOption: 'Face cleaner'
    },
    {
        question: '11 - Her lipstick is ... ?',
        image: 'assets/images/img10.png',
        alt: 'Girl with pink lipstick',
        options: [
            'matte', 'shiny', 'shimmery'
        ],
        correctOption: 'matte'
    },
    {
        question: '12 - To get the perfect shape, which line is incorrect: 1, 2 or 3?',
        image: 'assets/images/img11.png',
        alt: 'Brow shape guide',
        options: [
            '1', '2', '3'
        ],
        correctOption: '3'
    },
    {
        question: '13 - Which product is a must to achieve cateyes?',
        image: 'assets/images/img12.png',
        alt: 'Cat',
        options: [
            'Eyeshadow', 'Kohl pencil', 'Eyeliner'
        ],
        correctOption: 'Eyeliner'
    },
    {
        question: '14 - Hairless armpits became a trend in ... ?',
        image: 'assets/images/img13.png',
        alt: 'Woman with hairless armpits',
        options: [
            '1920', '1915', '1925'
        ],
        correctOption: '1915'
    },
    {
        question: '15 - This facechart is for ... ?',
        image: 'assets/images/img14.png',
        alt: 'Facechart',
        options: [
            'Higlight/Contour', 'Blush/Rouge', 'Foundation/Concealer'
        ],
        correctOption: 'Higlight/Contour'
    },
    {
        question: '16 - Which country is the birthplace of the nailpolish?',
        image: 'assets/images/img15.png',
        alt: 'Red nails',
        options: [
            'France', 'Russia', 'China'
        ],
        correctOption: 'China'
    },
    {
        question: '17 - Which eyeshadow-color would enhance this eye-color?',
        image: 'assets/images/img16.png',
        alt: 'Green eye',
        options: [
            'Green', 'Blue', 'Purple'
        ],
        correctOption: 'Purple'
    },
    {
        question: '18 - What is this style called?',
        image: 'assets/images/img17.png',
        alt: 'Girl with bandana and red lipstick',
        options: [
            'Vintage', 'Rockabilly', 'Classic'
        ],
        correctOption: 'Vintage'
    },
    {
        question: '19 - What is this called?',
        image: 'assets/images/img18.png',
        alt: 'Eyeshadow on arm',
        options: [
            'Swatching', 'Mapping', 'Swapping'
        ],
        correctOption: 'Swatching'
    },
    {
        question: '20 - The correct place to test foundation shade is: 1, 2 or 3?',
        image: 'assets/images/img19.png',
        alt: 'Girl with number 1-3 on her face',
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