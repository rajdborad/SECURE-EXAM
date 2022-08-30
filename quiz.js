// CREATE A QUIZ CLASS
class Quiz {
  constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.questionIndex = 0;
  }

  getQuestionIndex() {
      return this.questions[this.questionIndex];
  }

  guess(answer) {
      if (this.getQuestionIndex().isCorrectAnswer(answer)) {
          this.score++;
      }
      this.questionIndex++;
  }

  isEnded() {
      return this.questionIndex === this.questions.length;
  }
}

// Create a question Class
class Question {
  constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
  }

  isCorrectAnswer(choice) {
      return this.answer === choice;
  }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
  if (quiz.isEnded()) {
      showScores();
  } else {
      // show question
      let questionElement = document.getElementById("question");
      questionElement.innerHTML = quiz.getQuestionIndex().text;

      // show options
      let choices = quiz.getQuestionIndex().choices;
      for (let i = 0; i < choices.length; i++) {
          let choiceElement = document.getElementById("choice" + i);
          choiceElement.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

// GUESS ANSWER
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      displayQuestion();
  }
};

// SHOW QUIZ PROGRESS
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let ProgressElement = document.getElementById("progress");
  ProgressElement.innerHTML =
      `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
  // let quizEndHTML =
  //     ;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `
  <h1>Quiz Completed</h1>
  
  <div class="quiz-repeat">
    <button onClick="showScore()">Show Result</button>   
  </div>
  `;
};

function showScore() {
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `
  <h1>Exam Completed</h1>
  <h2 id='score'> You scored: ${quiz.score} of ${quiz.questions.length}</h2>
  <div class="quiz-repeat">
  <button onClick="showScore()">Show Result</button> 
  </div>
  `;
};

// Show name on different page
function aa(){
  let Sname = document.getElementById("username");
  
  document.getElementById('uname').innerHTML = `<h2>Welcome, `+document.getElementById("username");

}

// create questions here
let questions = [
  new Question(
      "Which class creates a TCP server socket, bound to the specified port?", ["Socket", "InetAddress",
       "ServerSocket", "DatagramSocket"], "ServerSocket"
  ),
  new Question(
    "Port numbers range from _____ to ______.", ["0 to 65535", "	1 to 65536",
     "	-65535 to 65536", "	0 to 1024"], "0 to 65535"
),
  new Question(
    "What is fullform of API?", ["Application Programming Interface", "Application Programming Infrastructure", 
    "Advanced Programming Interface", "Advanced Programming Infrastructure"], "Application Programming Interface"
),
  new Question(
      "Which interface is used to call stored procedure?", ["Statement", "PreparedStatement",
       "CallableStatement", "CallabledStatement"], "CallableStatement"
  ),
  new Question(
    "_____ is the parent class of java servlet.", ["Servlet", "GenericServlet",
     "HttpServlet", "ServletConfig"], "GenericServlet"
),
  new Question(
      "How to delete cookie in Adanced Java?", ["	cookie.setMaxAge(null)", "cookie.setMaxAge(‘0’)",
       "cookie.setMaxAge(-1)", "cookie.setMaxAge(0)"], "cookie.setMaxAge(0)"
  ),
  new Question(
    "Which Cookie is valid for multiple session ?", ["Non-persistent cookie", "Persistent cookie",
     "Multi-Cookie", "none of the above"], "Persistent cookie"
  ),
  new Question(
    "A JSP technically gets converted to a _____ during translation time.", ["web page", "servlet",
     "servlet config", "JSP config"], "servlet"
  ),
  new Question(
    "The ______ attribute is used to declare that the current page is the error page.", ["error", "errorPage",
     "isErrorPage", "JSPError"], "isErrorPage"
  ),
  new Question(
      "Select the correct option: Hibernate is ", ["open source", "ORM",
       "Both a&b", "none of the above"], "Both a&b"
  )
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(function() {
      if (quizTime <= 0) {
          clearInterval(quizTimer);
          showScores();
      } else {
          quizTime--;
          let sec = Math.floor(quizTime % 60);
          let min = Math.floor(quizTime / 60) % 60;
          counting.innerHTML = `TIME: ${min} : ${sec}`;
      }
  }, 1000);
}

startCountdown();

// mouse leave the screen

document.onmouseleave = function () {
  //alert("Please be on this window During Exam..");
}

// tab switch

window.onblur = function () {
  window.alert("Don't switch the tab.");
  window.open("login.html", '_self');
}


