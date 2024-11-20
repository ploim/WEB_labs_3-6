let currentLevel = 0; // 0: начальный, 1: средний, 2: продвинутый
let correctAnswers = 0;
let wrongAnswers = 0;
let questionCount = 0;
let timer;
let timeLimit = 300; // Время в секундах
let questions = [];
let timeRemaining = timeLimit;

const levels = [
    { name: 'Начальный', operators: ['+', '-', '*'] },
    { name: 'Средний', operators: ['+', '-', '*', '>', '<', '===', '!=='] },
    { name: 'Продвинутый', operators: ['+', '-', '*', '>', '<', '===', '!==', '&&', '||', '&', '|'] }
];

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('submitAnswer').addEventListener('click', checkAnswer);
document.getElementById('restartBtn').addEventListener('click', restartGame);



function startGame() {
    correctAnswers = 0;
    wrongAnswers = 0;
    questionCount = 0;
    questions = [];
    
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    showLevel();
    startTimer();
}

function showLevel() {
    clearInterval(timer);
    document.getElementById('levelTitle').innerText = `${levels[currentLevel].name} уровень`;
    nextQuestion();
}

function nextQuestion() {
    if (questionCount >= 10) {
        endLevel();
        return;
    }
    
    const question = generateQuestion();
    questions.push(question);
    
    document.getElementById('question').innerText = question.text;
    document.getElementById('answer').value = '';
    
}

function generateQuestion() {
    const level = levels[currentLevel];
    const operator = level.operators[Math.floor(Math.random() * level.operators.length)];
    
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    
    let questionText = '';
    let correctAnswer;
    
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            questionText = `${num1} + ${num2}`;
            break;
        case '-':
            correctAnswer = num1 - num2;
            questionText = `${num1} - ${num2}`;
            break;
        case '*':
            correctAnswer = num1 * num2;
            questionText = `${num1} * ${num2}`;
            break;
        case '/':
            correctAnswer = num1 / num2;
            questionText = `${num1} / ${num2}`;
            break;
        case '>':
            correctAnswer = +(num1 > num2);
            questionText = `${num1} > ${num2}`;
            break;
        case '<':
            correctAnswer = +(num1 < num2);
            questionText = `${num1} < ${num2}`;
            break;
        case '===':
            correctAnswer = +(num1 === num2);
            questionText = `${num1} === ${num2}`;
            break;
        case '!==':
            correctAnswer = +(num1 !== num2);
            questionText = `${num1} !== ${num2}`;
            break;
        case '&&':
            correctAnswer = +((num1 > 5) && (num2 > 5));
            questionText = `(${num1} > 5) && (${num2} > 5)`;
            break;
        case '||':
            correctAnswer = Number((num1 > 5) || (num2 > 5));
            questionText = `(${num1} > 5) || (${num2} > 5)`;
            break;
        case '&':
            correctAnswer = +(num1 & num2);
            questionText = `${num1} & ${num2}`;
            break;
        case '|':
            correctAnswer = +(num1 | num2);
            questionText = `${num1} | ${num2}`;
            break;
    }
    console.log(correctAnswer);
    return { text: questionText, answer: correctAnswer };
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const currentQuestion = questions[questions.length - 1];
    
    if (String(currentQuestion.answer) === userAnswer) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    
    questionCount++;
    nextQuestion();
}

function startTimer() {
    let timeRemaining = timeLimit;
    document.getElementById('timer').innerText = `Время: ${timeRemaining} секунд`;
    
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById('timer').innerText = `Время: ${timeRemaining} секунд`;
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            wrongAnswers++;
            questionCount++;
            endLevel();
        }
    }, 1000);

}

function endLevel() {
    clearInterval(timer);
    showResult();
    }

function showResult() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    let message = `Игра окончена! ` +
                  `Правильные ответы: ${correctAnswers}, ` +
                  `Неправильные ответы: ${wrongAnswers}.`;
    if (correctAnswers / questionCount >= 0.8 && currentLevel == 2) {
        message += ' Поздравляем, вы прошли игру! Вы можете начать заново, либо закрыть страницу';
        document.getElementById('restartBtn').innerHTML = 'Начать заново'
    } else if (correctAnswers / questionCount >= 0.8 && currentLevel < levels.length - 1) {
        currentLevel++;
        message += ' Поздравляем, вы прошли уровень! Вы можете двигаться дальше';
        document.getElementById('restartBtn').innerHTML = 'Следующий уровень'
    } else {
        message += ' Попробуйте снова!';
        document.getElementById('restartBtn').innerHTML = 'Начать заново'
    }
    
    document.getElementById('finalMessage').innerText = message;
}

function restartGame() {
    document.getElementById('result').style.display = 'none';
    startGame();
}