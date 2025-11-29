
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "What is the main purpose of CSS?",
        answer: "styling"
    },
    {
        question: "Which tag is used to create a paragraph in HTML?",
        answer: "p"
    },
    {
        question: "What does JavaScript do?",
        answer: "interactivity"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        answer: "comment"
    }
];


function runQuiz() {
    
    let score = 0;
    
    
    for (let i = 0; i < quizQuestions.length; i++) {
       
        let userAnswer = prompt(quizQuestions[i].question);
        
        
        let cleanAnswer = userAnswer.toLowerCase().trim();
        let correctAnswer = quizQuestions[i].answer.toLowerCase().trim();
        
        
        if (cleanAnswer === correctAnswer) {
            score++;
            
            alert(" Correct! Well done!");
        } else {
            
            alert(` Sorry! The correct answer is: "${quizQuestions[i].answer}"`);
        }
    }
    
    
    alert(` Quiz Complete! You scored ${score} out of ${quizQuestions.length}!`);
    
    
    if (score === quizQuestions.length) {
        alert(" Perfect score! You're a JavaScript expert! ");
    } else if (score >= 3) {
        alert(" Great job! You're doing really well! ");
    } else {
        alert("Keep practicing! You'll get better with time! ");
    }
}


runQuiz();