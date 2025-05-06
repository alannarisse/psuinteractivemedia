//JavaScript for Quiz App
// Screens:

// start screen
let score = 0;
let questionNumber = 0;


//increment score
function incrementScore() {
    score++;
    $('#currentScore').text(score);
}

//increment question
function incrementQuestion() {
    questionNumber++;
    $('#onQuestion').text(questionNumber)
}

//start screen
function startScreen(){
    $('.startButton').on('click', function(e) {
        $('.start-page').css('display', 'none');
        $('.quiz-pages').css('display', 'flex');
        questionNumber = 1
        $('#onQuestion').text(questionNumber);
        console.log(questionData[questionNumber-1])
    })
    console.log('startScreen ran');
}

// quiz form display
function quizForm() {
    //replace question, answer choices, and value of each question
    $('#question-text').text(questionData[questionNumber].question);
    $('#answer-choice-1').text(questionData[questionNumber].answers[0])
    $('input[id= "Answer1"]').val(questionData[questionNumber].answers[0])
    $('#answer-choice-2').text(questionData[questionNumber].answers[1])
    $('input[id= "Answer2"]').val(questionData[questionNumber].answers[1])
    $('#answer-choice-3').text(questionData[questionNumber].answers[2])
    $('input[id= "Answer3"]').val(questionData[questionNumber].answers[2])
    $('#answer-choice-4').text(questionData[questionNumber].answers[3])
    $('input[id= "Answer4"]').val(questionData[questionNumber].answers[3])
    console.log('quizForm ran')
} 

//question screen and submit
function questionScreen (){
    $('form').on('submit', function(e){
        e.preventDefault();
        $(feedbackScreen);
        $('.quiz-pages').css('display', 'none');
        $(checkAnswer);
        if(questionNumber === questionData.length) {
        $('#next-question-button').text('Quiz Results')
        }
    })
    console.log('questionScreen ran')
    console.log('You are on question '+ questionNumber);
}

//check question answer
function checkAnswer() {
    //set answer to current value of input that is selected
    let answer = $('input[name = "answer"]:checked').val();
    if(answer === questionData[questionNumber-1].correctAns) {
        $('.incorrect-page').css('display', 'none');
        $('.correct-page').css('display', 'flex');
        $(incrementScore);
        console.log(score);
    } else {
        $('.incorrect-page').css('display', 'flex');
        $('#correct-answer-is').text('The correct answer is: '+ questionData[questionNumber-1].correctAns)
        $('.correct-page').css('display', 'none');
    }
    $(quizForm)
}


// feedback screen
function nextQuestion() {
    $('.next-question').on('click', function(event){
        if(questionNumber < questionData.length) {
            event.preventDefault();
            $('.answer-pages').css('display', 'none');
            $('.quiz-pages').css('display', 'flex');
            console.log('nextQuestion clicked')
            questionNumber++;
            $('#onQuestion').text(questionNumber)
        } else {
            event.preventDefault();
            finishScreen();
            $('.finish-page').css('display', 'flex');
        }
    console.log('this is working')
    $('input[name="answer"').prop('checked', false);
    })
    $(quizForm)
    console.log('You are on question ' + questionNumber);
}

//display feedback screens
function feedbackScreen(){
    $('.answer-pages').css('display', 'flex')
    console.log('feedbackScreen ran')
}



// finish screen
function finishScreen(){
        $('.answer-pages').css('display', 'none');
        $('.quiz-pages').css('display', 'none');
        console.log('finishScreen ran');
        $('#your-score').text('You scored '+ score + ' out of 5!');
        restartButton();
    }



//restart after the quiz
function restartButton() {
    $('.restart-quiz').on('click', function(){
        location.reload();
    })
}

// Data: question id, question, answer, correct answer

const questionData = [
    {
        id: 1,
        question: 'What energy system is responsible for the most powerful muscle contractions?',
        answers: ['a. Oxidative', 'b. Glycolytic', 'c. Phosphagen', 'd. None of the above'],
        correctAns: 'c. Phosphagen'
    },
    {
        id: 2,
        question: 'The current world record for the marathon equates to a running speed of approximately _____.',
        answers: ['a. 9mph', 'b. 13mph', 'c. 17mph', 'd. 20mph'],
        correctAns: 'b. 13mph'
    },
    {
        id: 3,
        question: 'Which muscle type is associated with endurance sports?',
        answers: ['a. Type IIa (fast twitch oxidative', 'b. Type IIb (fast twitch glycolytic', 'c. Type I (slow twitch)', 'd. Type III (intermediate twitch)'],
        correctAns: 'c. Type I (slow twitch)'
    },
    {
        id: 4,
        question: 'The human skeleton weighs approximately _____ in an adult male',
        answers: ['a. 13lbs', 'b. 26lbs', 'c. 8lbs', 'd. 17lbs'],
        correctAns: 'c. 8lbs'
    },
    {
        id: 5,
        question: 'VO2max is a measure of ______',
        answers: ['a. the maximum amount of oxygen your lungs can process during exercise.', 'b. the maximum velocity you can run for an extended period.', 'c. the maximum oxygen usage capabilities of your muscles during exrecise.', 'd. none of the above.'],
        correctAns: 'c. the maximum oxygen usage capabilities of your muscles during exrecise.'
    },
]


//render quiz
function renderQuiz(){
    $(startScreen)
    $(questionScreen);
    $(nextQuestion);
    $(finishScreen);
}

$(renderQuiz);